import { IAuditParser } from "./interfaces/IAuditParser";
export declare class AuditTemplate {
    private readonly parser;
    private template;
    private defaultTplPath;
    constructor(parser: IAuditParser);
    render(): void;
    loadTpl(): void;
}
