export interface IAdvisory {
  levelEmoji: string;
  level: Levels;
  moduleName: string;
  title: string;
  recommendation: string;
  link: string;
  path: string;
  patchedIn: string;
}

export type Totals = {
  severities: Array<{ level: string; count: number }>;
  vulnerabilitiesCount: number;
  packagesCount: number;
};

export type Levels = "info" | "low" | "moderate" | "high" | "critical";
