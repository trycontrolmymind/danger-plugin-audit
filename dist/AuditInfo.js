"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditInfo = void 0;
const os_1 = require("os");
const advisoryTemplate_1 = require("./templates/advisoryTemplate");
class AuditInfo {
    constructor(parser) {
        this.parser = parser;
    }
    log() {
        if (this.parser.advisories.length > 0) {
            const msg = [
                (0, advisoryTemplate_1.renderAdvisories)(this.parser.advisories),
                (0, advisoryTemplate_1.renderTotals)(this.parser.vulnTotal, this.parser.totalDeps),
            ].join(os_1.EOL);
            markdown(msg);
        }
    }
}
exports.AuditInfo = AuditInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0F1ZGl0SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBeUI7QUFHekIsbUVBQThFO0FBRTlFLE1BQWEsU0FBUztJQUNwQixZQUE2QixNQUFtQjtRQUFuQixXQUFNLEdBQU4sTUFBTSxDQUFhO0lBQUcsQ0FBQztJQUU3QyxHQUFHO1FBQ1IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxHQUFHO2dCQUNWLElBQUEsbUNBQWdCLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3hDLElBQUEsK0JBQVksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUMzRCxDQUFDLElBQUksQ0FBQyxRQUFHLENBQUMsQ0FBQztZQUNaLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBWkQsOEJBWUMifQ==