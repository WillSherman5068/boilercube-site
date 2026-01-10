import { useMemo } from "react";
import matter from "gray-matter";
import { marked } from "marked";

// Load all markdown posts at build time
const postFiles = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const postImages = import.meta.glob("../assets/posts/*", {
  eager: true,
  import: "default",
});

function mdToHtml(md) {
  try {
    // Works across marked versions
    if (marked && typeof marked.parse === "function") return marked.parse(md);
    if (typeof marked === "function") return marked(md);
    return "<p>(Markdown parser not available)</p>";
  } catch (e) {
    return `<pre>Markdown parse error: ${String(e?.message || e)}</pre>`;
  }
}

export default function Updates() {
  const { posts, error } = useMemo(() => {
    try {
      const entries = Object.entries(postFiles);

      const parsed = entries.map(([path, raw]) => {
        const { data, content } = matter(raw);

        return {
          title: data.title || "Untitled",
          date: data.date || "2000-01-01",
          summary: data.summary || "",
          image: data.image || "",
          slug: path.split("/").pop().replace(".md", ""),
          bodyHtml: mdToHtml(content || ""),
        };
      });

      parsed.sort((a, b) => new Date(b.date) - new Date(a.date));
      return { posts: parsed, error: "" };
    } catch (e) {
      return { posts: [], error: String(e?.message || e) };
    }
  }, []);

  return (
    <div className="page">
      <div className="kicker">Updates</div>
      <h1 className="h1">Announcements</h1>
      <p className="sub">Team news, awards, milestones, and competition results.</p>

      <section className="section card">
        {error && (
          <div className="card" style={{ padding: 16 }}>
            <p className="mini" style={{ margin: 0 }}>
              ❌ Updates page error:
            </p>
            <pre style={{ marginTop: 10, whiteSpace: "pre-wrap" }}>{error}</pre>
          </div>
        )}

        {!error && posts.length === 0 && (
          <p className="mini">
            No posts found. Make sure you have a file in <code>src/content/posts/</code> ending in <code>.md</code>.
          </p>
        )}

        {!error &&
          posts.map((p) => (
            <article key={p.slug} className="card" style={{ padding: 18, borderRadius: 18 }}>
              <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>

              <div className="mini" style={{ marginBottom: 10 }}>
                {p.date ? new Date(p.date).toLocaleDateString() : ""}
              </div>

              {p.image && (
  <img
    src={`/posts/${p.image}`}
    alt={p.title}
    style={{ width: "100%", borderRadius: 16, margin: "10px 0 14px" }}
  />
)}

              <div className="post-body" dangerouslySetInnerHTML={{ __html: p.bodyHtml }} />
            </article>
          ))}
      </section>
    </div>
  );
}