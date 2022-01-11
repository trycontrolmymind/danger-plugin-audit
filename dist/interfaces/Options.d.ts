import { Levels } from "./commons";
export interface Options {
    /**
     * Applying the level flag will limit the audit table to vulnerabilities
     * of the corresponding level and above.
     * It will not affect the exit code of the command.
     * @see https://classic.yarnpkg.com/en/docs/cli/audit/#toc-commands
     */
    level?: Levels;
    /**
     * Applying the groups flag will limit the audit table to vulnerabilities
     * of the corresponding dependency groups (e.g dependencies, devDependencies).
     * @see https://classic.yarnpkg.com/en/docs/cli/audit/#toc-commands
     */
    groups?: string;
    /**
     * The maxBuffer option specifies the largest number of bytes allowed on
     * stdout or stderr. If this value is exceeded,
     * then the child process is terminated.
     * @see https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html#child_processexecsynccommand-options
     */
    maxBuffer?: number;
}
