import HeroCarousel from "../components/HeroCarousel";
export default function Team() {
  const people = [
    {
      name: "Andrew Dyba",
      role: "President",
      group: "Executive",
      headshot: "/headshots/andrew.png",
      bio:
        "Andrew leads BoilerCube’s strategy, partnerships, and overall execution. He coordinates across technical teams to keep the design moving toward a reliable, competition-ready prototype.",
    },
    {
      name: "Will Sherman",
      role: "Vice President",
      group: "Executive",
      headshot: "/headshots/william.png",
      bio:
        "Will supports system integration and helps drive technical direction and deliverables. He focuses on turning ideas into buildable hardware and keeping the team aligned on milestones.",
    },
    {
      name: "Jeremy Sapp",
      role: "Treasurer",
      group: "Executive",
      headshot: "/headshots/jeremy.png",
      bio:
        "Jeremy manages budgeting, purchasing, and financial planning so the team can prototype efficiently. He also helps track sponsorship needs and ensures resources go where they matter most.",
    },
    {
      name: "Jade Croell",
      role: "Team Lead",
      group: "Mechanical",
      headshot: "/headshots/jade.png",
      bio:
        "Leads enclosure design, airflow routing, mounting, and build feasibility. Works on CAD, manufacturability, and ensuring the cube is rugged, portable, and easy to assemble.",
    },
    {
      name: "Daniel Eriks",
      role: "Team Lead",
      group: "Electrical",
      headshot: "/headshots/daniel.png",
      bio:
        "Leads electronics, wiring, sensors, and power systems. Focuses on reliability, safety, and making the cube’s controls and instrumentation robust for demos and competition.",
    },
    {
      name: "Evan Lynus",
      role: "Team Lead",
      group: "Chemical",
      headshot: "/headshots/evan.png",
      bio:
        "Leads sorbent selection, testing, and regeneration strategy. Focuses on adsorption performance, operating conditions, and the chemistry that makes carbon capture efficient and repeatable.",
    },
    {
      name: "Phoebe Smock",
      role: "Team Lead",
      group: "Business",
      headshot: "/headshots/phoebe.png",
      bio:
        "Leads sponsorship outreach, branding, and competition communications. Focuses on telling the BoilerCube story clearly and building relationships with partners and supporters.",
    },
  ];

  return (
    <div className="page">
      <div className="kicker">Team</div>
      <h1 className="h1">Meet BoilerCube</h1>
      <p className="sub" style={{ maxWidth: 980 }}>
        BoilerCube is a student engineering team building a modular Direct Air Capture cube.
        Below is our leadership and team leads.
      </p>

      {/* ===================== PEOPLE GRID ===================== */}
      <section className="section">
        <div className="team-grid">
          {people.map((p, idx) => {
            const isTopRow = idx < 3;

            return (
              <div
                key={idx}
                className={`card ${isTopRow ? "team-card--top" : "team-card--bottom"}`}
              >
                {/* Headshot */}
                <div
                  className="headshot"
                  style={{
                    marginBottom: 14,
                    overflow: "hidden",
                    padding: 0,
                  }}
                >
                  <img
                    src={p.headshot}
                    alt={`${p.name} headshot`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      // If the file name doesn't match, show a simple fallback
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.textContent = "Headshot";
                    }}
                  />
                </div>

                <h3 style={{ margin: "0 0 6px" }}>{p.name}</h3>
                <div className="mini" style={{ marginBottom: 10 }}>
                  <strong style={{ color: "rgba(245,245,247,0.92)" }}>{p.role}</strong>
                  {"  "}•{"  "}
                  <span style={{ color: "rgba(245,245,247,0.72)" }}>{p.group}</span>
                </div>

                <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
                  {p.bio}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== TEAM PHOTOS ===================== */}
<section className="section big-section">
  <div className="kicker">Gallery</div>
  <h2 style={{ fontSize: 36, marginTop: 8, marginBottom: 10 }}>
    Team photos
  </h2>
  <p className="sub" style={{ maxWidth: 980 }}>
    Photos of the full group, build sessions, outreach events, and competition travel.
  </p>

  <div style={{ marginTop: 16 }}>
    <HeroCarousel
      images={[
        "/team-photos/advisorsteam.jpeg",
        "/team-photos/hallwayTeam.jpeg",
        "/team-photos/winterFair.jpg",
        "/team-photos/fountainTeam.jpeg",
      ]}
    />
  </div>
</section>

      {/* ===================== TEAM GROUPS ===================== */}
      <section className="section card">
        <div className="kicker">How we work</div>
        <h2 style={{ fontSize: 32, marginTop: 8, marginBottom: 10 }}>
          Four focused groups, one system
        </h2>
        <p className="sub" style={{ maxWidth: 980 }}>
          BoilerCube is organized into four groups. Each group has multiple members and
          works in parallel, then integrates into a single cube system.
        </p>

        <div className="grid" style={{ marginTop: 10 }}>
          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Mechanical</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Responsible for the physical design: enclosure, structure, mounting, airflow pathways,
              manufacturability, and ensuring the cube is portable and durable.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Electrical</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Responsible for sensors, wiring, power management, safety, and the control system interface
              needed for reliable operation and demos.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Chemical</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Responsible for sorbent selection/testing, adsorption and regeneration strategy, operating conditions,
              and performance validation tied to CO₂ capture.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Business</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Responsible for sponsorships, outreach, branding, competition logistics, and communicating the team’s
              progress to partners and the public.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 16 }} className="mini">
          Want to join or sponsor a specific group? Visit the Contact page and tell us what you’re interested in.
        </div>
      </section>
    </div>
  );
}