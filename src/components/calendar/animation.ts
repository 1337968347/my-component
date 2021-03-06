import { AnimationBuilder } from '../../interface';
import { createAnimation } from '../../utils/animation';

export const enterAnimationBuilder: AnimationBuilder = (baseEl: HTMLElement) => {
  const baseAnimation = createAnimation();
  return baseAnimation
    .easing('ease-in')
    .duration(150)
    .addElement(baseEl.querySelector('.table'))
    .keyframes([
      { offset: 0, opacity: '0.01', transform: 'scale(1.1)' },
      { offset: 1, opacity: '1', transform: 'scale(1)' },
    ]);
};

export const backAnimationBuilder: AnimationBuilder = (baseEl: HTMLElement) => {
  const baseAnimation = createAnimation();
  return baseAnimation
    .easing('ease-in')
    .duration(150)
    .addElement(baseEl.querySelector('.table'))
    .keyframes([
      { offset: 0, opacity: '1', transform: 'scale(1)' },
      { offset: 1, opacity: '0.01', transform: 'scale(0.9)' },
    ]);
};
