import { EOL } from "os";

import {
  IAdvisory,
  IAdvisoryYarn,
  ISummaryYarn,
  Levels,
  Totals,
} from "./interfaces";
import { IAuditParser } from "./interfaces/IAuditParser";

export class YarnAuditParser implements IAuditParser {
  private _totals: Totals = {
    severities: [],
    vulnerabilitiesCount: 0,
    packagesCount: 0,
  };
  private _advisories: IAdvisory[] = [];

  get totals() {
    return this._totals;
  }

  get advisories() {
    return this._advisories;
  }

  /**
   * Parse stdout from yarn audit command
   * Find summary and advisories
   * @param str stdout from yarn audit command
   */
  public parse(str: string) {
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

  private parseSummary(data: ISummaryYarn) {
    let totalVulnerabilitiesCount = 0;
    this.totals.severities = Object.keys(data.vulnerabilities).map((level) => {
      const count = data.vulnerabilities[level];
      totalVulnerabilitiesCount += count;
      return {
        count,
        level,
      };
    });
    this.totals.vulnerabilitiesCount = totalVulnerabilitiesCount;
    this.totals.packagesCount = data.dependencies;
  }

  private parseAdvisory(data: IAdvisoryYarn) {
    const advisory = data?.advisory;
    this._advisories.push({
      levelEmoji: this.getTypeEmoji(advisory.severity),
      level: advisory?.severity,
      recommendation: advisory?.recommendation,
      link: advisory?.url,
      title: advisory?.title,
      path: data?.resolution?.path.split(">").join(" > "),
      moduleName: advisory?.module_name,
      patchedIn: advisory?.patched_versions,
    });
  }

  private getTypeEmoji(level: Levels) {
    switch (level) {
      case "info":
        return "ℹ️";
      case "low":
        return "🟦";
      case "moderate":
        return "⚠️";
      case "high":
        return "❗";
      case "critical":
        return "🚫";
      default:
        return "";
    }
  }
}
