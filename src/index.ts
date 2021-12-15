import { exec } from "child_process";

import { AuditInfo } from "./AuditInfo";
import { AuditParser } from "./AuditParser";
import { Options } from "./interfaces";

const execAudit = async (
  auditCommand: string,
  options: Options
): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(
      auditCommand,
      { maxBuffer: options.maxBuffer },
      function (_, stdout, stderr) {
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
        } else {
          reject(new Error(`Unable to get stdout from "${auditCommand}"`));
        }
      }
    );
  });
};

export default async function yarnAudit(options: Options = {}) {
  const auditCommandArr = ["yarn audit --json"];

  if (options.level) {
    auditCommandArr.push("--level " + options.level);
  }

  if (options.groups) {
    auditCommandArr.push("--groups " + options.groups);
  }

  try {
    const auditAnswer = await execAudit(auditCommandArr.join(" "), options);
    const parser = new AuditParser();
    parser.parse(auditAnswer);

    const logger = new AuditInfo(parser);
    logger.log();
  } catch (err) {
    fail("npm audit plugin error: " + JSON.stringify(err));
  }
}
