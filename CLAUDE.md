# odd-fancy-log

Legacy TypeScript library. Still used by production apps. Keep changes minimal.

## Toolchain

- Use Node 20.17.0: `mise exec node@20.17.0 -- yarn <script>`.
- `yarn build` runs `tsc` into `dist/`.

## Checks

- There is no test script. Run `npx tsc --noEmit` to verify a change.

## Consumers

- Apps install this repo by git URL and pin a commit SHA in their lockfile. A push to master reaches no app until that app re-locks.
- Apps load the committed build output, not `src/`. Commit rebuilt output only when you mean to ship a behavior change.
