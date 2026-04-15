# cityjs-workshop

Workshop starter for rebuilding the `airport` app from three separate frontend apps.

Current state:

- `apps/rsbuild_app` => future `dashboard` host on `3000`
- `apps/webpack_app` => future `flight_board` remote on `3001`
- `apps/vite_app` => future `passenger_services` remote on `3002`

What is prepared now:

- monorepo wiring with Turbo + PNPM
- one app per bundler
- airport domain names and responsibilities
- workshop notes embedded in code
- intentionally generic placeholders instead of product UI

Target workshop arc:

1. turn each app into its airport domain
2. keep them isolated first
3. make `rsbuild_app` the shell/host
4. expose `webpack_app` and `vite_app` as remotes
5. compose them into the dashboard
6. refine toward `/Users/nsttt/work/airport`

## App Roles

### `rsbuild_app`

- target app name: `dashboard`
- bundler role: host shell
- future responsibilities:
  - top-level airport layout
  - remote mounting points
  - loading and error boundaries
  - shell-level routing/navigation
  - federated remote registration

### `webpack_app`

- target app name: `flight_board`
- bundler role: remote
- future responsibilities:
  - departures and arrivals views
  - flight table state
  - search/filter state
  - expose `FlightBoardApp` for host consumption

### `vite_app`

- target app name: `passenger_services`
- bundler role: remote
- future responsibilities:
  - booking lookup
  - check-in flow
  - baggage tracking flow
  - expose `PassengerServicesApp` for host consumption

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
```
