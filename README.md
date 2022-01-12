## danger-plugin-audit

Danger plugin which will create notification when found any vulnerable `yarn audit` summary

## Usage

Install:

```sh
yarn add -D danger-plugin-audit
```

Dangerfile.ts:

```typescript
import { schedule } from "danger";
import { yarnAudit } from "danger-plugin-audit";

// Note: You need to use schedule()
schedule(yarnAudit());
```

## Options

### Filter by vulnerability level

Applying the level flag will limit the audit table to vulnerabilities of the corresponding level and above.

https://classic.yarnpkg.com/en/docs/cli/audit/#toc-commands

```typescript
schedule(yarnAudit({ level: "high" }));
```

### Group by type

Applying the groups flag will limit the audit table to vulnerabilities of the corresponding dependency groups (e.g dependencies, devDependencies).

https://classic.yarnpkg.com/en/docs/cli/audit/#toc-commands

```typescript
schedule(yarnAudit({ groups: "dependencies devDependencies" }));
```

## Example

| title                              | path          | patched in         | more          |
| ---                                | ---           | ---                | ---           |
| ⚠️ Prototype Pollution in node-jsonpointer | danger > jsonpointer | >=5.0.0 | [https://github.com/advisories/GHSA-282f-qqgm-c34q](https://github.com/advisories/GHSA-282f-qqgm-c34q) |
| ❗ Uncontrolled Resource Consumption in parse-link-header | danger > parse-link-header | >=2.0.0 | [https://github.com/advisories/GHSA-q674-xm3x-2926](https://github.com/advisories/GHSA-q674-xm3x-2926) |


2 vulnerabilities found - Package audited 167.  
Severity:  0 info |  0 low |  1 moderate |  1 high |  0 critical | 

Full example you can find here:
https://gitlab.com/vlaad360/example-project-danger/-/merge_requests/1
