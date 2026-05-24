import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: 20 }}>
              <div className="nav-brand-mark" aria-hidden="true" />
              <div className="nav-brand-text">
                <div className="nav-brand-title">Renaissance Project</div>
                <div className="nav-brand-sub">at NC A&amp;T</div>
              </div>
            </div>
            <p className="foot-mission">
              A student-led community service organization reviving the spirit of inquiry, art, and civic duty on the Aggie campus.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/members">E-Board</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/faq#contact">Contact</Link></li>
              <li><Link href="/faq#join">How to Join</Link></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© MMXXVI · Renaissance Project · NC A&amp;T</span>
          <span>Greensboro, NC</span>
        </div>
      </div>
    </footer>
  );
}
