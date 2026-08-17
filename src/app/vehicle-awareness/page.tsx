import {PageHero} from "@/components/site";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const cards=[
  {title:"Add your vehicle",body:"Save the vehicle you use for parking so relevant vehicle details are available when NaviParka needs context."},
  {title:"Vehicle-aware guidance",body:"Where a restriction depends on the vehicle being driven, saved vehicle information can help NaviParka present more relevant guidance."},
  {title:"Blue Badge mode",body:"Enable Blue Badge mode to apply Blue Badge context to new scans when that is relevant to your parking situation."},
  {title:"You stay in control",body:"Vehicle details and Blue Badge mode provide context; NaviParka still explains the parking evidence it can identify and you should always check the physical signs and conditions."}
];

export default function Page(){return <><PageHero eyebrow="Driver context" title="Make parking guidance more relevant to you" body="The current NaviParka app lets you add your vehicle and enable Blue Badge mode so relevant context can be applied to new scans."><div className="actions"><Link href="/download" className="btn btn-primary">Get NaviParka <ArrowRight size={16}/></Link></div></PageHero><section className="section" style={{paddingTop:30}}><div className="container"><div className="pagegrid">{cards.map((c,i)=><article className="card pagecard" key={c.title}><div className="feature-number">{String(i+1).padStart(2,'0')}</div><h2 className="h3" style={{marginTop:30}}>{c.title}</h2><p className="lead" style={{fontSize:16}}>{c.body}</p></article>)}</div></div></section></>}
