export const workshopPlan = {
  appId: "dashboard",
  bundler: "Rsbuild",
  port: 3000,
  role: "Host shell",
  targetOutcome:
    "Compose the airport experience by mounting the flight board and passenger services remotes.",
  responsibilities: [
    "Own the shell layout and cross-app framing.",
    "Define remote mounting points for both airport domains.",
    "Add loading and error boundaries around remote imports.",
    "Coordinate shell-level navigation and route ownership.",
  ],
  laterSteps: [
    "Replace this placeholder with a host dashboard shell.",
    "Register module federation remotes.",
    "Lazy-load flight board and passenger services.",
    "Connect shell-level navigation and shared state boundaries.",
  ],
} as const;
