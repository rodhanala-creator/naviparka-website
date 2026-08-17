import {PageHero} from "@/components/site";
const qs=[
  ['What is NaviParka?','NaviParka is an AI-assisted UK parking assistant designed to make parking signs, road markings and restrictions easier to understand.'],
  ['What can I scan?','Point the camera at a parking sign or road markings. NaviParka is designed to identify the parking evidence in frame automatically.'],
  ['Do I choose whether I’m scanning a sign or road marking?','No. The current scanner does not require a sign-versus-road-marking toggle. NaviParka analyses the evidence shown in the camera view.'],
  ['Does NaviParka guarantee I can legally park?','No. NaviParka provides AI-assisted guidance. Always check local signage, temporary notices and conditions before leaving your vehicle.'],
  ['Can NaviParka help me pay for parking?','Where supported payment information is identified, NaviParka can show the payment provider and location code and give you an action to open the relevant external payment service. NaviParka does not itself process the payment.'],
  ['Does NaviParka have a parking timer?','Yes. When timing applies, NaviParka can help you track an active parking session and use move-car reminders.'],
  ['Can I review previous scans?','Yes, when Keep scan history is enabled, previous scans can be revisited from the app.'],
  ['What is Blue Badge mode?','Blue Badge mode lets NaviParka apply Blue Badge context to new scans where relevant. You should still check the physical signs and local conditions.'],
  ['Does NaviParka have a parking map or directions?','Not in the current release. A live parking map is planned for a later version; the current app is focused on scanning, rule interpretation, payment handoff, timing and history.'],
  ['Where is NaviParka designed to be used?','NaviParka is designed around UK parking rules and parking evidence. Coverage and supported features will continue to develop as the product evolves.']
];
export default function Page(){return <><PageHero eyebrow="Support" title="Frequently asked questions" body="Straight answers about how the current NaviParka app works and what to expect."/><section className="section" style={{paddingTop:0}}><div className="container legal">{qs.map(q=><div className="card pagecard" style={{minHeight:0,marginBottom:14}} key={q[0]}><h2 className="h3">{q[0]}</h2><p>{q[1]}</p></div>)}</div></section></>};
