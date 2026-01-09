export default function Contact() {
  const email = "boilercubepurdue@gmail.com";
  const instagramHandle = "boilercubepurdue";
  const instagramUrl = `https://instagram.com/${instagramHandle}`;

  // Placeholder for now — replace later with your real LinkedIn URL
  const linkedinUrl = "#";

  return (
    <div className="page">
      <div className="kicker">Contact</div>
      <h1 className="h1">Get in touch</h1>
      <p className="sub" style={{ maxWidth: 900 }}>
        Whether you’re interested in sponsorship, collaboration, joining the team,
        or learning more about BoilerCube, we’d love to hear from you.
      </p>

      {/* ===================== CONTACT METHODS ===================== */}
      <section className="section card">
        <div className="grid">
          {/* EMAIL */}
          <div className="col-4 card">
            <div className="contact-row">
              <div className="contact-icon" aria-hidden="true">
                {/* Mail icon (SVG) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.5 7.5 12 12l5.5-4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 style={{ marginTop: 0, marginBottom: 6 }}>Email</h3>
                <a className="contact-link" href={`mailto:${email}`}>
                  {email}
                </a>
                <p className="mini" style={{ marginTop: 10 }}>
                  Best for sponsorship inquiries, faculty connections, competition questions,
                  or general outreach.
                </p>
              </div>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="col-4 card">
            <div className="contact-row">
              <div className="contact-icon" aria-hidden="true">
                {/* Instagram-ish camera icon (SVG) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.7h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3 style={{ marginTop: 0, marginBottom: 6 }}>Instagram</h3>
                <a className="contact-link" href={instagramUrl} target="_blank" rel="noreferrer">
                  @{instagramHandle}
                </a>
                <p className="mini" style={{ marginTop: 10 }}>
                  Follow for build updates, behind-the-scenes content, competition travel,
                  and outreach events.
                </p>
              </div>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="col-4 card">
            <div className="contact-row">
              <div className="contact-icon" aria-hidden="true">
                {/* LinkedIn "in" icon (SVG) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 9.5v9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.5 6.8h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.5 18.5v-5.2c0-2 1.2-3.3 3-3.3 1.7 0 2.7 1 2.9 2.6.1.4.1.9.1 1.4v4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3 style={{ marginTop: 0, marginBottom: 6 }}>LinkedIn</h3>

                {linkedinUrl === "#" ? (
                  <span className="contact-link" style={{ opacity: 0.75 }}>
                    Coming soon
                  </span>
                ) : (
                  <a className="contact-link" href={linkedinUrl} target="_blank" rel="noreferrer">
                    BoilerCube on LinkedIn
                  </a>
                )}

                <p className="mini" style={{ marginTop: 10 }}>
                  Our LinkedIn page is being set up for professional updates, sponsor recognition,
                  and recruiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CONTACT US ===================== */}
      <section className="section big-section">
        <div className="kicker">Reach out</div>
        <h2 style={{ fontSize: 36, marginTop: 8, marginBottom: 10 }}>
          What can you contact us about?
        </h2>
        <p className="sub" style={{ maxWidth: 980 }}>
          BoilerCube works with sponsors, mentors, and collaborators. If any of the topics below apply
          to you, we encourage you to reach out.
        </p>

        <div className="grid" style={{ marginTop: 16 }}>
          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Sponsorship & partnerships</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Funding, materials, mentorship, or introductions to partners supporting student-led climate tech.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Faculty & research collaboration</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Collaboration on carbon capture, adsorption systems, regeneration methods, or testing support.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>Joining the team</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Purdue students interested in mechanical, electrical, chemical, or business roles.
            </p>
          </div>

          <div className="col-6 card">
            <h3 style={{ marginTop: 0 }}>General questions & outreach</h3>
            <p style={{ margin: 0, color: "rgba(245,245,247,0.82)" }}>
              Demos, outreach events, speaking opportunities, or general questions about BoilerCube.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 18 }} className="mini">
          Please include your name, affiliation, and reason for reaching out.
        </div>
      </section>
    </div>
  );
}