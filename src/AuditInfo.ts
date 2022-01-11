import fs from "fs";
import path from "path";

import ejs from "ejs";

import { AuditParser } from "./AuditParser";
export class AuditInfo {
  private template: ejs.TemplateFunction = () => "";
  private defaultTplPath = path.join(__dirname, "ejs/template.ejs");

  constructor(private readonly parser: AuditParser) {}

  public log() {
    if (this.parser.advisories.length > 0) {
      const msg = this.template({
        totals: this.parser.totals,
        advisories: this.parser.advisories,
      });
      markdown(msg);
    }
  }

  public loadTpls() {
    const fileContent = fs.readFileSync(this.defaultTplPath).toString("utf-8");
    this.template = ejs.compile(fileContent);
  }
}
