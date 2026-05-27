import FAQAccordion from "@/components/FAQAccordion";
import HashScroll from "@/components/HashScroll";

export const metadata = {
  title: "FAQ, Join & Contact · Renaissance Project",
  description: "Frequently-asked questions, how to apply, and how to reach Renaissance Project.",
};

export default function FAQPage() {
  return (
    <>
      <HashScroll />

      <header className="page-head" data-screen-label="01 FAQ head">
        <div className="page-head-bg" />
        <div className="container">
          <div className="eyebrow">Questions · Joining · Reaching us</div>
          <h1>Everything you might <em>want to know.</em></h1>
        </div>
      </header>

      {/* FAQ */}
      <section className="faq" id="faq" data-screen-label="02 FAQ">
        <div className="container">
          <div className="faq-grid">
            <aside className="faq-sidebar">
              <div className="faq-sidebar-title">In this section</div>
              <ul>
                <li><a href="#cat-about" className="anchor-chip" style={{ border: "none", padding: 0 }}>About Renaissance Project</a></li>
                <li><a href="#cat-join" className="anchor-chip" style={{ border: "none", padding: 0 }}>Joining &amp; eligibility</a></li>
                <li><a href="#cat-time" className="anchor-chip" style={{ border: "none", padding: 0 }}>Time &amp; commitment</a></li>
              </ul>
            </aside>

            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="join" id="join" data-screen-label="03 Join">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">How to Join</div>
              <h2 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", marginTop: 16 }}>
                Apply once. <span className="italic-accent">Stay forever.</span>
              </h2>
            </div>
            {/* <div className="section-num">N°&nbsp;02 / 03</div> */}
          </div>

          <div className="join-grid">
            <div>
              <p className="muted" style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 540 }}>
                We take new members once a year. Any male NC A&T student apply with a valid{" "}
                <strong style={{ color: "var(--c-ink)", fontWeight: 500 }}>@aggies.ncat.edu</strong> address may apply. <br></br><br></br>* Must be in good academic standing, no major requirement.
              </p>

              <div className="join-steps">
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>Submit the form</h4>
                    <p>Answer a few short questions about who you are and what drives you. Be genuine — we read every response carefully.</p>
                  </div>
                </div>
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>Interview</h4>
                    <p>A brief interview with members of the executive board. No right answers — just a real conversation about your goals and character.</p>
                  </div>
                </div>
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>Acceptance</h4>
                    <p>Selected applicants are welcomed into the organization and introduced to the full membership.</p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="join-quote" style={{
              border: "1px solid var(--c-line)",
              background: "var(--c-ground-2)",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 32,
              margin: 0,
              alignSelf: "center",
            }}>
              <div style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(22px, 2.6vw, 30px)",
                lineHeight: 1.4,
                color: "var(--c-ink)",
                fontStyle: "italic",
              }}>
                &ldquo;Life&apos;s most persistent and urgent question is: what are you doing for others?&rdquo;
              </div>
              <div style={{
                fontFamily: "var(--f-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--c-muted)",
              }}>
                — Martin Luther King Jr.
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact" data-screen-label="04 Contact">
        <div className="container">
          <div className="section-head" style={{ justifyContent: "center", textAlign: "center" }}>
            <div>
              <div className="eyebrow">Get in touch</div>
              <h2 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", marginTop: 16 }}>Find us, follow us, write us.</h2>
            </div>
            {/* <div className="section-num">N°&nbsp;03 / 03</div> */}
          </div>

          <div className="contact-grid">
            <a href="mailto:hello@rp-ncat.org" className="contact-card">
              <div className="contact-card-icon">✉</div>
              <h4>Email</h4>
              <div className="contact-card-val">renaissanceprojectgso@gmail.com</div>
              <div className="contact-card-sub">For partners, press, and questions.</div>
            </a>
            <a href="https://www.instagram.com/renaissanceproject2023" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon">@</div>
              <h4>Instagram</h4>
              <div className="contact-card-val">@renaissanceproject2023</div>
              <div className="contact-card-sub">Updates, recaps, and announcements.</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
