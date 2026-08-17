import {PageHero} from "@/components/site";
import Link from "next/link";

const cats=[
  ['Getting started','Set up NaviParka, sign in and understand the basics.'],
  ['Scanning parking evidence','Learn how to capture a useful parking sign or road-marking scan.'],
  ['Understanding results','Read parking guidance, restrictions and conditions.'],
  ['Payments','Understand payment providers, location codes and opening an external payment service.'],
  ['Timers & reminders','Use an active parking timer and move-car reminders.'],
  ['Vehicle & Blue Badge','Manage vehicle information and Blue Badge mode.'],
  ['Scan history','Control whether previous scans are kept on your device.'],
  ['Account & privacy','Manage privacy information, sign-out and account deletion.']
];
export default function Page(){return <><PageHero eyebrow="NaviParka Support" title="How can we help?" body="Find answers about scanning, results, payment links, timers, vehicle context, Blue Badge mode, privacy and your account."/><section className="section" style={{paddingTop:0}}><div className="container"><input className="support-search" placeholder="Search NaviParka support…" aria-label="Search support"/><div className="pagegrid" style={{marginTop:28}}>{cats.map(c=><div className="card pagecard" key={c[0]}><h2 className="h3">{c[0]}</h2><p className="lead" style={{fontSize:16}}>{c[1]}</p></div>)}</div><div className="band" style={{marginTop:35}}><h2 className="h3">Still need help?</h2><p className="lead" style={{fontSize:16}}>Send NaviParka Support a message and include any useful details about the issue.</p><Link href="/support/contact" className="btn btn-primary">Contact support</Link></div></div></section></>};
