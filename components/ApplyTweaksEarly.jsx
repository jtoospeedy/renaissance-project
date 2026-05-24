"use client";

// Applies persisted tweaks BEFORE first paint (no FOUC).
// Mounted high in the layout; renders nothing.
import { useEffect } from "react";

export default function ApplyTweaksEarly() {
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("rp_tweaks") || "{}");
      const root = document.documentElement;
      if (saved.mode) root.setAttribute("data-mode", saved.mode);
      if (saved.palette) root.setAttribute("data-palette", saved.palette);
      if (saved.type) root.setAttribute("data-type", saved.type);
    } catch (e) {}
  }, []);

  // Inline script also runs before React hydrates, eliminating the flash on first paint
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var s=JSON.parse(localStorage.getItem("rp_tweaks")||"{}");var r=document.documentElement;if(s.mode)r.setAttribute("data-mode",s.mode);if(s.palette)r.setAttribute("data-palette",s.palette);if(s.type)r.setAttribute("data-type",s.type);}catch(e){}})();`,
      }}
    />
  );
}
