import { displayOptions } from '../types/fancy-log'

export default class FancyLog {
  constructor(public orgName: string = '', public mainColor: string = '#00317d') {
    this.orgName = orgName || 'odd'
    this.mainColor = mainColor
  }

  /**
   * display message in console
   * **only render correctly in Firefox.**
   */
  public panel(message: string, options: displayOptions = {}): void {
    console.log(
      `%c ${this.panelTabText(options)} %c${message}`,
      this.tabStyle(options.bgColor),
      this.panelStyle(options.bgColor)
    )
  }

  /**
   * show payload raw data, additional table layout if payload is object or array
   */
  public raw(payload: any, options: displayOptions = {}): void {
    this.pill('RawData', options.tabTitle, options)
    console.group('Raw Data')
    console.log(payload)
    console.groupEnd()
    if (typeof payload === 'object') {
      console.groupCollapsed('table')
      console.table(payload, options.columns)
      console.groupEnd()
    }
  }

  /**
   * show simple message
   */
  public message(message: string | undefined, options: displayOptions = {}): void {
    this.pill('Message', message, options)
  }

  // private methods

  private pill(rightSideContent: string | undefined, message: string | undefined, options: displayOptions = {}): void {
    console.log(`%c ${this.orgName} %c ${rightSideContent} %c${message || ''}`, ...this.pillStyle(options.bgColor))
  }

  private tabStyle(backgroundColor: string = this.mainColor) {
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
    `
  }

  private panelStyle(backgroundColor: string = '#333') {
    return `
display: block;
padding: .5em;
border: 1px solid #21447b;
border-radius: 0 8px 8px 8px;
background: ${backgroundColor};
color: #fff;
    `
  }

  private pillStyle(leftBg: string = this.mainColor) {
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
      `
display: inline;
margin-left: 1em;
      `,
    ]
  }

  private panelTabText(options: displayOptions = {}): string {
    if (options.tabTitle) {
      return `${this.orgName} - ${options.tabTitle}`
    } else {
      return this.orgName
    }
  }
}

export { FancyLog }
