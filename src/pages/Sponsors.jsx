export default function Sponsors() {
  const sponsors = [
    {
      name: "Davidson School of Chemical Engineering",
      img: "/sponsors/davidson-cheme.png",
      url: "https://engineering.purdue.edu/ChE",
    },
    {
      name: "Lubrizol",
      img: "/sponsors/lubrizol.png",
      url: "https://www.lubrizol.com/",
    },
  ];

  return (
    <div className="page">
      {/* ===================== HERO ===================== */}
      <div className="kicker">Sponsors</div>
      <h1 className="h1">Thank you to our sponsors</h1>
      <p className="sub" style={{ maxWidth: 980 }}>
        BoilerCube is grateful for the organizations that support student-led
        climate engineering through funding, mentorship, and technical resources.
      </p>

      {/* ===================== LOGO WALL ===================== */}
      <section className="section card">
        <h2 style={{ marginTop: 0 }}>Our sponsors</h2>
        <p className="mini" style={{ marginTop: 6 }}>
          Click a logo to learn more about each organization.
        </p>

        <div className="sponsor-grid" style={{ marginTop: 18 }}>
          {sponsors.map((s) => (
            <a
              key={s.name}
              className="sponsor-tile"
              href={s.url}
              target="_blank"
              rel="noreferrer"
              title={s.name}
            >
              <img className="sponsor-logo" src={s.img} alt={s.name} />
            </a>
          ))}
        </div>
      </section>

      {/* ===================== BIG SPONSOR BENEFITS ===================== */}
      <section className="section big-section">
        <div className="kicker">Sponsor Benefits</div>
        <h2 style={{ fontSize: 40, marginTop: 8, marginBottom: 12 }}>
          What we can offer sponsors
        </h2>
        <p className="sub" style={{ maxWidth: 980 }}>
          BoilerCube sponsorship is more than a donation — it is a visible
          partnership with a student engineering team building real climate hardware.
        </p>

        <div className="grid" style={{ marginTop: 18 }}>
          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Logo placement & visibility</h3>
            <ul>
              <li><strong>T-shirts & apparel:</strong> logos on official team apparel</li>
              <li><strong>Cube prototype:</strong> logo placement on the DAC cube</li>
              <li><strong>Website recognition:</strong> logo placement on this page</li>
              <li><strong>Posters & outreach:</strong> demos and presentations</li>
            </ul>
            <p className="mini" style={{ marginTop: 10 }}>
              Sponsors may also be highlighted during major project milestones.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>National exposure & recruiting</h3>
            <ul>
              <li><strong>AIChE National Conference:</strong> national exposure</li>
              <li><strong>Chem-E Cube Competition:</strong> competition recognition</li>
              <li><strong>Recruiting visibility:</strong> connect with driven students</li>
            </ul>
            <p className="mini" style={{ marginTop: 10 }}>
              Ideal for organizations seeking early recruiting visibility.
            </p>
          </div>

          <div className="col-12 card" style={{ padding: 22 }}>
            <h3 style={{ marginTop: 0 }}>We’ll make it easy</h3>
            <p style={{ margin: 0, maxWidth: 1000, color: "rgba(245,245,247,0.85)" }}>
              We provide a clear sponsorship packet outlining recognition options,
              tier examples, and how sponsorship directly supports prototyping,
              testing, manufacturing, and travel for AIChE and the Chem-E Cube Competition.
            </p>

            <div style={{ marginTop: 18, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn sponsor-btn" href="/contact">Request sponsorship packet</a>
              <a className="btn sponsor-btn" href="/contact" style={{ opacity: 0.9 }}>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}