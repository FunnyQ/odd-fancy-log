import { displayOptions } from '../types/fancy-log';
export default class FancyLog {
    orgName: string;
    mainColor: string;
    constructor(orgName?: string, mainColor?: string);
    /**
     * display message in console
     * **only render correctly in Firefox.**
     */
    panel(message: string, options?: displayOptions): void;
    /**
     * show payload raw data, additional table layout if payload is object or array
     */
    raw(payload: any, options?: displayOptions): void;
    /**
     * show simple message
     */
    message(message: string | undefined, options?: displayOptions): void;
    private pill;
    private tabStyle;
    private panelStyle;
    private pillStyle;
    private panelTabText;
}
export { FancyLog };
//# sourceMappingURL=fancy-log.d.ts.map