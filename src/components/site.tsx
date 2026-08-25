import Link from "next/link";
import {
  ArrowRight,
  Map,
  Car,
  Clock3,
  History,
  ShieldCheck,
  CreditCard,
  ScanLine,
  Navigation,
  BatteryCharging,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  MapPin,
} from "lucide-react";
import { MobileMenu } from "@/components/interactive";

export const routes = [
  ["/#product", "Product"],
  ["/#how-it-works", "How it works"],
  ["/#safety", "Safety"],
  ["/support", "Support"],
] as const;

function Brand() {
  return (
    <span className="brand">
      <img src="/brand/naviparka-icon.png" alt="NaviParka" className="brand-icon" />
      <span className="brand-name">NaviParka</span>
    </span>
  );
}

export function Header() {
  return (
    <header className="nav">
      <div className="container navin">
        <Link href="/" className="logo" aria-label="NaviParka home">
          <Brand />
        </Link>
        <nav className="navlinks">
          <Link href="/#product">Product</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#safety">Safety</Link>
          <Link href="/support">Support</Link>
        </nav>
        <Link className="btn btn-primary navcta" href="/#download">
          Get NaviParka <ArrowRight size={16} />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}

export function PlayStoreBadge({ href = "/download" }: { href?: string }) {
  return (
    <Link href={href} className="play-store-badge" aria-label="Get NaviParka on Google Play">
      <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="s11-footer-grid">
          <div className="s11-footer-brand">
            <div className="logo"><Brand /></div>
            <p>Parking rules, made simple.</p>
            <small>AI-assisted parking guidance for UK drivers.</small>
          </div>
          <div>
            <h4>Navigate</h4>
            <Link href="/#product">Product</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#safety">Safety</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link href="/support">Support centre</Link>
            <Link href="/support/contact">Contact</Link>
            <Link href="/download">Download</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
        <div className="s11-footer-bottom">
          <span>© 2026 NaviParka. All rights reserved.</span>
          <span>Always check local signage, bay markings and surrounding conditions before leaving your vehicle.</span>
        </div>
      </div>
    </footer>
  );
}

const screenByKind: Record<string, { src: string; alt: string }> = {
  scanner: { src: "/app/scanner.webp", alt: "NaviParka Android scanner screen scanning parking evidence" },
  result: { src: "/app/payment.webp", alt: "NaviParka Android parking result showing payment service and location code" },
  payment: { src: "/app/payment.webp", alt: "NaviParka Android payment handoff screen" },
  vehicle: { src: "/app/profile.webp", alt: "NaviParka Android profile showing vehicle and recent scans" },
  profile: { src: "/app/profile.webp", alt: "NaviParka Android profile and scan history screen" },
  settings: { src: "/app/settings.webp", alt: "NaviParka Android settings showing reminders, Blue Badge mode and privacy controls" },
  onboarding: { src: "/app/onboarding.webp", alt: "NaviParka Android welcome screen" },
};

export function PhoneMockup({ kind = "scanner", label }: { kind?: string; label?: string }) {
  const screen = screenByKind[kind] ?? screenByKind.scanner;
  return (
    <div className="device-stage">
      <div className="android-phone">
        <div className="android-screen">
          <img src={screen.src} alt={screen.alt} />
        </div>
        <span className="android-camera" aria-hidden="true" />
      </div>
      {label && <div className="mockup-label">Android · NaviParka</div>}
    </div>
  );
}

export function ResultCard({ type, title, children }: { type: "good" | "warn" | "bad"; title: string; children: React.ReactNode }) {
  const Icon = type === "good" ? CheckCircle2 : type === "warn" ? AlertTriangle : XCircle;
  return (
    <div className={`card status-card ${type}`}>
      <div className="status-accent" />
      <div className="status-top"><Icon size={17} /> {type === "good" ? "ALLOWED" : type === "warn" ? "CONDITIONAL" : "RESTRICTED"}</div>
      <div className="status-title">{title}</div>
      {children}
      <div className="status-footer">View reasoning <ArrowRight size={14} /></div>
    </div>
  );
}

export function MapMockup() {
  return (
    <div className="card map">
      <div className="map-grid" />
      <div className="road one" />
      <div className="road two" />
      <div className="road three" />
      <div className="map-label city">VERSION 2 ROADMAP</div>
      <div className="map-label bedford">Future parking map</div>
      <div className="pin" style={{ left: "19%", top: "25%" }}>P</div>
      <div className="pin" style={{ left: "70%", top: "18%" }}>P</div>
      <div className="pin ev" style={{ left: "61%", top: "65%" }}>⚡</div>
      <div className="pin" style={{ left: "34%", top: "57%" }}>P</div>
      <div className="you" style={{ left: "48%", top: "43%" }}><span /></div>
      <div className="card best">
        <div className="best-top"><div className="eyebrow">Coming in Version 2</div></div>
        <h3 className="h3">Parking discovery &amp; map</h3>
        <div className="best-meta"><span><MapPin size={14} /> Planned feature</span><span><ShieldCheck size={14} /> Not part of the MVP</span></div>
      </div>
    </div>
  );
}

export const featureIcons = {
  scanner: ScanLine,
  map: Map,
  vehicle: Car,
  payment: CreditCard,
  history: History,
  timer: Clock3,
  safety: ShieldCheck,
  charging: BatteryCharging,
  navigation: Navigation,
};

export function PageHero({ eyebrow, title, body, children }: { eyebrow: string; title: string; body: string; children?: React.ReactNode }) {
  return (
    <section className="pagehero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h1">{title}</h1>
        <p className="lead">{body}</p>
        {children}
      </div>
    </section>
  );
}
