"use client";

// Smoothly scrolls to #join, #contact, or #faq if the URL has a matching hash.
// Mounted once inside the FAQ page so deep links from the home CTA work nicely.
import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;
    const t = document.querySelector(window.location.hash);
    if (t) {
      // Wait for layout to settle
      setTimeout(() => {
        const top = t.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top, behavior: "smooth" });
      }, 80);
    }
  }, []);

  // Wire smooth scroll on the anchor chips too
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a.anchor-chip");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
