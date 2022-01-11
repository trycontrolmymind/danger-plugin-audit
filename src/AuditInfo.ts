import fs from "fs";
import path from "path";

import ejs from "ejs";

import { IAuditParser } from "./interfaces/IAuditParser";

export class AuditTemplate {
  private template: ejs.TemplateFunction = () => "";
  private defaultTplPath = path.join(__dirname, "ejs/template.ejs");

  constructor(private readonly parser: IAuditParser) {}

  public render() {
    if (this.parser.advisories.length > 0) {
      const msg = this.template({
        totals: this.parser.totals,
        advisories: this.parser.advisories,
      });
      markdown(msg);
    }
  }

  public loadTpl() {
    const fileContent = fs.readFileSync(this.defaultTplPath).toString("utf-8");
    this.template = ejs.compile(fileContent);
  }
}
