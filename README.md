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

|  title | package  | path  | recommendation |
| ---       | ---     | ---   | ---            |
| ⚠️  Prototype Pollution in node-jsonpointer | [jsonpointer](https://github.com/advisories/GHSA-282f-qqgm-c34q) | danger > jsonpointer | Upgrade to version 5.0.0 or later |

Scanned 159 dependencies, found vulnerabilities: info 0, low 0, moderate 1, high 0, critical 0.
