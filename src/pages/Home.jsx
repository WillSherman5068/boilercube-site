export default function Home() {
  return (
    <div className="page">
      {/* ===== HERO ===== */}
      <section className="section">
        <div className="kicker">Purdue • Chemical Engineering • Climate Tech</div>
        <h1 className="h1">BoilerCube</h1>
        <p className="sub" style={{ maxWidth: 980 }}>
          A student engineering team building a modular, grid-independent Direct Air Capture cube
          designed for affordability, safety, and deployability.
        </p>

        {/* Image space (replace later with real images) */}
        <div className="card" style={{ marginTop: 18, padding: 0, overflow: "hidden" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 18,
              color: "rgba(245,245,247,0.65)",
              fontWeight: 800,
              letterSpacing: "0.02em",
            }}
          >
            Hero image / prototype photo / CAD render (placeholder)
          </div>
        </div>
      </section>

      {/* ===== WHAT WE'RE BUILDING + WHY IT MATTERS ===== */}
      <section className="section grid">
        <div className="col-6 card">
          <h2>What we’re building</h2>
          <p>
            A compact DAC system using a sorbent-based capture approach and a continuous operation
            concept (e.g., wheel/rotary architecture) to enable scalable CO₂ capture.
          </p>
          <ul>
            <li>Portable + rugged enclosure</li>
            <li>Simple maintenance + safe materials</li>
            <li>Designed for real-world deployment constraints</li>
          </ul>
        </div>

        <div className="col-6 card">
          <h2>Why it matters</h2>
          <p>
            We’re targeting use cases where traditional infrastructure is limited—disaster relief,
            rural communities, and education—while keeping the design manufacturable and low-cost.
          </p>
          <ul>
            <li>Hands-on STEM outreach tool</li>
            <li>Climate resilience focus</li>
            <li>Engineering students building real hardware</li>
          </ul>
        </div>
      </section>

      {/* ===== COMPETITION SECTION (NEW) ===== */}
      <section className="section big-section">
        <div className="kicker">Competition</div>
        <h2 style={{ fontSize: 38, marginTop: 8, marginBottom: 10 }}>
          AIChE Chem-E Cube Competition
        </h2>
        <p className="sub" style={{ maxWidth: 980 }}>
          BoilerCube competes in the AIChE Chem-E Cube Competition, where student teams design and present
          innovative chemical engineering solutions. The competition challenges teams to build a compact system,
          communicate technical decisions clearly, and demonstrate real-world impact.
        </p>

        <div className="grid" style={{ marginTop: 16 }}>
          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>What we’re judged on</h3>
            <ul>
              <li>Technical design and feasibility</li>
              <li>Performance and engineering tradeoffs</li>
              <li>Safety, cost, and real-world deployability</li>
              <li>Communication and demonstration quality</li>
            </ul>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Why we compete</h3>
            <ul>
              <li>Build hands-on engineering skills</li>
              <li>Present at national-level AIChE events</li>
              <li>Collaborate across mechanical, electrical, chemical, and business teams</li>
              <li>Turn climate tech concepts into real prototypes</li>
            </ul>
          </div>
        </div>

      </section>

      {/* ===== GET INVOLVED (kept, but not sponsor button) ===== */}
      <section className="section card">
        <h2>Get involved</h2>
        <p>
          We’re looking for sponsors, mentors, and collaborators. If you’re interested in supporting
          student-led climate engineering, we’d love to talk.
        </p>
        <a className="btn contact-btn" href="/contact">Contact us</a>
      </section>
    </div>
  );
}
