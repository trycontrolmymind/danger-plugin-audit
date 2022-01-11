"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTemplate = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ejs_1 = __importDefault(require("ejs"));
class AuditTemplate {
    constructor(parser) {
        this.parser = parser;
        this.template = () => "";
        this.defaultTplPath = path_1.default.join(__dirname, "ejs/template.ejs");
    }
    render() {
        if (this.parser.advisories.length > 0) {
            const msg = this.template({
                totals: this.parser.totals,
                advisories: this.parser.advisories,
            });
            markdown(msg);
        }
    }
    loadTpl() {
        const fileContent = fs_1.default.readFileSync(this.defaultTplPath).toString("utf-8");
        this.template = ejs_1.default.compile(fileContent);
    }
}
exports.AuditTemplate = AuditTemplate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0F1ZGl0SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIsZ0RBQXdCO0FBRXhCLDhDQUFzQjtBQUl0QixNQUFhLGFBQWE7SUFJeEIsWUFBNkIsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUh6QyxhQUFRLEdBQXlCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMxQyxtQkFBYyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFFZCxDQUFDO0lBRTlDLE1BQU07UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDMUIsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTthQUNuQyxDQUFDLENBQUM7WUFDSCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSxPQUFPO1FBQ1osTUFBTSxXQUFXLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFwQkQsc0NBb0JDIn0=