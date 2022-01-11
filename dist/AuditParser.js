"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YarnAuditParser = void 0;
const os_1 = require("os");
class YarnAuditParser {
    constructor() {
        this._totals = {
            severities: [],
            vulnerabilitiesCount: 0,
            packagesCount: 0,
        };
        this._advisories = [];
    }
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
    parse(str) {
        const splitted = str.split(os_1.EOL);
        splitted
            .filter((s) => !!s)
            .map((v) => {
            return JSON.parse(v);
        })
            .forEach((v) => {
            switch (v === null || v === void 0 ? void 0 : v.type) {
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
    parseSummary(data) {
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
    parseAdvisory(data) {
        var _a;
        const advisory = data === null || data === void 0 ? void 0 : data.advisory;
        this._advisories.push({
            levelEmoji: this.getTypeEmoji(advisory.severity),
            level: advisory === null || advisory === void 0 ? void 0 : advisory.severity,
            recommendation: advisory === null || advisory === void 0 ? void 0 : advisory.recommendation,
            link: advisory === null || advisory === void 0 ? void 0 : advisory.url,
            title: advisory === null || advisory === void 0 ? void 0 : advisory.title,
            path: (_a = data === null || data === void 0 ? void 0 : data.resolution) === null || _a === void 0 ? void 0 : _a.path.split(">").join(" > "),
            moduleName: advisory === null || advisory === void 0 ? void 0 : advisory.module_name,
            patchedIn: advisory === null || advisory === void 0 ? void 0 : advisory.patched_versions,
        });
    }
    getTypeEmoji(level) {
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
exports.YarnAuditParser = YarnAuditParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXVkaXRQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQXlCO0FBV3pCLE1BQWEsZUFBZTtJQUE1QjtRQUNVLFlBQU8sR0FBVztZQUN4QixVQUFVLEVBQUUsRUFBRTtZQUNkLG9CQUFvQixFQUFFLENBQUM7WUFDdkIsYUFBYSxFQUFFLENBQUM7U0FDakIsQ0FBQztRQUNNLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztJQWdGeEMsQ0FBQztJQTlFQyxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxHQUFXO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBRyxDQUFDLENBQUM7UUFFaEMsUUFBUTthQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7YUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNiLFFBQVEsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLElBQUksRUFBRTtnQkFDZixLQUFLLGNBQWM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixNQUFNO2dCQUNSLEtBQUssZUFBZTtvQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLE1BQU07YUFDVDtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sWUFBWSxDQUFDLElBQWtCO1FBQ3JDLElBQUkseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3ZFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMseUJBQXlCLElBQUksS0FBSyxDQUFDO1lBQ25DLE9BQU87Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO2FBQ04sQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyx5QkFBeUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2hELENBQUM7SUFFTyxhQUFhLENBQUMsSUFBbUI7O1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxLQUFLLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVE7WUFDekIsY0FBYyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxjQUFjO1lBQ3hDLElBQUksRUFBRSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsR0FBRztZQUNuQixLQUFLLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUs7WUFDdEIsSUFBSSxFQUFFLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFVBQVUsMENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuRCxVQUFVLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFdBQVc7WUFDakMsU0FBUyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxnQkFBZ0I7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxNQUFNO2dCQUNULE9BQU8sR0FBRyxDQUFDO1lBQ2IsS0FBSyxVQUFVO2dCQUNiLE9BQU8sSUFBSSxDQUFDO1lBQ2Q7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRjtBQXRGRCwwQ0FzRkMifQ==