import FAQAccordion from "@/components/FAQAccordion";
import ApplyForm from "@/components/ApplyForm";
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

      <div className="anchor-bar">
        <div className="anchor-bar-inner">
          <a href="#faq" className="anchor-chip">⤬ FAQ</a>
          <a href="#join" className="anchor-chip">⤬ How to Join</a>
          <a href="#contact" className="anchor-chip">⤬ Contact</a>
        </div>
      </div>

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
                <li><a href="#cat-money" className="anchor-chip" style={{ border: "none", padding: 0 }}>Dues &amp; funding</a></li>
                <li><a href="#cat-misc" className="anchor-chip" style={{ border: "none", padding: 0 }}>Misc.</a></li>
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
              <div className="eyebrow">§ How to Join</div>
              <h2 style={{ fontSize: "clamp(34px, 5.5vw, 56px)", marginTop: 16 }}>
                Apply once. <span className="italic-accent">Stay forever.</span>
              </h2>
            </div>
            <div className="section-num">N°&nbsp;02 / 03</div>
          </div>

          <div className="join-grid">
            <div>
              <p className="muted" style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 540 }}>
                We take new cohorts twice a year — early September and mid-January. Anyone with a valid{" "}
                <strong style={{ color: "var(--c-ink)", fontWeight: 500 }}>@aggies.ncat.edu</strong> address may apply. No GPA cutoff, no major requirement, no fee.
              </p>

              <div className="join-steps">
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>Submit the form</h4>
                    <p>Five short questions and one paragraph. Takes about ten minutes — really.</p>
                  </div>
                </div>
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>Coffee with the board</h4>
                    <p>A twenty-minute conversation with two e-board members. Casual. Wear what you want.</p>
                  </div>
                </div>
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>Shadow a project</h4>
                    <p>Tag along on one Saturday service day or a Thursday salon. See if the vibe fits.</p>
                  </div>
                </div>
                <div className="join-step">
                  <div className="join-step-num" />
                  <div>
                    <h4>The induction</h4>
                    <p>A small ceremony at the end of the month with the rest of your cohort. You&apos;re in.</p>
                  </div>
                </div>
              </div>
            </div>

            <ApplyForm />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact" data-screen-label="04 Contact">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ Get in touch</div>
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
