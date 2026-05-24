import Link from "next/link";
import TrailerVideo from "../components/TrailerVideo";

export const metadata = {
  title: "Renaissance Project · NC A&T",
  description: "A student-led community service organization at NC A&T reviving the spirit of inquiry, art, and civic duty.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" data-screen-label="01 Hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div>
            <div className="eyebrow hero-eyebrow">Est. MMXXII · NC A&amp;T State University</div>
            <h1 className="hero-title">A new<br /><em>renaissance</em><br />for the Aggie city.</h1>
            <p className="hero-lede">
              We are students reviving the spirit of inquiry, art, and civic duty &mdash; one block, one classroom, one mural at a time. Service is our scholarship.
            </p>
            <div className="hero-cta">
              <Link href="/faq#join" className="btn">Join the Project</Link>
              <a href="#trailer" className="btn btn-ghost">Watch the Trailer</a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-medal"><span>R</span></div>
            <h3>The Renaissance Project</h3>
            <div className="hero-card-sub">A Chapter at NC A&amp;T</div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-num">142</div><div className="hero-stat-lbl">Active Members</div></div>
              <div className="hero-stat"><div className="hero-stat-num">26</div><div className="hero-stat-lbl">Partner Orgs</div></div>
              <div className="hero-stat"><div className="hero-stat-num">3.8k</div><div className="hero-stat-lbl">Service Hours</div></div>
              <div className="hero-stat"><div className="hero-stat-num">IV</div><div className="hero-stat-lbl">Years on Campus</div></div>
            </div>
          </aside>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Service <i className="dot" /> Scholarship <i className="dot" /> Culture <i className="dot" /> Community <i className="dot" /> Inquiry <i className="dot" /> Art <i className="dot" /></span>
          <span>Service <i className="dot" /> Scholarship <i className="dot" /> Culture <i className="dot" /> Community <i className="dot" /> Inquiry <i className="dot" /> Art <i className="dot" /></span>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about" data-screen-label="02 About">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ I · Our mission</div>
              <h2 className="about-head-title">A student-led revival of <span className="italic-accent">service, scholarship &amp; soul.</span></h2>
            </div>
            <div className="section-num">N°&nbsp;01 / 05</div>
          </div>

          <div className="about-grid">
            <div className="founders-card">
              <div className="placeholder" style={{ aspectRatio: "3 / 4", borderRadius: "180px 180px 4px 4px" }}>[ founders' portrait ]</div>
              <div className="ornament-divider" style={{ margin: "20px 0" }}>
                <span className="ornament-diamond" />
                <span className="ornament-diamond" style={{ opacity: 0.6 }} />
                <span className="ornament-diamond" />
              </div>
              <p className="founders-caption">The founding cohort &middot; 2022</p>
            </div>

            <div className="about-body">
              <p className="dropcap">The Renaissance Project began with a question whispered between two Aggies on the steps of Dudley: <em>what would it look like to bring back the depth, the discipline, and the daring of a true renaissance &mdash; right here, on our campus?</em></p>
              <p>What started as a reading circle has become a 142-strong cohort of students rebuilding murals in East Greensboro, tutoring at McNair Elementary, hosting open-air lectures on Black art history, and organizing the largest student-run community festival in the Triad.</p>
              <p>We believe the most rigorous education is the one that meets the city at its doorstep. We believe a community service org should look more like a guild than a club &mdash; trades passed down, projects taken seriously, members who show up.</p>

              <div className="pillars">
                <div className="pillar">
                  <div className="pillar-num">I.</div>
                  <h4>Serve</h4>
                  <p>Weekly outreach, semesterly capstones, hands-on with our partners.</p>
                </div>
                <div className="pillar">
                  <div className="pillar-num">II.</div>
                  <h4>Study</h4>
                  <p>Reading circles, salons, and field trips that pair art with action.</p>
                </div>
                <div className="pillar">
                  <div className="pillar-num">III.</div>
                  <h4>Create</h4>
                  <p>Murals, zines, films, festivals &mdash; we make culture, not just consume it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAILER */}
      <section className="trailer" id="trailer" data-screen-label="03 Trailer">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ II · The Trailer</div>
              <h2 className="about-head-title">One year, one chapter. <span className="italic-accent">Press play.</span></h2>
            </div>
            <div className="section-num">N°&nbsp;02 / 05</div>
          </div>

          <TrailerVideo />

          <div className="trailer-caption">
            <p className="muted" style={{ fontSize: 15, maxWidth: 640 }}>
              Directed by the 2025 media team. Filmed across Greensboro, McLeansville, and the A&amp;T campus over twelve weeks of service projects, salons, and Sunday open-airs.
            </p>
            <div className="trailer-runtime">2:47 · 4K · Sound on</div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs" id="programs" data-screen-label="04 Programs">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ III · What we do</div>
              <h2 className="about-head-title">Four pillars. Four ways in.</h2>
            </div>
            <div className="section-num">N°&nbsp;03 / 05</div>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">I</div>
              <h4>Mural Guild</h4>
              <p>Restoring public art across East Greensboro with local artists and the city parks department.</p>
              <div className="program-meta"><span>Sat · 9am</span><span>Year-round</span></div>
            </div>
            <div className="program-card">
              <div className="program-icon">II</div>
              <h4>Salon &amp; Study</h4>
              <p>Reading circles on Baldwin, hooks, and Wilkerson. Hosted in living rooms across campus.</p>
              <div className="program-meta"><span>Thu · 7pm</span><span>Weekly</span></div>
            </div>
            <div className="program-card">
              <div className="program-icon">III</div>
              <h4>Aggie Tutors</h4>
              <p>One-on-one tutoring at McNair Elementary and the Hayes-Taylor YMCA after-school program.</p>
              <div className="program-meta"><span>Tue/Thu · 4pm</span><span>School year</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" data-screen-label="05 Join CTA">
        <div className="container">
          <div className="ornament-divider" style={{ marginBottom: 28 }}>
            <span className="ornament-diamond" />
          </div>
          <h2>Service is our scholarship. <em>Will you take up the work?</em></h2>
          <p className="cta-lede">Applications open every August and January. Anyone with a campus email may apply.</p>
          <div className="cta-actions">
            <Link href="/faq#join" className="btn">How to Join</Link>
            <Link href="/members" className="btn btn-ghost">Meet the E-Board</Link>
          </div>
        </div>
      </section>
    </>
  );
}
