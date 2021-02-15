/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActionSheetButton } from "./interface";
export namespace Components {
    interface CyActionSheet {
        "buttons": ActionSheetButton[];
        "cssClass": string;
        "dismiss": () => Promise<void>;
        "header": string;
        "overlayIndex": number;
        "present": () => Promise<void>;
    }
    interface CyApp {
    }
    interface CyBackdrop {
        "stopPropagation": boolean;
        "tappable": boolean;
    }
    interface CyButton {
        "color": string;
        "expend": 'default' | 'full' | 'block';
    }
    interface CyCalendar {
    }
    interface CyCalendarDay {
        "chooseMonth": number;
        "chooseYear": number;
        "nextPage": () => Promise<void>;
        "prevPage": () => Promise<void>;
    }
    interface CyCalendarMouth {
        "chooseYear": number;
        "nextPage": () => Promise<void>;
        "prevPage": () => Promise<void>;
    }
    interface CyCalendarYear {
        "chooseYear": number;
        "nextPage": () => Promise<void>;
        "prevPage": () => Promise<void>;
    }
    interface CyCheckbox {
        "checked": boolean;
        "color": string;
    }
    interface CyContent {
    }
    interface CyHeader {
        "color": string;
    }
    interface CyIcon {
        "name": string;
    }
    interface CyItem {
        "button": boolean;
        "color": string;
        "line": boolean;
    }
    interface CyMenu {
        "close": () => Promise<void>;
        "open": () => Promise<void>;
    }
    interface CyModal {
    }
    interface CyNav {
        "addCom": () => Promise<void>;
        "pop": () => Promise<void>;
    }
    interface CyRefresh {
    }
    interface CyRipple {
        "type": 'unbounded' | 'bounded';
    }
    interface CySegment {
        "color": string;
        "scrollable": boolean;
        "value": string;
    }
    interface CySegmentButton {
        "update": () => Promise<void>;
        "value": string;
    }
    interface CySpinner {
        "color": string;
    }
    interface CyTime {
        "color": string;
    }
    interface CyToggle {
        "color": string;
    }
    interface PageHome {
    }
    interface PageOne {
        "comId": string;
    }
    interface PageRoot {
    }
}
declare global {
    interface HTMLCyActionSheetElement extends Components.CyActionSheet, HTMLStencilElement {
    }
    var HTMLCyActionSheetElement: {
        prototype: HTMLCyActionSheetElement;
        new (): HTMLCyActionSheetElement;
    };
    interface HTMLCyAppElement extends Components.CyApp, HTMLStencilElement {
    }
    var HTMLCyAppElement: {
        prototype: HTMLCyAppElement;
        new (): HTMLCyAppElement;
    };
    interface HTMLCyBackdropElement extends Components.CyBackdrop, HTMLStencilElement {
    }
    var HTMLCyBackdropElement: {
        prototype: HTMLCyBackdropElement;
        new (): HTMLCyBackdropElement;
    };
    interface HTMLCyButtonElement extends Components.CyButton, HTMLStencilElement {
    }
    var HTMLCyButtonElement: {
        prototype: HTMLCyButtonElement;
        new (): HTMLCyButtonElement;
    };
    interface HTMLCyCalendarElement extends Components.CyCalendar, HTMLStencilElement {
    }
    var HTMLCyCalendarElement: {
        prototype: HTMLCyCalendarElement;
        new (): HTMLCyCalendarElement;
    };
    interface HTMLCyCalendarDayElement extends Components.CyCalendarDay, HTMLStencilElement {
    }
    var HTMLCyCalendarDayElement: {
        prototype: HTMLCyCalendarDayElement;
        new (): HTMLCyCalendarDayElement;
    };
    interface HTMLCyCalendarMouthElement extends Components.CyCalendarMouth, HTMLStencilElement {
    }
    var HTMLCyCalendarMouthElement: {
        prototype: HTMLCyCalendarMouthElement;
        new (): HTMLCyCalendarMouthElement;
    };
    interface HTMLCyCalendarYearElement extends Components.CyCalendarYear, HTMLStencilElement {
    }
    var HTMLCyCalendarYearElement: {
        prototype: HTMLCyCalendarYearElement;
        new (): HTMLCyCalendarYearElement;
    };
    interface HTMLCyCheckboxElement extends Components.CyCheckbox, HTMLStencilElement {
    }
    var HTMLCyCheckboxElement: {
        prototype: HTMLCyCheckboxElement;
        new (): HTMLCyCheckboxElement;
    };
    interface HTMLCyContentElement extends Components.CyContent, HTMLStencilElement {
    }
    var HTMLCyContentElement: {
        prototype: HTMLCyContentElement;
        new (): HTMLCyContentElement;
    };
    interface HTMLCyHeaderElement extends Components.CyHeader, HTMLStencilElement {
    }
    var HTMLCyHeaderElement: {
        prototype: HTMLCyHeaderElement;
        new (): HTMLCyHeaderElement;
    };
    interface HTMLCyIconElement extends Components.CyIcon, HTMLStencilElement {
    }
    var HTMLCyIconElement: {
        prototype: HTMLCyIconElement;
        new (): HTMLCyIconElement;
    };
    interface HTMLCyItemElement extends Components.CyItem, HTMLStencilElement {
    }
    var HTMLCyItemElement: {
        prototype: HTMLCyItemElement;
        new (): HTMLCyItemElement;
    };
    interface HTMLCyMenuElement extends Components.CyMenu, HTMLStencilElement {
    }
    var HTMLCyMenuElement: {
        prototype: HTMLCyMenuElement;
        new (): HTMLCyMenuElement;
    };
    interface HTMLCyModalElement extends Components.CyModal, HTMLStencilElement {
    }
    var HTMLCyModalElement: {
        prototype: HTMLCyModalElement;
        new (): HTMLCyModalElement;
    };
    interface HTMLCyNavElement extends Components.CyNav, HTMLStencilElement {
    }
    var HTMLCyNavElement: {
        prototype: HTMLCyNavElement;
        new (): HTMLCyNavElement;
    };
    interface HTMLCyRefreshElement extends Components.CyRefresh, HTMLStencilElement {
    }
    var HTMLCyRefreshElement: {
        prototype: HTMLCyRefreshElement;
        new (): HTMLCyRefreshElement;
    };
    interface HTMLCyRippleElement extends Components.CyRipple, HTMLStencilElement {
    }
    var HTMLCyRippleElement: {
        prototype: HTMLCyRippleElement;
        new (): HTMLCyRippleElement;
    };
    interface HTMLCySegmentElement extends Components.CySegment, HTMLStencilElement {
    }
    var HTMLCySegmentElement: {
        prototype: HTMLCySegmentElement;
        new (): HTMLCySegmentElement;
    };
    interface HTMLCySegmentButtonElement extends Components.CySegmentButton, HTMLStencilElement {
    }
    var HTMLCySegmentButtonElement: {
        prototype: HTMLCySegmentButtonElement;
        new (): HTMLCySegmentButtonElement;
    };
    interface HTMLCySpinnerElement extends Components.CySpinner, HTMLStencilElement {
    }
    var HTMLCySpinnerElement: {
        prototype: HTMLCySpinnerElement;
        new (): HTMLCySpinnerElement;
    };
    interface HTMLCyTimeElement extends Components.CyTime, HTMLStencilElement {
    }
    var HTMLCyTimeElement: {
        prototype: HTMLCyTimeElement;
        new (): HTMLCyTimeElement;
    };
    interface HTMLCyToggleElement extends Components.CyToggle, HTMLStencilElement {
    }
    var HTMLCyToggleElement: {
        prototype: HTMLCyToggleElement;
        new (): HTMLCyToggleElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageOneElement extends Components.PageOne, HTMLStencilElement {
    }
    var HTMLPageOneElement: {
        prototype: HTMLPageOneElement;
        new (): HTMLPageOneElement;
    };
    interface HTMLPageRootElement extends Components.PageRoot, HTMLStencilElement {
    }
    var HTMLPageRootElement: {
        prototype: HTMLPageRootElement;
        new (): HTMLPageRootElement;
    };
    interface HTMLElementTagNameMap {
        "cy-action-sheet": HTMLCyActionSheetElement;
        "cy-app": HTMLCyAppElement;
        "cy-backdrop": HTMLCyBackdropElement;
        "cy-button": HTMLCyButtonElement;
        "cy-calendar": HTMLCyCalendarElement;
        "cy-calendar-day": HTMLCyCalendarDayElement;
        "cy-calendar-mouth": HTMLCyCalendarMouthElement;
        "cy-calendar-year": HTMLCyCalendarYearElement;
        "cy-checkbox": HTMLCyCheckboxElement;
        "cy-content": HTMLCyContentElement;
        "cy-header": HTMLCyHeaderElement;
        "cy-icon": HTMLCyIconElement;
        "cy-item": HTMLCyItemElement;
        "cy-menu": HTMLCyMenuElement;
        "cy-modal": HTMLCyModalElement;
        "cy-nav": HTMLCyNavElement;
        "cy-refresh": HTMLCyRefreshElement;
        "cy-ripple": HTMLCyRippleElement;
        "cy-segment": HTMLCySegmentElement;
        "cy-segment-button": HTMLCySegmentButtonElement;
        "cy-spinner": HTMLCySpinnerElement;
        "cy-time": HTMLCyTimeElement;
        "cy-toggle": HTMLCyToggleElement;
        "page-home": HTMLPageHomeElement;
        "page-one": HTMLPageOneElement;
        "page-root": HTMLPageRootElement;
    }
}
declare namespace LocalJSX {
    interface CyActionSheet {
        "buttons"?: ActionSheetButton[];
        "cssClass"?: string;
        "header"?: string;
        "overlayIndex"?: number;
    }
    interface CyApp {
    }
    interface CyBackdrop {
        "onBackDrop"?: (event: CustomEvent<any>) => void;
        "stopPropagation"?: boolean;
        "tappable"?: boolean;
    }
    interface CyButton {
        "color"?: string;
        "expend"?: 'default' | 'full' | 'block';
    }
    interface CyCalendar {
    }
    interface CyCalendarDay {
        "chooseMonth"?: number;
        "chooseYear"?: number;
        "onChoose"?: (event: CustomEvent<any>) => void;
    }
    interface CyCalendarMouth {
        "chooseYear"?: number;
        "onChoose"?: (event: CustomEvent<any>) => void;
    }
    interface CyCalendarYear {
        "chooseYear"?: number;
        "onChoose"?: (event: CustomEvent<any>) => void;
    }
    interface CyCheckbox {
        "checked"?: boolean;
        "color"?: string;
    }
    interface CyContent {
    }
    interface CyHeader {
        "color"?: string;
    }
    interface CyIcon {
        "name"?: string;
    }
    interface CyItem {
        "button"?: boolean;
        "color"?: string;
        "line"?: boolean;
    }
    interface CyMenu {
    }
    interface CyModal {
    }
    interface CyNav {
    }
    interface CyRefresh {
    }
    interface CyRipple {
        "type"?: 'unbounded' | 'bounded';
    }
    interface CySegment {
        "color"?: string;
        "onCyChange"?: (event: CustomEvent<any>) => void;
        "scrollable"?: boolean;
        "value"?: string;
    }
    interface CySegmentButton {
        "value"?: string;
    }
    interface CySpinner {
        "color"?: string;
    }
    interface CyTime {
        "color"?: string;
    }
    interface CyToggle {
        "color"?: string;
    }
    interface PageHome {
    }
    interface PageOne {
        "comId"?: string;
    }
    interface PageRoot {
    }
    interface IntrinsicElements {
        "cy-action-sheet": CyActionSheet;
        "cy-app": CyApp;
        "cy-backdrop": CyBackdrop;
        "cy-button": CyButton;
        "cy-calendar": CyCalendar;
        "cy-calendar-day": CyCalendarDay;
        "cy-calendar-mouth": CyCalendarMouth;
        "cy-calendar-year": CyCalendarYear;
        "cy-checkbox": CyCheckbox;
        "cy-content": CyContent;
        "cy-header": CyHeader;
        "cy-icon": CyIcon;
        "cy-item": CyItem;
        "cy-menu": CyMenu;
        "cy-modal": CyModal;
        "cy-nav": CyNav;
        "cy-refresh": CyRefresh;
        "cy-ripple": CyRipple;
        "cy-segment": CySegment;
        "cy-segment-button": CySegmentButton;
        "cy-spinner": CySpinner;
        "cy-time": CyTime;
        "cy-toggle": CyToggle;
        "page-home": PageHome;
        "page-one": PageOne;
        "page-root": PageRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cy-action-sheet": LocalJSX.CyActionSheet & JSXBase.HTMLAttributes<HTMLCyActionSheetElement>;
            "cy-app": LocalJSX.CyApp & JSXBase.HTMLAttributes<HTMLCyAppElement>;
            "cy-backdrop": LocalJSX.CyBackdrop & JSXBase.HTMLAttributes<HTMLCyBackdropElement>;
            "cy-button": LocalJSX.CyButton & JSXBase.HTMLAttributes<HTMLCyButtonElement>;
            "cy-calendar": LocalJSX.CyCalendar & JSXBase.HTMLAttributes<HTMLCyCalendarElement>;
            "cy-calendar-day": LocalJSX.CyCalendarDay & JSXBase.HTMLAttributes<HTMLCyCalendarDayElement>;
            "cy-calendar-mouth": LocalJSX.CyCalendarMouth & JSXBase.HTMLAttributes<HTMLCyCalendarMouthElement>;
            "cy-calendar-year": LocalJSX.CyCalendarYear & JSXBase.HTMLAttributes<HTMLCyCalendarYearElement>;
            "cy-checkbox": LocalJSX.CyCheckbox & JSXBase.HTMLAttributes<HTMLCyCheckboxElement>;
            "cy-content": LocalJSX.CyContent & JSXBase.HTMLAttributes<HTMLCyContentElement>;
            "cy-header": LocalJSX.CyHeader & JSXBase.HTMLAttributes<HTMLCyHeaderElement>;
            "cy-icon": LocalJSX.CyIcon & JSXBase.HTMLAttributes<HTMLCyIconElement>;
            "cy-item": LocalJSX.CyItem & JSXBase.HTMLAttributes<HTMLCyItemElement>;
            "cy-menu": LocalJSX.CyMenu & JSXBase.HTMLAttributes<HTMLCyMenuElement>;
            "cy-modal": LocalJSX.CyModal & JSXBase.HTMLAttributes<HTMLCyModalElement>;
            "cy-nav": LocalJSX.CyNav & JSXBase.HTMLAttributes<HTMLCyNavElement>;
            "cy-refresh": LocalJSX.CyRefresh & JSXBase.HTMLAttributes<HTMLCyRefreshElement>;
            "cy-ripple": LocalJSX.CyRipple & JSXBase.HTMLAttributes<HTMLCyRippleElement>;
            "cy-segment": LocalJSX.CySegment & JSXBase.HTMLAttributes<HTMLCySegmentElement>;
            "cy-segment-button": LocalJSX.CySegmentButton & JSXBase.HTMLAttributes<HTMLCySegmentButtonElement>;
            "cy-spinner": LocalJSX.CySpinner & JSXBase.HTMLAttributes<HTMLCySpinnerElement>;
            "cy-time": LocalJSX.CyTime & JSXBase.HTMLAttributes<HTMLCyTimeElement>;
            "cy-toggle": LocalJSX.CyToggle & JSXBase.HTMLAttributes<HTMLCyToggleElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-one": LocalJSX.PageOne & JSXBase.HTMLAttributes<HTMLPageOneElement>;
            "page-root": LocalJSX.PageRoot & JSXBase.HTMLAttributes<HTMLPageRootElement>;
        }
    }
}
