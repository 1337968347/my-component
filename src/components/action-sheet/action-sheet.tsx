import { Component, Element, Prop, h, Host, ComponentInterface, Method } from '@stencil/core';
import { ActionSheetButton, Animation } from '../../interface';
import { prepareOverlay, present } from '../../utils/overlays';
import { createGesture, Gesture, GestureDetail } from '../../utils/gesture';
import { enterAnimationBuilder, leaveAnimationBuilder } from './animation';
import { getTimeGivenProgression } from '../../utils/animation/cubic-bezier';
import { clamp } from '../../utils/helpers';

@Component({
  tag: 'cy-action-sheet',
  styleUrl: 'action-sheet.scss',
  scoped: true,
})
export class ActionSheet implements ComponentInterface {
  private gesture?: Gesture;
  private leaveAnimation: Animation;
  private lastPull = 0;
  private canMovey = 0;
  @Element() el: HTMLElement;
  @Prop() color: string = '';
  @Prop() overlayIndex: number = 0;
  @Prop() header: string = '';
  @Prop() cssClass: string = '';
  @Prop() buttons: ActionSheetButton[] = [];

  componentWillLoad() {
    prepareOverlay(this.el);
  }

  componentDidLoad() {
    this.leaveAnimation = leaveAnimationBuilder(this.el);
    this.gesture = createGesture({
      el: this.el.querySelector('.action-sheet-title'),
      direction: 'y',
      passive: true,
      canStart: () => {
        return this.el.querySelector('.action-sheet-opers').scrollTop === 0;
      },
      onStart: this.onStart.bind(this),
      onMove: this.onMove.bind(this),
      onEnd: this.onEnd.bind(this),
    });
    this.gesture.enable();
  }

  onStart() {
    document.body.style.overscrollBehavior = 'none';
    this.leaveAnimation.progressStart(true, 0);
    this.canMovey = this.el.querySelector('.drag-container').clientHeight;
  }

  onMove(e: GestureDetail) {
    const step = clamp(0, e.deltaY / this.canMovey, 1);
    this.leaveAnimation.progressStep(step);
  }

  async onEnd(e: GestureDetail) {
    this.lastPull = Date.now();

    const moveY = e.currentY - e.startY;
    if (moveY > this.canMovey / 2) {
      await this.leaveAnimation.play();
      this.el.remove();
    } else {
      const step = clamp(0, e.deltaY / screen.height, 0.9999);
      // .36,.66,.04,1
      const newStep = getTimeGivenProgression([0, 0], [0.36, 0.66], [0.04, 1], [1, 1], step)[0];
      this.leaveAnimation.progressEnd(0, newStep);
    }
  }

  @Method()
  async present() {
    present(this, enterAnimationBuilder);
  }

  @Method()
  async dismiss() {
    this.leaveAnimation.progressStart(false, 0);
    await this.leaveAnimation.play();
    this.el.remove();
  }

  async onClick(button: ActionSheetButton) {
    // pc拖动后事件
    if (this.lastPull + 300 > Date.now()) {
      return;
    }
    button.handler && (await button.handler());
    this.dismiss();
  }

  onBackDropClick() {
    this.dismiss();
  }

  render() {
    const actionSheets = this.buttons.filter(item => item.role !== 'cancel');
    const actionCancel = this.buttons.find(item => item.role === 'cancel');
    return (
      <Host
        class={{
          [`cy-color-${this.color}`]: !!this.color,
          'overlay-hidden': true,
          'action-sheet-overlay': true,
        }}
        style={{
          zIndex: `${this.overlayIndex}`,
        }}>
        <cy-backdrop onBackDrop={this.onBackDropClick.bind(this)} />
        <div class={'action-sheet-container ' + this.cssClass}>
          <div class="drag-container">
            <div class="action-sheet-group">
              <div class="action-sheet-title">{this.header}</div>
              <div class="action-sheet-opers">
                {actionSheets.map(button => (
                  <div
                    class="action-sheet-oper activatable"
                    onClick={() => {
                      this.onClick(button);
                    }}>
                    {button.text}
                    <cy-ripple />
                  </div>
                ))}
              </div>
            </div>
            {actionCancel ? (
              <div class="action-sheet-group action-sheet-cancel">
                <div
                  class="action-sheet-oper activatable"
                  onClick={() => {
                    this.onClick(actionCancel);
                  }}>
                  {actionCancel.text}
                  <cy-ripple />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
