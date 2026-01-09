import { useEffect, useState } from "react";
import { butter } from "../butter";

export default function Updates() {
  const [status, setStatus] = useState("Loading updates...");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const listRes = await butter.post.list({ page: 1, page_size: 10 });
        const list = listRes.data?.data || [];

        const fullPosts = await Promise.all(
          list.map(async (p) => {
            try {
              const r = await butter.post.retrieve(p.slug);
              return r.data?.data || p;
            } catch {
              return p;
            }
          })
        );

        setPosts(fullPosts);
        setStatus("✅ Latest announcements");
      } catch (err) {
        console.error(err);
        setStatus("❌ Could not load posts");
      }
    }

    load();
  }, []);

  return (
    <div className="page">
      <div className="kicker">Updates</div>
      <h1 className="h1">Announcements</h1>
      <p className="sub">
        Team news, awards, milestones, and competition results.
      </p>

      <section className="section card">
        <p className="mini">{status}</p>

        {posts.length === 0 && status.startsWith("✅") && (
          <p className="mini">No posts yet.</p>
        )}

        {posts.length > 0 && (
          <div style={{ display: "grid", gap: 16, marginTop: 14 }}>
            {posts.map((p) => {
              const dateValue = p.published || p.published_at || p.created;
              const dateText = dateValue
                ? new Date(dateValue).toLocaleDateString()
                : "";

              return (
                <article
                  key={p.slug}
                  className="card"
                  style={{ padding: 18, borderRadius: 18 }}
                >
                  <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>

                  <div className="mini" style={{ marginBottom: 10 }}>
                    {dateText}
                    {p.author?.first_name
                      ? ` • ${p.author.first_name} ${p.author.last_name || ""}`
                      : ""}
                  </div>

                  {p.featured_image && (
                    <img
                      src={p.featured_image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        borderRadius: 16,
                        margin: "10px 0 14px",
                      }}
                    />
                  )}

                  {p.body && (
                    <div
                      className="post-body"
                      dangerouslySetInnerHTML={{ __html: p.body }}
                    />
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}