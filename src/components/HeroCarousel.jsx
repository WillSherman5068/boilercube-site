import { useEffect, useMemo, useState } from "react";

export default function HeroCarousel({
  images = [],
  auto = true,
  intervalMs = 5000,
  altPrefix = "BoilerCube hero image",
}) {
  const slides = useMemo(
    () => images.filter(Boolean),
    [images]
  );

  const [i, setI] = useState(0);

  useEffect(() => {
    if (!auto || slides.length <= 1) return;
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), intervalMs);
    return () => clearInterval(id);
  }, [auto, intervalMs, slides.length]);

  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  if (slides.length === 0) return null;

  return (
    <div className="heroCarousel">
      <div className="heroFrame">
        <img className="heroImg" src={slides[i]} alt={`${altPrefix} ${i + 1}`} />

        {slides.length > 1 && (
          <>
            <button className="heroNav heroPrev" onClick={prev} aria-label="Previous image">
              ‹
            </button>
            <button className="heroNav heroNext" onClick={next} aria-label="Next image">
              ›
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="heroDots" aria-label="Hero image selector">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`heroDot ${idx === i ? "isActive" : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Show image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
