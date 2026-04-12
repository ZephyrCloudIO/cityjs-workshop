# cityjs-workshop

Turbo monorepo; three frontend apps:

- `apps/vite_app`
- `apps/rsbuild_app`
- `apps/webpack_app`

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
