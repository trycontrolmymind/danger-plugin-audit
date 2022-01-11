import { IAdvisory, Totals } from ".";
export interface IAuditParser {
    totals: Totals;
    advisories: IAdvisory[];
    parse(str: string): void;
}
