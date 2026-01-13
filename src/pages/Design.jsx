import HeroCarousel from "../components/HeroCarousel";
export default function Design() {
  const images = [
    { src: "/design/cube1.jpg", alt: "BoilerCube prototype photo" },
    { src: "/design/cube2.jpg", alt: "BoilerCube cube design / CAD" },
    { src: "/design/cube3.jpg", alt: "BoilerCube team with cube" },
  ];

  return (
    <div className="page">
      <div className="kicker">Design</div>
      <h1 className="h1">Our Cube</h1>
      <p className="sub" style={{ maxWidth: 980 }}>
        BoilerCube is building a compact, modular system for the AIChE Chem-E Cube Competition.
        Our focus is a design that’s practical, safe, and easy to demonstrate — while still
        representing real climate technology.
      </p>

{/* ===== PROTOTYPE IMAGE ===== */}
<section className="section">
  <div
    style={{
      width: "75%",
      maxWidth: 900,            // reasonable width
      margin: "0 auto",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(255,255,255,0.04)",
    }}
  >
    <img
      src="/design/cube.jpeg"
      alt="BoilerCube prototype"
      style={{
        width: "100%",
        height: 650,            // 👈 controls vertical size
        objectFit: "cover",     // 👈 intentional crop
        objectPosition: "center 60%",
        display: "block",
      }}
    />
  </div>
</section>

        {/* ===== HOW WE DESIGN (updated tiles) ===== */}
      <section className="section">
        <div className="kicker">Approach</div>
        <h2 style={{ marginTop: 8, marginBottom: 10 }}>How we design</h2>
        <p className="sub" style={{ maxWidth: 980 }}>
          Our cube is built to be iterated on quickly, grounded in practical constraints, and ready to
          communicate value to judges, sponsors, and future users.
        </p>

        <div className="grid" style={{ marginTop: 16 }}>
          <div className="col-4 card">
            <h3 style={{ marginTop: 0 }}>Modularity</h3>
            <p>
              We design the cube as a repeatable unit that can be deployed individually or combined with other cubes, allowing capacity to scale by adding modules rather than redesigning the system.
            </p>
            <ul>
              <li>Interchangeable subsystems</li>
              <li>Cleaner testing and iteration cycles</li>
              <li>Built for upgrades over time</li>
            </ul>
          </div>

          <div className="col-4 card">
            <h3 style={{ marginTop: 0 }}>Real-world constraints</h3>
            <p>
              We keep safety, manufacturability, and maintainability in mind from day one. The goal is not just
              a concept — it’s a cube that can be built, demonstrated, and improved in real environments.
            </p>
            <ul>
              <li>Safety-first materials and operation</li>
              <li>Practical fabrication and assembly</li>
              <li>Maintainable layout and access</li>
            </ul>
          </div>

          <div className="col-4 card">
            <h3 style={{ marginTop: 0 }}>Marketability & deployment</h3>
            <p>
              We focus on telling a clear story: what the cube does, why it matters, and where it could realistically
              be used. That means thinking beyond the prototype to pathways for real adoption.
            </p>
            <ul>
              <li>Clear value proposition</li>
              <li>Deployability + user context</li>
              <li>Competition communication & sponsor visibility</li>
            </ul>
          </div>
        </div>
      </section>

 {/* ===== DIRECT AIR CAPTURE EXPLAINER ===== */}
      <section className="section card">
        <div className="kicker">Direct Air Capture</div>
        <h2 style={{ marginTop: 8 }}>What is DAC — and how our cube uses it?</h2>
        <p className="sub" style={{ maxWidth: 980 }}>
        Direct Air Capture (DAC) is a process that removes carbon dioxide (CO₂) directly from ambient air. Our cube is a fully functioning DAC device: it actively draws in air and captures carbon dioxide (CO₂) on a sorbent, allowing us to measure and demonstrate real CO₂ capture in a compact system.
        </p>

        <div className="grid" style={{ marginTop: 12 }}>
          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>What the cube demonstates</h3>
            <p style={{ marginTop: 0 }}>
              The cube demonstrates a complete, working engineering system — from airflow handling to CO₂ capture — packaged in a compact, understandable format. The focus is on showing how the system behaves, not just describing it.
            </p>
            <ol>
              <li>Functional capture under real conditions</li>
              <li>Measurable system behavior</li>
              <li>Clear visual and educational value</li>
            </ol>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Why it matters</h3>
            <p style={{ marginTop: 0 }}>
              DAC is one tool for climate resilience. BoilerCube’s goal is to demonstrate DAC in a compact,
              modular format that can be improved over time and used for education, outreach, and real deployment thinking.
            </p>
            <ul>
              <li>Compact demonstration of climate tech</li>
              <li>Designed for iteration and manufacturability</li>
              <li>Supports outreach and competition goals</li>
            </ul>
          </div>
        </div>

        <p className="mini" style={{ marginTop: 14 }}>
          Note: We keep this page high-level. If you’re a sponsor or mentor and want technical details, reach out — we’re happy to share.
        </p>
      </section>

      {/* ===== CTA ===== */}
      <section className="section card">
        <h2>Want to learn more?</h2>
        <p>
          If you’re interested in our design approach, outreach, or sponsorship opportunities,
          we’d love to connect.
        </p>
        <a className="btn contact-btn" href="/contact">Contact us</a>
      </section>
    </div>
  );
}