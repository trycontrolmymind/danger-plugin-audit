import { AuditParser } from "./AuditParser";
export declare class AuditInfo {
    private readonly parser;
    constructor(parser: AuditParser);
    log(): void;
}
