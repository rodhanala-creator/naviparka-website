import {PageHero,PhoneMockup} from "@/components/site";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const cards=[
  {title:"AI parking scan",body:"Scan a parking sign or road markings without choosing a scan type first."},
  {title:"Plain-English UK rules",body:"Understand the important parking restrictions, conditions and time limits more clearly."},
  {title:"Direct payment handoff",body:"See payment-provider details and open the relevant online payment service where available."},
  {title:"Smart timer & reminders",body:"Track time-limited parking and use move-car reminders when a session is active."},
  {title:"Scan history",body:"Keep and revisit previous scans when scan history is enabled."},
  {title:"Vehicle & Blue Badge context",body:"Add your vehicle and enable Blue Badge mode when those details are relevant to your parking situation."}
];

export default function Page(){return <><PageHero eyebrow="Get NaviParka" title="NaviParka for Android" body="Scan parking evidence. Read the rules in plain English. Get the payment or timing information you need before you walk away."><div className="actions"><Link href="/beta" className="btn btn-primary">Get NaviParka <ArrowRight size={16}/></Link></div></PageHero><section className="section" style={{paddingTop:30}}><div className="container"><div className="pagegrid">{cards.map((c,i)=><article className="card pagecard" key={c.title}><div className="feature-number">{String(i+1).padStart(2,'0')}</div><h2 className="h3" style={{marginTop:30}}>{c.title}</h2><p className="lead" style={{fontSize:16}}>{c.body}</p></article>)}</div><div style={{marginTop:50}}><PhoneMockup kind="scanner"/></div></div></section></>}
