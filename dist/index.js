"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const AuditInfo_1 = require("./AuditInfo");
const AuditParser_1 = require("./AuditParser");
const execAudit = async (auditCommand, options) => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(auditCommand, { maxBuffer: options.maxBuffer }, function (_, stdout, stderr) {
            /**
             * The command will exit with a non-0 exit code if
             * there are issues of any severity found.
             * The exit code will be a mask of the severities.
             */
            if (stderr) {
                return reject(new Error(stderr));
            }
            if (stdout) {
                resolve(stdout);
            }
            else {
                reject(new Error(`Unable to get stdout from "${auditCommand}"`));
            }
        });
    });
};
async function yarnAudit(options = {}) {
    const auditCommandArr = ["yarn audit --json"];
    if (options.level) {
        auditCommandArr.push("--level " + options.level);
    }
    if (options.groups) {
        auditCommandArr.push("--groups " + options.groups);
    }
    try {
        const auditAnswer = await execAudit(auditCommandArr.join(" "), options);
        const parser = new AuditParser_1.AuditParser();
        parser.parse(auditAnswer);
        const logger = new AuditInfo_1.AuditInfo(parser);
        logger.log();
    }
    catch (err) {
        fail("npm audit plugin error: " + JSON.stringify(err));
    }
}
exports.default = yarnAudit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBcUM7QUFFckMsMkNBQXdDO0FBQ3hDLCtDQUE0QztBQUc1QyxNQUFNLFNBQVMsR0FBRyxLQUFLLEVBQ3JCLFlBQW9CLEVBQ3BCLE9BQWdCLEVBQ0MsRUFBRTtJQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLElBQUEsb0JBQUksRUFDRixZQUFZLEVBQ1osRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUNoQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUN6Qjs7OztlQUlHO1lBQ0gsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNsQztZQUNELElBQUksTUFBTSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsOEJBQThCLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsRTtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFYSxLQUFLLFVBQVUsU0FBUyxDQUFDLFVBQW1CLEVBQUU7SUFDM0QsTUFBTSxlQUFlLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTlDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtRQUNqQixlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEQ7SUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDbEIsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsSUFBSTtRQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0sU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQixNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ2Q7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7QUFDSCxDQUFDO0FBckJELDRCQXFCQyJ9