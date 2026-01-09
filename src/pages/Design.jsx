export default function Design() {
  return (
    <div className="page">
      <div className="kicker">Design</div>
      <h1 className="h1">System Overview</h1>
      <p className="sub">
        This page explains our current architecture and design goals. Replace the text below with
        your latest CAD screenshots, airflow diagram, and sorbent/regeneration approach.
      </p>

      <section className="section grid">
        <div className="col-6 card">
          <h2>Capture Module</h2>
          <ul>
            <li>Sorbent selection (e.g., zeolite 13X) and containment strategy</li>
            <li>Airflow routing + filtration considerations</li>
            <li>Pressure drop and fan selection</li>
          </ul>
        </div>

        <div className="col-6 card">
          <h2>Regeneration Module</h2>
          <ul>
            <li>Regeneration method (TVSA / thermal / vacuum-assisted)</li>
            <li>Thermal management + insulation strategy</li>
            <li>Safety features + pressure relief considerations</li>
          </ul>
        </div>

        <div className="col-12 card">
          <h2>Controls + Sensors</h2>
          <ul>
            <li>Central controller for timing and state transitions</li>
            <li>Temperature, pressure, and flow sensing</li>
            <li>Power budget + grid-independent operation plan</li>
          </ul>
        </div>
      </section>
    </div>
  );
}