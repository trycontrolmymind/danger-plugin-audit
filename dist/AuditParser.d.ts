import { IAdvisory, Totals } from "./interfaces";
import { IAuditParser } from "./interfaces/IAuditParser";
export declare class YarnAuditParser implements IAuditParser {
    private _totals;
    private _advisories;
    get totals(): Totals;
    get advisories(): IAdvisory[];
    /**
     * Parse stdout from yarn audit command
     * Find summary and advisories
     * @param str stdout from yarn audit command
     */
    parse(str: string): void;
    private parseSummary;
    private parseAdvisory;
    private getTypeEmoji;
}
