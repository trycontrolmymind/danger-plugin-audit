import { writeFileSync } from "fs";
import { EOL } from "os";

import { IAdvisory, Totals } from "./interfaces";

export class AuditParser {
  private _vulnTotal: Totals = {};
  private _totalDeps = 0;
  private _advisories: IAdvisory[] = [];

  get totalDeps() {
    return this._totalDeps;
  }

  get vulnTotal() {
    return this._vulnTotal;
  }

  get advisories() {
    return this._advisories;
  }

  public parse(str: string) {
    writeFileSync("debug", str);
    const splitted = str.split(EOL);

    splitted
      .filter((s) => !!s)
      .map((v) => {
        return JSON.parse(v);
      })
      .forEach((v) => {
        switch (v?.type) {
          case "auditSummary":
            this.parseSummary(v.data);
            break;
          case "auditAdvisory":
            this.parseAdvisory(v.data);
            break;
        }
        return v;
      });
  }

  private parseSummary(data: any) {
    this._vulnTotal = data?.vulnerabilities || this._vulnTotal;

    this._totalDeps = data?.totalDependencies || this._totalDeps;
  }

  private parseAdvisory(data: any) {
    const advisory = data?.advisory;
    this._advisories.push({
      level: advisory?.severity,
      recommendation: advisory?.recommendation,
      link: advisory?.url,
      title: advisory?.title,
      path: data?.resolution?.path.split(">").join(" > "),
      moduleName: advisory?.module_name,
    });
  }
}
