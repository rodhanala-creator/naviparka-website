import {PageHero} from "@/components/site";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const cards=[
  {title:"Not in the current release",body:"The current NaviParka app does not provide a live parking map, turn-by-turn directions or nearby parking discovery."},
  {title:"Current focus",body:"Today, NaviParka focuses on scanning parking evidence, explaining restrictions, surfacing payment details and helping drivers track time-limited parking."},
  {title:"Planned for V2",body:"A map experience is part of the next-version roadmap. The exact feature set will be communicated when it is ready to ship."}
];

export default function Page(){return <><PageHero eyebrow="Roadmap" title="Parking map is coming in a later version" body="We want the website to be clear about what NaviParka can do now and what is still being built."><div className="actions"><Link href="/features" className="btn btn-primary">See current features <ArrowRight size={16}/></Link></div></PageHero><section className="section" style={{paddingTop:30}}><div className="container"><div className="pagegrid">{cards.map((c,i)=><article className="card pagecard" key={c.title}><div className="feature-number">{String(i+1).padStart(2,'0')}</div><h2 className="h3" style={{marginTop:30}}>{c.title}</h2><p className="lead" style={{fontSize:16}}>{c.body}</p></article>)}</div></div></section></>}
