"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MEMBERS, MEMBER_FILTERS } from "@/components/lib/members";

export default function MembersGrid() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const items = filter === "all" ? MEMBERS : MEMBERS.filter((m) => m.category === filter);
  const active = MEMBERS.find((m) => m.id === activeId) || null;

  // Lock scroll while modal open + close on Esc
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") setActiveId(null); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      <div className="members-filter">
        <div className="members-filter-inner">
          {MEMBER_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-chip${filter === f.id ? " is-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`members-grid grid-${filter}`}>
        {items.map((m) => (
          <article
            key={m.id}
            className="member"
            data-screen-label={`member-${m.roman}`}
            onClick={() => setActiveId(m.id)}
          >
            <div className="member-frame">
              <span className="ornament-corner bl" />
              <span className="ornament-corner br" />
              <div className="member-portrait">
                <div className="member-halo" />
                {m.image
                  ? <Image src={m.image} alt={m.name} fill sizes="160px" style={{ objectFit: "cover" }} />
                  : <div className="member-initials-cap">[ portrait ]</div>
                }
              </div>
              <div className="member-divider" />
              <div className="member-plate">
                <div className="member-name">{m.name}</div>
                <div className="member-role">{m.role}</div>
                {(m.classification || m.major) && (
                  <div className="member-meta">
                    {[m.classification, m.major].filter(Boolean).join(" · ")}
                  </div>
                )}
                <div className="member-roman">— N° {m.roman} —</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="member-modal-bg is-open"
          onClick={(e) => { if (e.target === e.currentTarget) setActiveId(null); }}
        >
          <div className="member-modal">
            <button className="modal-close" onClick={() => setActiveId(null)} aria-label="Close">✕</button>
            <div className="modal-portrait">
              {active.image
                ? <Image src={active.image} alt={active.name} fill sizes="120px" style={{ objectFit: "cover", borderRadius: "50%" }} />
                : active.initials
              }
            </div>
            <div className="modal-eyebrow">Officer N° {active.roman}</div>
            <h2 className="modal-name">{active.name}</h2>
            <div className="modal-role">{active.role}</div>
            {active.bio && <p className="modal-bio">{active.bio}</p>}
            {(active.class || active.major || active.hometown || active.since) && (
              <dl className="modal-meta">
                {active.class    && <><dt>Class</dt><dd>{active.class}</dd></>}
                {active.major    && <><dt>Major</dt><dd>{active.major}</dd></>}
                {active.hometown && <><dt>Hometown</dt><dd>{active.hometown}</dd></>}
                {active.since    && <><dt>On the board since</dt><dd>{active.since}</dd></>}
              </dl>
            )}
          </div>
        </div>
      )}
    </>
  );
}
