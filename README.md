# cityjs-workshop

Turbo monorepo; three frontend apps:

- `apps/vite-app`
- `apps/rsbuild-app`
- `apps/webpack-app`

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
```

## Notes

- `pnpm dev` runs all app dev servers through Turbo.
- `pnpm build` builds all apps.
- `pnpm typecheck` runs `tsc --noEmit` in all apps.
