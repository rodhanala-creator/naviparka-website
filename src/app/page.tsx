import Link from "next/link";
import {ArrowRight,ScanLine,BrainCircuit,CreditCard,Clock3,BellRing,Car,BadgeCheck,History,ShieldCheck,CheckCircle2,ExternalLink,Copy,Camera} from "lucide-react";
import {PhoneMockup,PlayStoreBadge} from "@/components/site";

export default function Home(){return <>
<section className="s7-hero">
  <div className="container s7-hero-grid">
    <div className="s7-hero-copy">
      <span className="s7-kicker">AI-assisted parking guidance for UK drivers</span>
      <h1>Parking rules,<br/><span>without the guesswork.</span></h1>
      <p>Scan a parking sign or road markings. NaviParka explains the important restrictions in plain English and helps you take the next step before you leave your car.</p>
      <div className="s7-download-row"><PlayStoreBadge/><Link href="/how-it-works" className="s7-text-cta">See how it works <ArrowRight size={17}/></Link></div>
      <div className="s7-proof-row"><span><CheckCircle2 size={16}/>Android first</span><span><ShieldCheck size={16}/>Safety-conscious AI</span><span><CreditCard size={16}/>Payment handoff</span></div>
    </div>
    <div className="s7-hero-visual">
      <div className="s7-hero-phone"><PhoneMockup kind="scanner"/></div>
      <div className="s7-float s7-float-left"><ScanLine size={18}/><div><b>Scan once</b><small>Signs or road markings</small></div></div>
      <div className="s7-float s7-float-right"><CreditCard size={18}/><div><b>Payment found</b><small>Open the external service</small></div></div>
    </div>
  </div>
</section>

<section className="s7-outcomes">
  <div className="container s7-outcomes-grid">
    <div className="s7-outcome"><span>01</span><ScanLine size={24}/><h3>Scan</h3><p>Point your camera at parking signs or road markings. No scan-type selector needed.</p></div>
    <div className="s7-outcome"><span>02</span><BrainCircuit size={24}/><h3>Understand</h3><p>Turn visible restrictions, times and conditions into plain-English guidance.</p></div>
    <div className="s7-outcome"><span>03</span><ExternalLink size={24}/><h3>Act</h3><p>Open a payment service, copy a location code or keep track of your parking time.</p></div>
  </div>
</section>

<section className="s7-section s7-product">
  <div className="container s7-product-grid">
    <div className="s7-phone-clean s7-phone-left"><PhoneMockup kind="scanner"/></div>
    <div className="s7-product-copy">
      <span className="s7-kicker">AI parking scanner</span>
      <h2>Point your camera.<br/><span>NaviParka reads what matters.</span></h2>
      <p>The scanner is designed around parking signs and road markings. NaviParka analyses what is visible in the frame so you do not have to tell it what you are scanning first.</p>
      <div className="s7-feature-list"><span><Camera size={18}/>Parking signs</span><span><ScanLine size={18}/>Road markings</span><span><Clock3 size={18}/>Time restrictions</span><span><CreditCard size={18}/>Paid parking</span></div>
      <Link href="/parking-scanner" className="s7-text-cta">Explore the scanner <ArrowRight size={17}/></Link>
    </div>
  </div>
</section>

<section className="s7-section s7-payment">
  <div className="container s7-payment-grid">
    <div className="s7-payment-copy">
      <span className="s7-kicker light">When payment is required</span>
      <h2>From the sign to the payment service.</h2>
      <p>When supported payment details can be identified, NaviParka surfaces the provider and location code and gives you a direct action to open the relevant external payment service.</p>
      <div className="s7-payment-points"><div><CreditCard size={21}/><span><b>Provider shown clearly</b><small>See the payment service in the result.</small></span></div><div><Copy size={21}/><span><b>Location code ready</b><small>Copy the code without re-reading the sign.</small></span></div><div><ExternalLink size={21}/><span><b>Open the service</b><small>Continue payment outside NaviParka.</small></span></div></div>
    </div>
    <div className="s7-payment-visual">
      <div className="s7-phone-clean s7-phone-payment"><PhoneMockup kind="payment"/></div>
      <div className="s7-payment-card"><small>LOCATION CODE</small><strong>686995</strong><span>Ready to copy</span></div>
    </div>
  </div>
</section>

<section className="s7-section s7-context">
  <div className="container s7-context-grid">
    <div className="s7-context-copy">
      <span className="s7-kicker">Driver context</span>
      <h2>Useful details stay with you.</h2>
      <p>Vehicle information, Blue Badge mode, reminders and scan history help NaviParka fit the parking situation around the driver, not just the sign.</p>
      <div className="s7-context-list"><div><Car size={20}/><span><b>Your vehicle</b><small>Keep relevant vehicle information available to new scans.</small></span></div><div><BadgeCheck size={20}/><span><b>Blue Badge mode</b><small>Apply Blue Badge context when relevant.</small></span></div><div><BellRing size={20}/><span><b>Move-car reminders</b><small>Get prompted before your parking time runs out.</small></span></div><div><History size={20}/><span><b>Scan history</b><small>Return to previous parking checks.</small></span></div></div>
    </div>
    <div className="s7-dual-phone">
      <div className="s7-dual-a"><PhoneMockup kind="vehicle"/></div>
      <div className="s7-dual-b"><PhoneMockup kind="settings"/></div>
    </div>
  </div>
</section>

<section className="s7-section s7-trust">
  <div className="container s7-trust-grid">
    <div><span className="s7-kicker light">Responsible by design</span><h2>Helpful AI. Clear limitations.</h2><p>NaviParka is designed to make parking restrictions easier to understand. Physical signage, temporary notices and local conditions still matter.</p><Link href="/safety" className="s7-light-link">Read about safety <ArrowRight size={17}/></Link></div>
    <div className="s7-trust-cards"><article><ShieldCheck size={25}/><h3>Evidence first</h3><p>Guidance is based on the parking evidence visible to the app.</p></article><article><CheckCircle2 size={25}/><h3>Clear next steps</h3><p>Important conditions are surfaced before secondary detail.</p></article><article><Clock3 size={25}/><h3>Time-aware</h3><p>Timers and reminders help with time-limited parking sessions.</p></article><article><Car size={25}/><h3>Driver aware</h3><p>Vehicle and Blue Badge context can matter to a parking decision.</p></article></div>
  </div>
</section>

<section className="s7-download">
  <div className="container s7-download-grid">
    <div className="s7-download-copy"><span className="s7-kicker">NaviParka for Android</span><h2>Understand the sign.<br/>Take the next step.</h2><p>Scan parking evidence, understand restrictions, open payment services and keep track of parking time from one Android app.</p><PlayStoreBadge/><small>Google Play link will point to the live listing when your release is published.</small></div>
    <div className="s7-download-phone"><PhoneMockup kind="onboarding"/></div>
  </div>
</section>
</>}
