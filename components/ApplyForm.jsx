"use client";

import { useState } from "react";


// added this line so i can push 

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first: "", last: "", email: "", year: "'29 · Freshman",
    pillar: "Serve · Outreach", why: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    // In production wire this to a Vercel serverless route, Formspree, Resend, etc.
    setSubmitted(true);
  };

  return (
    <div className="apply-card">
      {!submitted ? (
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="apply-eyebrow">⤬ Spring 2026 Application</div>
          <h3 className="apply-title">Take up the work.</h3>
          <p className="apply-sub">Open through Friday, Jan 30. We review on a rolling basis.</p>

          <div className="field-row">
            <div className="field">
              <label htmlFor="first">First name</label>
              <input id="first" type="text" placeholder="Amara" value={form.first} onChange={update("first")} />
            </div>
            <div className="field">
              <label htmlFor="last">Last name</label>
              <input id="last" type="text" placeholder="Whitfield" value={form.last} onChange={update("last")} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Aggie email</label>
            <input id="email" type="email" placeholder="aewhitfield@aggies.ncat.edu" value={form.email} onChange={update("email")} />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="year">Class year</label>
              <select id="year" value={form.year} onChange={update("year")}>
                <option>{`'29 · Freshman`}</option>
                <option>{`'28 · Sophomore`}</option>
                <option>{`'27 · Junior`}</option>
                <option>{`'26 · Senior`}</option>
                <option>Grad</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="pillar">Pillar of interest</label>
              <select id="pillar" value={form.pillar} onChange={update("pillar")}>
                <option>Serve · Outreach</option>
                <option>Study · Salons</option>
                <option>Create · Mural &amp; Media</option>
                <option>Wherever needed</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="why">Why the Project? (one paragraph)</label>
            <textarea id="why" placeholder="Tell us what drew you in. There are no wrong answers." value={form.why} onChange={update("why")} />
          </div>

          <div className="form-foot">
            <span className="form-note">We reply within 48 hours</span>
            <button type="submit" className="btn">Submit Application →</button>
          </div>
        </form>
      ) : (
        <div className="success-state is-on">
          <div className="success-medal">✓</div>
          <div className="success-title">Application received.</div>
          <p className="success-sub">A board member will reach out within 48 hours to schedule coffee.</p>
        </div>
      )}
    </div>
  );
}
