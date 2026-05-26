import MembersGrid from "@/components/MembersGrid";

export const metadata = {
  title: "E-Board · Renaissance Project",
  description: "Meet the nineteen Aggies who keep Renaissance Project running.",
};

export default function MembersPage() {
  return (
    <>
      <header className="page-head" data-screen-label="01 Executive Board head">
        <div className="page-head-bg" />
        <div className="container">
          <div className="eyebrow">The E-Board</div>
          <h1>The <br></br><em>Executive Board</em></h1>
          <p className="page-head-lede">
            Selected through an application and interview process, each board member serves a one-year term driven by a single purpose — to leave Renaissance Project better than they found it.
          </p>
        </div>
      </header>

      <section style={{ padding: "40px 0 24px" }} data-screen-label="02 Members grid">
        <div className="container">
          <MembersGrid />

        </div>
      </section>
    </>
  );
}
