import { Levels } from "./commons";
export interface IAdvisoryYarn {
    advisory: {
        severity: Levels;
        recommendation: string;
        url: string;
        title: string;
        module_name: string;
        patched_versions: string;
    };
    resolution: {
        path: string;
    };
}
export interface ISummaryYarn {
    vulnerabilities: Record<string, number>;
    dependencies: number;
}
