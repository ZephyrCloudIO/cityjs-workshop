export const workshopPlan = {
  appId: "passenger_services",
  bundler: "Vite",
  port: 3002,
  role: "Remote app",
  targetOutcome:
    "Own passenger-facing workflows such as booking lookup, check-in, and baggage tracking.",
  responsibilities: [
    "Provide passenger services as an isolated frontend domain.",
    "Expose one remote entry point for host consumption.",
    "Own the booking lookup and baggage workflow state.",
    "Keep passenger-specific UI and logic local to this app.",
  ],
  laterSteps: [
    "Replace this placeholder with passenger service routes and screens.",
    "Define the PassengerServicesApp remote entry.",
    "Shape the booking lookup and baggage tracking state.",
    "Prepare host-safe loading and error behavior.",
  ],
} as const;
