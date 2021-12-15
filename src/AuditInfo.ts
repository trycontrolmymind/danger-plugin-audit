import { EOL } from "os";

import { AuditParser } from "./AuditParser";
import { renderAdvisories, renderTotals } from "./templates/advisoryTemplate";

export class AuditInfo {
  constructor(private readonly parser: AuditParser) {}

  public log() {
    if (this.parser.advisories.length > 0) {
      const msg = [
        renderAdvisories(this.parser.advisories),
        renderTotals(this.parser.vulnTotal, this.parser.totalDeps),
      ].join(EOL);
      markdown(msg);
    }
  }
}
