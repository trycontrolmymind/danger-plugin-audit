import { EOL } from "os";

import { IAdvisory, Levels, Totals } from "../interfaces";

export const renderAdvisories: (advs: IAdvisory[]) => string = (advs) => {
  return `|  severity | module  | path  | recommendation |
          | ---       | ---     | ---   | ---            |
		 ${advs.map((a) => renderAdvisory(a)).join(EOL)}`;
};

export const renderTotals: (totals: Totals, totalCount: number) => string = (
  totals,
  totalCount
) => {
  const values = Object.keys(totals)
    .map((key) => {
      return `${key} ${totals[key as Levels]}`;
    })
    .join(", ");
  return `Scanned ${totalCount} dependencies, found vulnerabilities: ${values}.`;
};

const renderAdvisory: (adv: IAdvisory) => string = (adv) => {
  return `| ${getTypeEmoji(adv.level)} ${adv.level} | [${adv.moduleName}](${
    adv.link
  }) | ${adv.path} | ${adv.recommendation} |`;
};

const getTypeEmoji: (level: Levels) => string = (l) => {
  switch (l) {
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
};
