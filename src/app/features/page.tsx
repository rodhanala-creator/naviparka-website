import {PageHero} from "@/components/site";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const cards=[
  {title:"AI Parking Scanner",body:"Point your camera at a parking sign or road markings. NaviParka identifies the evidence automatically—there is no scan-type toggle to choose first."},
  {title:"Clear Parking Guidance",body:"Turn dense parking rules into a straightforward result with the times, limits, restrictions and important conditions shown in plain English."},
  {title:"Payment Service Links",body:"When payment information is available, NaviParka can show the payment provider, location code and a direct action to open the relevant online payment service."},
  {title:"Smart Parking Timer",body:"When a scan includes a time limit, keep track of the parking session and use move-car reminders before the permitted time runs out."},
  {title:"Scan History",body:"Keep previous parking scans on your device so you can return to earlier results and remember what NaviParka interpreted."},
  {title:"Vehicle Profile",body:"Add the vehicle you use for parking so NaviParka can use relevant vehicle context when a restriction depends on the vehicle."},
  {title:"Blue Badge Mode",body:"Apply Blue Badge context to new scans when the mode is enabled, helping NaviParka present guidance that is more relevant to the driver."},
  {title:"Privacy & Account Controls",body:"Manage scan-history preferences, privacy information, sign-out and account deletion from the app."}
];

export default function Page(){return <><PageHero eyebrow="Product" title="What NaviParka does today" body="The current NaviParka experience is focused on one job: scan parking evidence, understand the rules, and help you take the right next step."><div className="actions"><Link href="/download" className="btn btn-primary">Get NaviParka <ArrowRight size={16}/></Link></div></PageHero><section className="section" style={{paddingTop:30}}><div className="container"><div className="pagegrid">{cards.map((c,i)=><article className="card pagecard" key={c.title}><div className="feature-number">{String(i+1).padStart(2,'0')}</div><h2 className="h3" style={{marginTop:30}}>{c.title}</h2><p className="lead" style={{fontSize:16}}>{c.body}</p></article>)}</div><div className="band" style={{marginTop:40}}><span className="eyebrow">Coming in a later version</span><h2 className="h3">Parking map & nearby discovery</h2><p className="lead" style={{fontSize:16}}>The live parking map is part of the NaviParka roadmap, not the current release. We keep future features clearly separated from what you can use today.</p></div></div></section></>}
