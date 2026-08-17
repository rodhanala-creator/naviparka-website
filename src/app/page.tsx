import Link from "next/link";
import {ArrowRight,ScanLine,BrainCircuit,ExternalLink,CreditCard,Clock3,BellRing,Car,BadgeCheck,History,ShieldCheck,CheckCircle2,Copy,Camera,Sparkles} from "lucide-react";
import {PhoneMockup,PlayStoreBadge} from "@/components/site";

export default function Home(){return <>
<section className="p8-hero">
  <div className="container p8-hero-grid">
    <div className="p8-hero-copy">
      <div className="p8-pill"><Sparkles size={14}/> AI-assisted UK parking guidance</div>
      <h1>Read the sign.<br/><em>Know what to do.</em></h1>
      <p>Point your phone at parking signs or road markings. NaviParka turns the visible rules into clear guidance, shows payment details when available and helps you keep track of time limits.</p>
      <div className="p8-hero-actions">
        <PlayStoreBadge/>
        <Link href="/how-it-works" className="p8-link">See how it works <ArrowRight size={18}/></Link>
      </div>
      <div className="p8-mini-proof">
        <span><CheckCircle2 size={16}/> Android first</span>
        <span><ShieldCheck size={16}/> Safety-conscious</span>
        <span><CreditCard size={16}/> Payment handoff</span>
      </div>
    </div>
    <div className="p8-hero-product">
      <div className="p8-phone p8-phone-main"><PhoneMockup kind="scanner"/></div>
      <div className="p8-caption top"><ScanLine size={17}/><div><b>Scan parking evidence</b><small>Signs or road markings</small></div></div>
      <div className="p8-caption bottom"><BrainCircuit size={17}/><div><b>Plain-English guidance</b><small>Important conditions first</small></div></div>
    </div>
  </div>
</section>

<section className="p8-valuebar">
  <div className="container p8-valuebar-grid">
    <div><span>01</span><b>Scan</b><small>Point your camera at the evidence.</small></div>
    <div><span>02</span><b>Understand</b><small>See the restriction in plain English.</small></div>
    <div><span>03</span><b>Act</b><small>Pay externally or track the time limit.</small></div>
  </div>
</section>

<section className="p8-story p8-story-white">
  <div className="container p8-story-grid">
    <div className="p8-story-product left">
      <div className="p8-phone p8-phone-scan"><PhoneMockup kind="scanner"/></div>
    </div>
    <div className="p8-story-copy">
      <span className="p8-eyebrow">AI parking scanner</span>
      <h2>One camera.<br/><em>No scan mode to choose.</em></h2>
      <p>NaviParka is designed to recognise parking signs and road markings from the same scanner. Keep the relevant evidence in frame and let the app work out what it is looking at.</p>
      <div className="p8-inline-features">
        <span><Camera size={18}/> Parking signs</span><span><ScanLine size={18}/> Road markings</span><span><Clock3 size={18}/> Time limits</span><span><CreditCard size={18}/> Paid parking</span>
      </div>
      <Link href="/parking-scanner" className="p8-link">Explore the scanner <ArrowRight size={18}/></Link>
    </div>
  </div>
</section>

<section className="p8-payment">
  <div className="container p8-payment-grid">
    <div className="p8-payment-copy">
      <span className="p8-eyebrow light">When payment is required</span>
      <h2>Don’t hunt for the payment details.</h2>
      <p>When NaviParka can identify supported payment information, the result can surface the provider and location code and give you a direct action to open the relevant external payment service.</p>
      <div className="p8-payment-list">
        <div><CreditCard size={22}/><span><b>Payment provider</b><small>See the service clearly in the result.</small></span></div>
        <div><Copy size={22}/><span><b>Location code</b><small>Copy the code without re-reading the sign.</small></span></div>
        <div><ExternalLink size={22}/><span><b>Open payment service</b><small>Continue securely outside NaviParka.</small></span></div>
      </div>
    </div>
    <div className="p8-payment-product">
      <div className="p8-phone p8-phone-pay"><PhoneMockup kind="payment"/></div>
      <div className="p8-code-card"><small>LOCATION CODE</small><strong>686995</strong><span>Ready to copy</span></div>
    </div>
  </div>
</section>

<section className="p8-context">
  <div className="container">
    <div className="p8-context-head">
      <div><span className="p8-eyebrow">Built around the driver</span><h2>More useful when the situation depends on you.</h2></div>
      <p>Vehicle details, Blue Badge mode, move-car reminders and scan history help NaviParka keep useful parking context close at hand.</p>
    </div>
    <div className="p8-context-stage">
      <div className="p8-phone p8-profile"><PhoneMockup kind="vehicle"/></div>
      <div className="p8-phone p8-settings"><PhoneMockup kind="settings"/></div>
      <div className="p8-context-card one"><Car size={20}/><b>Vehicle context</b><small>Keep relevant vehicle information available.</small></div>
      <div className="p8-context-card two"><BadgeCheck size={20}/><b>Blue Badge mode</b><small>Apply Blue Badge context when relevant.</small></div>
      <div className="p8-context-card three"><BellRing size={20}/><b>Move-car reminders</b><small>Get prompted before time runs out.</small></div>
      <div className="p8-context-card four"><History size={20}/><b>Scan history</b><small>Return to previous parking checks.</small></div>
    </div>
  </div>
</section>

<section className="p8-trust">
  <div className="container p8-trust-grid">
    <div className="p8-trust-copy"><span className="p8-eyebrow light">Safety matters</span><h2>Helpful AI.<br/>No fake certainty.</h2><p>NaviParka is designed to make parking rules easier to understand, but physical signage, temporary restrictions and local conditions still matter.</p><Link href="/safety" className="p8-link light">How NaviParka handles safety <ArrowRight size={18}/></Link></div>
    <div className="p8-trust-points">
      <article><span>01</span><h3>Evidence first</h3><p>Guidance is based on the parking evidence available to the app.</p></article>
      <article><span>02</span><h3>Conditions surfaced</h3><p>Time limits, permits, payment and other important conditions are prioritised.</p></article>
      <article><span>03</span><h3>Driver stays in control</h3><p>Always check the physical signs and surroundings before leaving your vehicle.</p></article>
    </div>
  </div>
</section>

<section className="p8-download">
  <div className="container p8-download-card">
    <div className="p8-download-copy"><span className="p8-eyebrow">NaviParka for Android</span><h2>Parking rules,<br/>made simple.</h2><p>Scan the evidence. Understand the restriction. Take the next step.</p><PlayStoreBadge/><small>Connect this button to your live Google Play listing when the release is published.</small></div>
    <div className="p8-download-product"><div className="p8-phone"><PhoneMockup kind="onboarding"/></div></div>
  </div>
</section>
</>}
