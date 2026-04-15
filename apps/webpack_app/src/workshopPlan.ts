export const workshopPlan = {
  appId: "flight_board",
  bundler: "Webpack",
  port: 3001,
  role: "Remote app",
  targetOutcome:
    "Own the flight board domain with departures, arrivals, filtering, and status updates.",
  responsibilities: [
    "Provide the flight board as an isolated frontend domain.",
    "Expose one remote entry point for host consumption.",
    "Own departures and arrivals table state.",
    "Keep flight search and filter logic local to this app.",
  ],
  laterSteps: [
    "Replace this placeholder with departures and arrivals views.",
    "Define the FlightBoardApp remote entry.",
    "Add mock flight data and local filtering state.",
    "Prepare host-safe loading and error behavior.",
  ],
} as const;
