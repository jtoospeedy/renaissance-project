import MembersGrid from "@/components/MembersGrid";

export const metadata = {
  title: "E-Board · Renaissance Project",
  description: "Meet the ten Aggies who keep the chapter running.",
};

export default function MembersPage() {
  return (
    <>
      <header className="page-head" data-screen-label="01 Members head">
        <div className="page-head-bg" />
        <div className="container">
          <div className="eyebrow">§ The E-Board · MMXXVI</div>
          <h1>Nineteen Aggies. <em>One project.</em></h1>
          <p className="page-head-lede">
            Each board member is elected by the chapter and serves a one-year term. They keep the trains running, the salons humming, and the murals dry.
          </p>
        </div>
      </header>

      <section style={{ padding: "40px 0 24px" }} data-screen-label="02 Members grid">
        <div className="container">
          <MembersGrid />

          <div className="roll-call">
            <div className="roll-call-title">— The Chapter Roll —</div>
            <div className="roll-call-list">
              142 Aggies in the brotherhood &amp; sisterhood &middot; 26 cohorts since the founding &middot; 3,802 service hours &amp; counting &middot; one city, one campus, one renaissance.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
