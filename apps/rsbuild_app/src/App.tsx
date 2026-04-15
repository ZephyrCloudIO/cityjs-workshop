import { workshopPlan } from "./workshopPlan";

export function App() {
  return (
    <main className="placeholder">
      <p className="label">
        {workshopPlan.bundler} / {workshopPlan.role}
      </p>
      <h1>{workshopPlan.appId}</h1>
      <p className="summary">{workshopPlan.targetOutcome}</p>

      <section>
        <h2>Prepare This App For</h2>
        <ul>
          {workshopPlan.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Workshop Steps Later</h2>
        <ol>
          {workshopPlan.laterSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <p className="meta">Target local port: {workshopPlan.port}</p>
    </main>
  );
}
