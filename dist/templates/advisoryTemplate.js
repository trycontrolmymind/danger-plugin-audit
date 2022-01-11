"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTotals = exports.renderAdvisories = void 0;
const os_1 = require("os");
const renderAdvisories = (advs) => {
    return `|  title   | path  | recommendation |
| ---     | ---   | ---            |
${advs.map((a) => renderAdvisory(a)).join(os_1.EOL)}`;
};
exports.renderAdvisories = renderAdvisories;
const renderTotals = (totals, totalCount) => {
    const values = Object.keys(totals)
        .map((key) => {
        return `${key} ${totals[key]}`;
    })
        .join(", ");
    return `Scanned ${totalCount} dependencies, found vulnerabilities: ${values}.`;
};
exports.renderTotals = renderTotals;
const renderAdvisory = (adv) => {
    return `| ${getTypeEmoji(adv.level)}  ${adv.title} | [${adv.moduleName}](${adv.link}) | ${adv.path} | ${adv.recommendation} |`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2aXNvcnlUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZXMvYWR2aXNvcnlUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBeUI7QUFJbEIsTUFBTSxnQkFBZ0IsR0FBa0MsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUN0RSxPQUFPOztFQUVQLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFHLENBQUMsRUFBRSxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUpXLFFBQUEsZ0JBQWdCLG9CQUkzQjtBQUVLLE1BQU0sWUFBWSxHQUFtRCxDQUMxRSxNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUU7SUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUMvQixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNYLE9BQU8sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQWEsQ0FBQyxFQUFFLENBQUM7SUFDM0MsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2QsT0FBTyxXQUFXLFVBQVUseUNBQXlDLE1BQU0sR0FBRyxDQUFDO0FBQ2pGLENBQUMsQ0FBQztBQVZXLFFBQUEsWUFBWSxnQkFVdkI7QUFFRixNQUFNLGNBQWMsR0FBK0IsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN6RCxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEtBQ3BFLEdBQUcsQ0FBQyxJQUNOLE9BQU8sR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsY0FBYyxJQUFJLENBQUM7QUFDOUMsQ0FBQyxDQUFDIn0=