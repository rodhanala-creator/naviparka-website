import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ScanLine,
  BrainCircuit,
  CreditCard,
  BellRing,
  Car,
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Clock3,
} from "lucide-react";
import { PhoneMockup, PlayStoreBadge } from "@/components/site";
import { FaqAccordion, ResultShowcase } from "@/components/home-interactive";

const benefitCards = [
  {
    icon: ScanLine,
    title: "Scan signs and markings",
    text: "Use one scanner flow for parking signs, road markings and the visible evidence around them.",
  },
  {
    icon: BrainCircuit,
    title: "Understand the restriction",
    text: "Turn hard-to-read parking language into clearer guidance before you leave the car.",
  },
  {
    icon: CreditCard,
    title: "Handle payment faster",
    text: "See supported payment information, location codes and direct handoff actions when available.",
  },
] as const;

const flowItems = [
  {
    number: "01",
    title: "Scan",
    text: "Point your camera at the sign, road marking or bay evidence. There is no scan-type toggle to choose first.",
  },
  {
    number: "02",
    title: "Understand",
    text: "NaviParka reads the visible rules, surfaces the important conditions and puts them into simpler language.",
  },
  {
    number: "03",
    title: "Take the next step",
    text: "Pay externally, keep track of time limits or use the result to decide whether it is safe to park.",
  },
] as const;

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Helpful AI, not fake certainty",
    text: "NaviParka is designed to support the decision, not replace checking the real-world sign and surroundings.",
  },
  {
    icon: BadgeCheck,
    title: "Useful context when it matters",
    text: "Vehicle details, Blue Badge mode and scan history help keep important parking context close by.",
  },
  {
    icon: BellRing,
    title: "Built for the next action",
    text: "When a timer or payment step matters, the product is focused on helping you move forward quickly.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="s11-hero" id="top">
        <div className="container s11-shell">
          <div className="s11-hero-panel">
            <div className="s11-hero-copy">
              <div className="s11-eyebrow"><Sparkles size={14} /> AI-assisted UK parking guidance</div>
              <h1>Parking rules, made simple.</h1>
              <p>
                Scan a UK parking sign or road marking. NaviParka helps you understand the visible restriction,
                find supported payment details when available and take the right next step.
              </p>
              <div className="s11-hero-actions">
                <PlayStoreBadge href="/#download" />
                <Link href="#how-it-works" className="btn btn-secondary">See how it works <ArrowRight size={16} /></Link>
              </div>
              <div className="s11-hero-notes">
                <span><CheckCircle2 size={15} /> Android first</span>
                <span><ShieldCheck size={15} /> Safety-conscious guidance</span>
                <span><ExternalLink size={15} /> Direct payment handoff</span>
              </div>
            </div>

            <div className="s11-hero-stage">
              <div className="s11-stage-backdrop" />
              <div className="s11-stage-card s11-stage-left"><ScanLine size={18} /><div><b>Scan once</b><small>Signs or road markings</small></div></div>
              <div className="s11-stage-card s11-stage-right"><CreditCard size={18} /><div><b>Payment found</b><small>Open the service directly</small></div></div>
              <div className="s11-stage-card s11-stage-bottom"><BrainCircuit size={18} /><div><b>Rules simplified</b><small>Plain-English guidance</small></div></div>
              <div className="s11-phone-hero"><PhoneMockup kind="scanner" /></div>
            </div>
          </div>

          <div className="s11-benefit-strip">
            {benefitCards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="s11-benefit-card">
                <div className="s11-benefit-icon"><Icon size={20} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="s11-section" id="product">
        <div className="container s11-grid-feature">
          <div className="s11-copy-block">
            <span className="s11-kicker">The solution to confusing parking rules</span>
            <h2>Built for those few important minutes before you leave the vehicle.</h2>
            <p>
              NaviParka is not trying to be a giant parking portal. The current MVP is focused on one job: helping
              you read the evidence in front of you, understand the restriction and move forward with more confidence.
            </p>
            <ul className="s11-check-list">
              <li><CheckCircle2 size={18} /> Scan signs, road markings and bay context</li>
              <li><CheckCircle2 size={18} /> Surface time limits, permit rules and payment cues</li>
              <li><CheckCircle2 size={18} /> Support Blue Badge mode, reminders and scan history</li>
            </ul>
          </div>

          <div className="s11-feature-stage">
            <article className="s11-panel-card s11-panel-light">
              <div className="s11-panel-text">
                <span className="s11-card-kicker">Android product</span>
                <h3>A real app experience, not a brochure site.</h3>
                <p>Every section is grounded in the screens users actually see in the product today.</p>
              </div>
              <div className="s11-panel-phone"><PhoneMockup kind="onboarding" /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="s11-section s11-how" id="how-it-works">
        <div className="container">
          <div className="s11-section-head centered">
            <span className="s11-kicker">How it works</span>
            <h2>One short flow from evidence to action.</h2>
            <p>The website stays simple because the product flow is simple.</p>
          </div>

          <div className="s11-flow-grid">
            {flowItems.map((item) => (
              <article key={item.number} className="s11-flow-card">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="s11-section s11-section-alt" id="results">
        <div className="container">
          <div className="s11-section-head">
            <span className="s11-kicker">Product interaction</span>
            <h2>A straight answer when the sign is not straightforward.</h2>
            <p>Use the controls below to explore the different kinds of guidance the product can help surface.</p>
          </div>
          <ResultShowcase />
        </div>
      </section>

      <section className="s11-section" id="supporting-features">
        <div className="container s11-duo-grid">
          <article className="s11-highlight-card s11-highlight-blue">
            <div className="s11-highlight-copy">
              <span className="s11-card-kicker light">When payment is required</span>
              <h3>Don’t hunt for the payment details.</h3>
              <p>
                Supported payment results can show the provider, the location code and a direct action to open the
                relevant external service.
              </p>
              <ul>
                <li><CreditCard size={16} /> Payment provider surfaced clearly</li>
                <li><ExternalLink size={16} /> Direct external payment handoff</li>
                <li><Clock3 size={16} /> Keep the next step moving</li>
              </ul>
            </div>
            <div className="s11-highlight-phone"><PhoneMockup kind="payment" /></div>
          </article>

          <article className="s11-highlight-card s11-highlight-neutral">
            <div className="s11-highlight-copy">
              <span className="s11-card-kicker">Driver context</span>
              <h3>Useful before and after the scan.</h3>
              <p>
                Add your vehicle, enable Blue Badge mode when relevant and keep scan history close by for the next
                parking decision.
              </p>
              <ul>
                <li><Car size={16} /> Vehicle details for future scans</li>
                <li><BadgeCheck size={16} /> Blue Badge mode when relevant</li>
                <li><BellRing size={16} /> Move-car reminders and history</li>
              </ul>
            </div>
            <div className="s11-double-phone">
              <div className="s11-phone-left"><PhoneMockup kind="vehicle" /></div>
              <div className="s11-phone-right"><PhoneMockup kind="settings" /></div>
            </div>
          </article>
        </div>
      </section>

      <section className="s11-section s11-safety" id="safety">
        <div className="container s11-safety-grid">
          <div className="s11-safety-copy">
            <span className="s11-kicker">Safety and trust</span>
            <h2>Clear enough to be helpful. Honest enough to be trusted.</h2>
            <p>
              NaviParka should feel like a reliable product. That means showing useful guidance clearly, while also
              being honest about the fact that real-world signs and local conditions still matter.
            </p>
            <div className="s11-trust-list">
              {trustItems.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <Icon size={18} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="s11-faq-card" id="faq">
            <div className="s11-faq-head">
              <span className="s11-kicker">FAQ</span>
              <h2>Short answers to the main questions.</h2>
            </div>
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="s11-section s11-download" id="download">
        <div className="container">
          <div className="s11-download-panel">
            <div className="s11-download-copy">
              <span className="s11-card-kicker light">Get NaviParka</span>
              <h2>Download the Android app and try the current MVP.</h2>
              <p>
                Scan the evidence. Understand the restriction. Take the next step with a cleaner, more product-led
                experience.
              </p>
              <div className="s11-download-actions">
                <PlayStoreBadge href="/download" />
                <Link href="/support" className="btn btn-secondary">Need support? <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="s11-download-visual">
              <PhoneMockup kind="onboarding" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
