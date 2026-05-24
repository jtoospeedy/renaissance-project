import Link from "next/link";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery · Renaissance Project",
  description: "Four years of murals, salons, service days, and festivals.",
};

export default function GalleryPage() {
  return (
    <>
      <header className="page-head" data-screen-label="01 Gallery head">
        <div className="page-head-bg" />
        <div className="container">
          <div className="eyebrow">§ Renaissance Project, in pictures</div>
          <h1>Four years of <em>showing up.</em></h1>
          <p className="page-head-lede">Murals, salons, Saturdays in the cold, Sundays on the plaza. Tap a photo to see the story.</p>
        </div>
      </header>

      <section style={{ padding: "32px 0 24px" }} data-screen-label="02 Gallery">
        <div className="container">
          <Gallery />

          <div className="submit-card">
            <h3>Got a photo from a project?</h3>
            <p>Send your shots to the media team and we&apos;ll add them to the Renaissance Project archive. Credit always included.</p>
            <Link href="/faq#contact" className="btn">Submit a Photo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
