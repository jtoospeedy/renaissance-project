"use client";

import { useState } from "react";
import { FAQ } from "@/lib/faq";

export default function FAQAccordion() {
  // Open key = `${categoryId}:${itemIndex}` or null
  const [openKey, setOpenKey] = useState(null);

  return (
    <div>
      {FAQ.map((cat) => (
        <div className="faq-cat" id={cat.id} key={cat.id}>
          <div className="faq-cat-head">
            <h3 className="faq-cat-title">{cat.title}</h3>
            <div className="faq-cat-count">{cat.items.length} questions</div>
          </div>
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
      ))}
    </div>
  );
}
