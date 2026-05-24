"use client";

// Minimal tweaks panel — palette / typography / dark-mode toggle.
// State persists via localStorage. Mounted globally in app/layout.jsx.

import { useEffect, useRef, useState } from "react";

const DEFAULTS = { palette: "vermillion", type: "classic", mode: "dark" };
const STORAGE_KEY = "rp_tweaks";

const PALETTES = [
  { id: "vermillion", hex: "#e0792c" },
  { id: "ember", hex: "#d9461f" },
  { id: "saffron", hex: "#e8a72b" },
];
const TYPES = [
  { id: "classic", label: "Classic — Cinzel + EB Garamond" },
  { id: "modern", label: "Modern — Bodoni + Inter" },
  { id: "editorial", label: "Editorial — Cormorant + Lora" },
];

export default function TweaksPanel() {
  const [t, setT] = useState(DEFAULTS);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      setT({ ...DEFAULTS, ...saved });
    } catch (e) {}
    setMounted(true);
  }, []);

  // Apply to <html> + persist on every change
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("data-mode", t.mode);
    root.setAttribute("data-palette", t.palette);
    root.setAttribute("data-type", t.type);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(t));
  }, [t, mounted]);

  const set = (patch) => setT((prev) => ({ ...prev, ...patch }));

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        className="rp-tweaks-fab"
        aria-label={open ? "Hide tweaks" : "Show tweaks"}
        onClick={() => setOpen((v) => !v)}
      >
        <span style={{ width: 10, height: 10, background: "currentColor", borderRadius: "50%", display: "inline-block" }} />
      </button>

      {open && (
        <div className="rp-tweaks">
          <div className="rp-tweaks-head">
            <strong>Tweaks</strong>
            <button type="button" className="rp-tweaks-x" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className="rp-tweaks-section">Mode</div>
          <div className="rp-tweaks-row">
            {["dark", "light"].map((m) => (
              <button
                key={m}
                type="button"
                className={`rp-tweaks-pill${t.mode === m ? " is-on" : ""}`}
                onClick={() => set({ mode: m })}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="rp-tweaks-section">Accent</div>
          <div className="rp-tweaks-row">
            {PALETTES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`rp-tweaks-swatch${t.palette === p.id ? " is-on" : ""}`}
                style={{ background: p.hex }}
                aria-label={p.id}
                onClick={() => set({ palette: p.id })}
              />
            ))}
          </div>

          <div className="rp-tweaks-section">Typography</div>
          <select
            className="rp-tweaks-select"
            value={t.type}
            onChange={(e) => set({ type: e.target.value })}
          >
            {TYPES.map((tp) => (
              <option key={tp.id} value={tp.id}>{tp.label}</option>
            ))}
          </select>
        </div>
      )}

      <style jsx>{`
        .rp-tweaks-fab {
          position: fixed;
          right: 16px;
          bottom: 16px;
          z-index: 90;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--c-accent);
          border: 1px solid var(--c-accent);
          color: #0a1733;
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.5);
        }
        .rp-tweaks {
          position: fixed;
          right: 16px;
          bottom: 76px;
          z-index: 91;
          width: 260px;
          padding: 14px;
          background: color-mix(in oklab, var(--c-ground-2) 96%, transparent);
          border: 1px solid var(--c-line-strong);
          border-radius: 8px;
          color: var(--c-ink);
          font-family: var(--f-mono);
          font-size: 11px;
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 40px -12px rgba(0,0,0,0.6);
        }
        .rp-tweaks-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .rp-tweaks-head strong {
          font-family: var(--f-display);
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--c-accent);
          font-weight: 500;
        }
        .rp-tweaks-x {
          appearance: none;
          background: transparent;
          border: 1px solid var(--c-line);
          color: var(--c-ink);
          width: 26px;
          height: 26px;
          border-radius: 4px;
          cursor: pointer;
        }
        .rp-tweaks-section {
          margin: 14px 0 8px;
          font-size: 9.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--c-muted);
        }
        .rp-tweaks-row {
          display: flex;
          gap: 6px;
        }
        .rp-tweaks-pill {
          appearance: none;
          background: transparent;
          border: 1px solid var(--c-line-strong);
          color: var(--c-muted);
          padding: 8px 14px;
          border-radius: 999px;
          font-family: var(--f-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          flex: 1;
        }
        .rp-tweaks-pill.is-on {
          background: var(--c-accent);
          border-color: var(--c-accent);
          color: #0a1733;
        }
        .rp-tweaks-swatch {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0;
        }
        .rp-tweaks-swatch.is-on {
          border-color: var(--c-ink);
          box-shadow: 0 0 0 2px var(--c-ground-2), 0 0 0 3px var(--c-ink);
        }
        .rp-tweaks-select {
          width: 100%;
          appearance: none;
          background: var(--c-ground-3);
          border: 1px solid var(--c-line-strong);
          color: var(--c-ink);
          padding: 10px 12px;
          border-radius: 4px;
          font-family: var(--f-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
