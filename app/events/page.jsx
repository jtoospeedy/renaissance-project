import EventsList from "@/components/EventsList";

export const metadata = {
  title: "Events · Renaissance Project",
  description: "Salons, service days, festivals — the full chapter calendar.",
};

export default function EventsPage() {
  return (
    <>
      <header className="page-head" data-screen-label="01 Events head">
        <div className="page-head-bg" />
        <div className="container">
          <div className="eyebrow">§ Spring 2026 · Calendar</div>
          <h1>The work, <em>by the week.</em></h1>
          <p className="page-head-lede">
            Salons, service Saturdays, the spring festival, our open-airs. Tap any event to RSVP — and add the whole semester to your calendar.
          </p>
        </div>
      </header>

      {/* SPOTLIGHT */}
      <section className="spotlight" data-screen-label="02 Spotlight">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-poster">[ spring festival poster ]</div>
            <div className="spotlight-body">
              <div className="spotlight-tag">⤬ Featured · Capstone</div>
              <h2 className="spotlight-title">The Aggie Renaissance Festival</h2>
              <div className="spotlight-meta">
                <span><strong>When</strong> Sat · Apr 18</span>
                <span><strong>Time</strong> 11a — 8p</span>
                <span><strong>Where</strong> Stewart Plaza</span>
              </div>
              <p className="spotlight-desc">
                A free, day-long block party on the corner of Bluford &amp; Lindsay — eight live performances, twenty student vendors, an open-air gallery from the Mural Guild, and the closing salon at sundown. Bring the whole hall.
              </p>
              <div className="spotlight-cta">
                <a href="#" className="btn">RSVP Free</a>
                <a href="#" className="btn btn-ghost">View Lineup</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="events" data-screen-label="03 Events list">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ Upcoming &amp; recent</div>
              <h2 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", marginTop: 16 }}>The semester at a glance.</h2>
            </div>
            <div className="section-num">N°&nbsp;01 / 02</div>
          </div>

          <EventsList />

          <div className="ical-band">
            <div>
              <div className="ical-title">Take it with you.</div>
              <div className="ical-sub">Subscribe to the chapter calendar — auto-syncs every new event to Apple Calendar, Google, or Outlook.</div>
            </div>
            <a href="#" className="btn">Subscribe · .ics</a>
          </div>
        </div>
      </section>
    </>
  );
}
