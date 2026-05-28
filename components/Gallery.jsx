"use client";

import { useEffect, useState } from "react";
import { PHOTOS, ERAS } from "@/components/lib/photos";

export default function Gallery() {
  const [era, setEra] = useState("all");
  const [lbIndex, setLbIndex] = useState(null);

  const items = era === "all" ? PHOTOS : PHOTOS.filter((p) => p.era === era);
  const active = lbIndex != null ? items[lbIndex] : null;

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e) => {
      if (active == null) return;
      if (e.key === "Escape") setLbIndex(null);
      if (e.key === "ArrowRight") setLbIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setLbIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, items.length]);

  // Reset lightbox if era changes (otherwise index can point to wrong filtered list)
  useEffect(() => { setLbIndex(null); }, [era]);

  return (
    <>
      <div className="era-tabs" role="tablist">
        {ERAS.map((e) => (
          <button
            key={e.id}
            type="button"
            className={`era-tab${era === e.id ? " is-active" : ""}`}
            onClick={() => setEra(e.id)}
          >
            {e.label}
          </button>
        ))}
      </div>

      <div className="gallery">
        {items.map((p, i) => (
          <a
            key={p.id}
            className={`tile${p.arched ? " arched" : ""}`}
            data-screen-label={`tile-${i + 1}`}
            onClick={() => setLbIndex(i)}
          >
            <div
              className={`tile-img ar-${p.ar}`}
              style={{ "--bx": `${p.bx}%`, "--by": `${p.by}%`, "--bi": `${p.bi}%` }}
            >
              [ {p.era} ]
            </div>
            <div className="tile-cap">
              <div className="tile-cap-tag">⤬ {p.era}</div>
              <div className="tile-cap-title">{p.title}</div>
              <div className="tile-cap-sub">{p.sub}</div>
            </div>
          </a>
        ))}
      </div>

      {active && (
        <div
          className="lightbox is-open"
          onClick={(e) => { if (e.target === e.currentTarget) setLbIndex(null); }}
        >
          <div className="lb-stage">
            <button className="lb-close" onClick={() => setLbIndex(null)} aria-label="Close">✕</button>
            <button
              className="lb-prev"
              onClick={() => setLbIndex((i) => (i - 1 + items.length) % items.length)}
              aria-label="Previous"
            >‹</button>
            <button
              className="lb-next"
              onClick={() => setLbIndex((i) => (i + 1) % items.length)}
              aria-label="Next"
            >›</button>
            <div
              className="lb-img"
              style={{ "--bx": `${active.bx}%`, "--by": `${active.by}%`, "--bi": `${active.bi}%` }}
            >
              [ {active.era} · photograph ]
            </div>
            <div className="lb-meta">
              <div>
                <div className="lb-title">{active.title}</div>
                <div className="lb-sub">{active.sub}</div>
              </div>
              <div className="lb-counter">
                {String(lbIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
