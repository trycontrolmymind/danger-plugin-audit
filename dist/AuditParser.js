"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditParser = void 0;
const fs_1 = require("fs");
const os_1 = require("os");
class AuditParser {
    constructor() {
        this._vulnTotal = {};
        this._totalDeps = 0;
        this._advisories = [];
    }
    get totalDeps() {
        return this._totalDeps;
    }
    get vulnTotal() {
        return this._vulnTotal;
    }
    get advisories() {
        return this._advisories;
    }
    parse(str) {
        (0, fs_1.writeFileSync)("debug", str);
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
        this._vulnTotal = (data === null || data === void 0 ? void 0 : data.vulnerabilities) || this._vulnTotal;
        this._totalDeps = (data === null || data === void 0 ? void 0 : data.totalDependencies) || this._totalDeps;
    }
    parseAdvisory(data) {
        var _a;
        const advisory = data === null || data === void 0 ? void 0 : data.advisory;
        this._advisories.push({
            level: advisory === null || advisory === void 0 ? void 0 : advisory.severity,
            recommendation: advisory === null || advisory === void 0 ? void 0 : advisory.recommendation,
            link: advisory === null || advisory === void 0 ? void 0 : advisory.url,
            title: advisory === null || advisory === void 0 ? void 0 : advisory.title,
            path: (_a = data === null || data === void 0 ? void 0 : data.resolution) === null || _a === void 0 ? void 0 : _a.path.split(">").join(" > "),
            moduleName: advisory === null || advisory === void 0 ? void 0 : advisory.module_name,
        });
    }
}
exports.AuditParser = AuditParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXVkaXRQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkJBQW1DO0FBQ25DLDJCQUF5QjtBQUl6QixNQUFhLFdBQVc7SUFBeEI7UUFDVSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVyxHQUFnQixFQUFFLENBQUM7SUFxRHhDLENBQUM7SUFuREMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVc7UUFDdEIsSUFBQSxrQkFBYSxFQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQUcsQ0FBQyxDQUFDO1FBRWhDLFFBQVE7YUFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDYixRQUFRLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxJQUFJLEVBQUU7Z0JBQ2YsS0FBSyxjQUFjO29CQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsTUFBTTtnQkFDUixLQUFLLGVBQWU7b0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixNQUFNO2FBQ1Q7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFTO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsZUFBZSxLQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxpQkFBaUIsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9ELENBQUM7SUFFTyxhQUFhLENBQUMsSUFBUzs7UUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFFBQVEsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVE7WUFDekIsY0FBYyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxjQUFjO1lBQ3hDLElBQUksRUFBRSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsR0FBRztZQUNuQixLQUFLLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUs7WUFDdEIsSUFBSSxFQUFFLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFVBQVUsMENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuRCxVQUFVLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFdBQVc7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBeERELGtDQXdEQyJ9