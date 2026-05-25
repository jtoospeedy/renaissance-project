import EventsList from "@/components/EventsList";

export const metadata = {
  title: "Events · Renaissance Project",
  description: "Salons, service days, festivals — the full Renaissance Project calendar.",
};

export default function EventsPage() {
  return (
    <>
      <header className="page-head" data-screen-label="01 Events head">
        <div className="page-head-bg" />
        <div className="container">
          <div className="eyebrow">§ Fall 2026 · Calendar</div>
          <h1>The work, <em>coming soon.</em></h1>
          <p className="page-head-lede">
            Renaissance Project returns in August 2026. Check back then for our full semester calendar — events, service days, and more.
          </p>
        </div>
      </header>

      {/* SPOTLIGHT */}
      <section className="spotlight" data-screen-label="02 Spotlight">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-poster">[ coming fall 2026 ]</div>
            <div className="spotlight-body">
              <div className="spotlight-tag">⤬ Coming Soon · Fall 2026</div>
              <h2 className="spotlight-title">Renaissance Project Returns — August 2026</h2>
              <div className="spotlight-meta">
                <span><strong>When</strong> August 2026</span>
                <span><strong>Where</strong> NC A&amp;T</span>
              </div>
              <p className="spotlight-desc">
                We&apos;re gearing up for a big fall semester. Events, service days, and committee programming will be announced here when we return in August. Stay connected on Instagram for updates.
              </p>
              <div className="spotlight-cta">
                <a href="https://www.instagram.com/renaissanceproject2023" target="_blank" rel="noopener noreferrer" className="btn">Follow on Instagram</a>
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
              <h2 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", marginTop: 16 }}>Events dropping August 2026.</h2>
            </div>
            <div className="section-num">N°&nbsp;01 / 02</div>
          </div>

          <EventsList />

          <div className="ical-band">
            <div>
              <div className="ical-title">Take it with you.</div>
              <div className="ical-sub">Subscribe to the Renaissance Project calendar — auto-syncs every new event to Apple Calendar, Google, or Outlook.</div>
            </div>
            <a href="#" className="btn">Subscribe · .ics</a>
          </div>
        </div>
      </section>
    </>
  );
}
