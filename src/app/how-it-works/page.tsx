import {PageHero,PhoneMockup} from "@/components/site";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const cards=[
  {title:"01 · Scan the parking evidence",body:"Point your camera at a parking sign or road markings. NaviParka identifies what is in frame automatically, so you do not need to select a scan mode first."},
  {title:"02 · NaviParka reads the rules",body:"The app analyses the visible wording, times, restrictions and other parking evidence it can identify from the scan."},
  {title:"03 · Get a straightforward result",body:"NaviParka presents the parking guidance in plain English, including important limits, restrictions and conditions you need to know."},
  {title:"04 · Pay when payment is required",body:"If the evidence includes supported payment information, NaviParka can show the provider and location code and give you a direct action to open the relevant payment service."},
  {title:"05 · Keep track of the session",body:"Use the parking timer and move-car reminders where timing applies, and keep scan history enabled if you want to revisit previous results."}
];

export default function Page(){return <><PageHero eyebrow="How it works" title="From parking sign to useful next step" body="NaviParka is designed to reduce the amount of parking-rule interpretation you have to do at the kerb."><div className="actions"><Link href="/download" className="btn btn-primary">Get NaviParka <ArrowRight size={16}/></Link></div></PageHero><section className="section" style={{paddingTop:30}}><div className="container"><div className="pagegrid">{cards.map((c,i)=><article className="card pagecard" key={c.title}><div className="feature-number">{String(i+1).padStart(2,'0')}</div><h2 className="h3" style={{marginTop:30}}>{c.title}</h2><p className="lead" style={{fontSize:16}}>{c.body}</p></article>)}</div><div style={{marginTop:50}}><PhoneMockup kind="result"/></div></div></section></>}
