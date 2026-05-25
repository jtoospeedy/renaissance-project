import Image from "next/image";
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
            <div className="eyebrow hero-eyebrow">Est. MMXXIII · NC A&amp;T State University</div>
            <h1 className="hero-title">A new<br /><em>renaissance</em><br />for Aggie land.</h1>
            <p className="hero-lede">
              We are students reviving the spirit of inquiry, art, and civic duty &mdash; one block, one classroom, one mural at a time. Service is our scholarship.
            </p>
            <div className="hero-cta">
              <Link href="/faq#join" className="btn">Join the Project</Link>
              <a href="#trailer" className="btn btn-ghost">Watch the Trailer</a>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-card-medal"><Image src="/Ren Logo 2.PNG" alt="Renaissance Project Logo" width={80} height={80} style={{ objectFit: "contain" }} /></div>
            <h3>The Renaissance Project</h3>
            <div className="hero-card-sub">Est. 2023 · NC A&amp;T State University</div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-num">III</div><div className="hero-stat-lbl">Years on Campus</div></div>
              <div className="hero-stat"><div className="hero-stat-num">19</div><div className="hero-stat-lbl">Board Members</div></div>
              <div className="hero-stat"><div className="hero-stat-num">5+</div><div className="hero-stat-lbl">Schools in Greensboro</div></div>
              <div className="hero-stat"><div className="hero-stat-num">4</div><div className="hero-stat-lbl">Focus Areas</div></div>
            </div>
            <div className="hero-card-partner">Proud partner of the Greensboro YMCA</div>
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
              <p className="founders-caption">The founding cohort &middot; 2023</p>
            </div>

            <div className="about-body">
              <p className="dropcap">Founded in 2023, the Renaissance Project was built on a commitment to developing the whole student — academically, professionally, and civically. We exist to build excellence in STEM, Business &amp; Finance, Leadership &amp; Professionalism, and Community Service, while uplifting the greater Greensboro community and NC A&amp;T.</p>
              <p>We believe that the most powerful thing an Aggie can do is show up — for their campus, for their community, and for the next generation coming behind them.</p>

              <div className="pillars">
                <div className="pillar">
                  <div className="pillar-num">I.</div>
                  <h4>Serve</h4>
                  <p>Giving back to the greater Greensboro community through consistent, meaningful outreach and partnership.</p>
                </div>
                <div className="pillar">
                  <div className="pillar-num">II.</div>
                  <h4>Grow</h4>
                  <p>Building real skills in STEM, business, leadership, and professionalism that carry beyond the classroom.</p>
                </div>
                <div className="pillar">
                  <div className="pillar-num">III.</div>
                  <h4>Execute</h4>
                  <p>Turning vision into action &mdash; leading programs, running committees, and delivering results that make an impact.</p>
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
              <h2 className="about-head-title">Don&apos;t take our word for it. <span className="italic-accent">See it yourself.</span></h2>
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
              <h2 className="about-head-title">Four pillars. <span className="italic-accent">One mission.</span></h2>
            </div>
            <div className="section-num">N°&nbsp;03 / 05</div>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">I</div>
              <h4>STEM</h4>
              <p>Fostering academic excellence and curiosity in science, technology, engineering, and mathematics.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">II</div>
              <h4>Business &amp; Finance</h4>
              <p>Equipping members with the financial literacy and entrepreneurial mindset to build generational wealth.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">III</div>
              <h4>Leadership &amp; Professionalism</h4>
              <p>Developing the next generation of leaders through real responsibility, mentorship, and professional development.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">IV</div>
              <h4>Community Service</h4>
              <p>Showing up for Greensboro and NC A&amp;T through consistent, meaningful outreach that makes a lasting difference.</p>
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
