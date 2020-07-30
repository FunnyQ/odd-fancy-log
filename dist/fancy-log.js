"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FancyLog = void 0;
class FancyLog {
    constructor(orgName = '', mainColor = '#00317d') {
        this.orgName = orgName;
        this.mainColor = mainColor;
        this.orgName = orgName || 'odd';
        this.mainColor = mainColor;
    }
    /**
     * display message in console
     */
    panel(message, options = {}) {
        console.log(`%c ${this.panelTabText(options)} %c${message}`, this.tabStyle(options.bgColor), this.panelStyle(options.bgColor));
    }
    /**
     * show payload raw data, additional table layout if payload is object or array
     */
    raw(payload, options = {}) {
        this.pill('RawData', options.tabTitle, options);
        console.group('Raw Data');
        console.log(payload);
        console.groupEnd();
        if (typeof payload === 'object') {
            console.groupCollapsed('table');
            console.table(payload, options.columns);
            console.groupEnd();
        }
    }
    /**
     * show simple message
     */
    message(message, options = {}) {
        this.pill('Message', message, options);
    }
    // private methods
    pill(rightSideContent, message, options = {}) {
        console.log(`%c ${this.orgName} %c ${rightSideContent} %c${message || ''}`, ...this.pillStyle(options.bgColor));
    }
    tabStyle(backgroundColor = this.mainColor) {
        return `
display: inline-block;
padding: .25em .5em;
line-height: 1em;
border: 1px solid #21447b;
border-bottom: none;
border-radius: 8px 8px 0 0;
background-color: ${backgroundColor};
color: #fff;
font-size: 10px;
font-weight: bold;
    `;
    }
    panelStyle(backgroundColor = '#333') {
        return `
display: block;
padding: .5em;
border: 1px solid #21447b;
border-radius: 0 8px 8px 8px;
background: ${backgroundColor};
color: #fff;
    `;
    }
    pillStyle(leftBg = this.mainColor) {
        return [
            `
display: inline-block;
padding: .25em;
line-height: .8em;
border: 1px solid #21447b;
border-right: none;
border-radius: 10px 0 0 10px;
background-color: ${leftBg};
color: #fff;
font-size: 10px;
      `,
            `
display: inline-block;
padding: .25em;
line-height: .8em;
border: 1px solid #21447b;
border-left: none;
border-radius: 0 10px 10px 0;
background-color: #fff;
color: ${leftBg};
font-size: 10px;
      `,
        ];
    }
    panelTabText(options = {}) {
        if (options.tabTitle) {
            return `${this.orgName} - ${options.tabTitle}`;
        }
        else {
            return this.orgName;
        }
    }
}
exports.default = FancyLog;
exports.FancyLog = FancyLog;
//# sourceMappingURL=fancy-log.js.map