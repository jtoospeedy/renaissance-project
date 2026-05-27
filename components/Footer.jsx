import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: 20 }}>
              <Image src="/Ren Logo 2.PNG" alt="Renaissance Project Logo" width={40} height={40} style={{ objectFit: "contain" }} />
              <div className="nav-brand-text">
                <div className="nav-brand-title">Renaissance Project</div>
                <div className="nav-brand-sub">at NC A&amp;T</div>
              </div>
            </div>
            <p className="foot-mission">
              Building the complete man through service, growth, and execution — at NC A&T and in the Greensboro community.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/members">E-Board</Link></li>
              <li><Link href="/events">Events</Link></li>
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
              <li><a href="https://www.instagram.com/renaissanceproject2023" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© Renaissance Project · NC A&amp;T</span>
          <span>Greensboro, NC</span>
        </div>
      </div>
    </footer>
  );
}
