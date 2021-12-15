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
  maxBuffer?: number;
}

export interface IAdvisory {
  level: Levels;
  moduleName: string;
  title: string;
  recommendation: string;
  link: string;
  path: string;
}

export type Totals = Partial<Record<Levels, number>>;

export type Levels = "info" | "low" | "moderate" | "high" | "critical";
