"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home", num: "I" },
  { href: "/members", label: "Members", num: "II" },
  { href: "/events", label: "Events", num: "III" },
  { href: "/gallery", label: "Gallery", num: "IV" },
  { href: "/faq", label: "FAQ", num: "V" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
      <nav className="nav" data-screen-label="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-brand" aria-label="Renaissance Project, NC A&T">
            <div className="nav-brand-mark" aria-hidden="true" />
            <div className="nav-brand-text">
              <div className="nav-brand-title">Renaissance Project</div>
              <div className="nav-brand-sub">at NC A&amp;T</div>
            </div>
          </Link>

          <div className="nav-links">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`nav-link${isActive(n.href) ? " is-active" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link href="/faq#join" className="btn nav-cta">Join Us</Link>
            <button
              type="button"
              className="nav-burger"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <line x1="1" y1="5" x2="17" y2="5" />
                <line x1="1" y1="13" x2="17" y2="13" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " is-open" : ""}`} role="dialog" aria-modal="true">
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" width="18" height="18">
            <line x1="3" y1="3" x2="15" y2="15" />
            <line x1="15" y1="3" x2="3" y2="15" />
          </svg>
        </button>
        <div className="mobile-menu-links">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`mobile-menu-link${isActive(n.href) ? " is-active" : ""}`}
            >
              <span>{n.label}</span>
              <span className="mobile-menu-link-num">N° {n.num}</span>
            </Link>
          ))}
        </div>
        <Link href="/faq#join" className="btn btn-block mobile-menu-cta">Apply to Join</Link>
        <div className="mobile-menu-foot">Renaissance Project · NC A&amp;T · MMXXVI</div>
      </div>
    </>
  );
}
