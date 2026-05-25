"use client";

import { useEffect, useState } from "react";
import { EVENTS } from "@/lib/events";

const TABS = [
  { id: "upcoming", label: "Upcoming" },
  { id: "weekly", label: "Weekly" },
  { id: "past", label: "Past" },
];

export default function EventsList() {
  const [tab, setTab] = useState("upcoming");
  const [rsvps, setRsvps] = useState({}); // { upcoming: { 0: true }, ... }

  useEffect(() => {
    try {
      const all = {};
      TABS.forEach((t) => {
        all[t.id] = JSON.parse(localStorage.getItem("rp_rsvps_" + t.id) || "{}");
      });
      setRsvps(all);
    } catch (e) {}
  }, []);

  const toggleRsvp = (idx) => {
    setRsvps((prev) => {
      const next = { ...prev, [tab]: { ...(prev[tab] || {}), [idx]: !(prev[tab]?.[idx]) } };
      try { localStorage.setItem("rp_rsvps_" + tab, JSON.stringify(next[tab])); } catch (e) {}
      return next;
    });
  };

  const items = EVENTS[tab] || [];
  const isPast = tab === "past";

  return (
    <>
      <div className="events-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`events-tab${tab === t.id ? " is-active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label} <span className="events-tab-count">{EVENTS[t.id].length}</span>
          </button>
        ))}
      </div>

      <div className="events-list">
        {items.length === 0 ? (
          <div className="events-empty">Events will be posted when we return in August 2026. Check back then.</div>
        ) : (
          items.map((e, i) => {
            const on = !!rsvps[tab]?.[i];
            return (
              <div key={i} className="event-row" data-screen-label={`event-${i + 1}`}>
                <div className="event-date">
                  <div className="event-day">{e.day}</div>
                  <div className="event-month-year">{e.month}</div>
                </div>
                <div className="event-body">
                  <div className="event-tag">⤬ {e.tag}</div>
                  <div className="event-title">{e.title}</div>
                  <div className="event-desc">{e.desc}</div>
                </div>
                <div className="event-location">
                  <strong>{e.location}</strong>
                  {e.time}
                </div>
                <div className="event-cta">
                  {isPast ? (
                    <button className="event-rsvp" disabled style={{ opacity: 0.5, cursor: "default" }}>Recap →</button>
                  ) : (
                    <button
                      className={`event-rsvp${on ? " is-on" : ""}`}
                      onClick={(ev) => { ev.stopPropagation(); toggleRsvp(i); }}
                    >
                      {on ? "✓ Going" : "RSVP"}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
