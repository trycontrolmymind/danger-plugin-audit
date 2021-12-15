## danger-plugin-npm-audit

> Danger plugin which will give attention to `npm audit` summary

## Usage

Install:

```sh
npm i -D danger-plugin-yarn-audit
```

Dangerfile.ts:

```typescript
import { schedule } from "danger";
import yarnAudit from "danger-plugin-yarn-audit";

// Note: You need to use schedule()
schedule(yarnAudit());
```

## Options

```typescript
export interface Options {
  level?: Levels;
  maxBuffer?: number;
}
```

## Example

| severity | module                                                           | path                                                               | recommendation                    |
| -------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| ❗ high  | [glob-parent](https://github.com/advisories/GHSA-ww39-953v-wcq6) | webpack > watchpack > watchpack-chokidar2 > chokidar > glob-parent | Upgrade to version 5.1.2 or later |

Scanned 510 dependencies, info 0, low 0, moderate 0, high 1, critical 0.
