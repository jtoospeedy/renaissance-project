"use client";

import { useState } from "react";
import { FAQ } from "@/lib/faq";

export default function FAQAccordion() {
  const [openCat, setOpenCat] = useState(null);
  const [openKey, setOpenKey] = useState(null);

  return (
    <div>
      {FAQ.map((cat) => {
        const catOpen = openCat === cat.id;
        return (
          <div className="faq-cat" id={cat.id} key={cat.id}>
            <button
              className="faq-cat-head"
              type="button"
              onClick={() => {
                setOpenCat(catOpen ? null : cat.id);
                setOpenKey(null);
              }}
              aria-expanded={catOpen}
              style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <h3 className="faq-cat-title">{cat.title}</h3>
              <div className="faq-cat-count" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {cat.items.length} questions
                <span style={{
                  display: "inline-block",
                  transform: catOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  fontSize: 12,
                }}>▾</span>
              </div>
            </button>

            <div style={{
              overflow: "hidden",
              maxHeight: catOpen ? "2000px" : 0,
              transition: "max-height 0.35s ease",
            }}>
              {cat.items.map((it, i) => {
                const key = `${cat.id}:${i}`;
                const isOpen = openKey === key;
                return (
                  <div
                    key={i}
                    className={`faq-item${isOpen ? " is-open" : ""}`}
                    data-screen-label={`faq-${cat.id}-${i + 1}`}
                  >
                    <button
                      className="faq-q"
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      aria-expanded={isOpen}
                    >
                      {it.q}
                    </button>
                    <div
                      className="faq-a"
                      style={{ maxHeight: isOpen ? "1200px" : 0 }}
                    >
                      <div
                        className="faq-a-inner"
                        dangerouslySetInnerHTML={{ __html: it.a }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
