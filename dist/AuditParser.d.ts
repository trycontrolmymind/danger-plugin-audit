import { IAdvisory } from "./interfaces";
export declare class AuditParser {
    private _vulnTotal;
    private _totalDeps;
    private _advisories;
    get totalDeps(): number;
    get vulnTotal(): Partial<Record<import("./interfaces").Levels, number>>;
    get advisories(): IAdvisory[];
    parse(str: string): void;
    private parseSummary;
    private parseAdvisory;
}
