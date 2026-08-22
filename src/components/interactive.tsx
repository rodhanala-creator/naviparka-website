"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {Menu,X} from "lucide-react";

export function MobileMenu(){
  const [open,setOpen]=useState(false);
  return <div className="mobile-menu">
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    {open&&<div className="mobile-drawer">
      <Link onClick={()=>setOpen(false)} href="/features">Product</Link>
      <Link onClick={()=>setOpen(false)} href="/how-it-works">How it works</Link>
      <Link onClick={()=>setOpen(false)} href="/parking-scanner">AI Parking Scanner</Link>
      <Link onClick={()=>setOpen(false)} href="/vehicle-awareness">Driver Context</Link>
      <Link onClick={()=>setOpen(false)} href="/features">Payment & Timer</Link>
      <Link onClick={()=>setOpen(false)} href="/safety">Safety</Link>
      <Link onClick={()=>setOpen(false)} href="/support">Support</Link>
      <Link onClick={()=>setOpen(false)} href="/download" className="btn btn-primary">Get NaviParka</Link>
    </div>}
  </div>
}

const CONSENT_KEY="naviparka-cookie-consent";

export function CookieConsent(){
  const [ready,setReady]=useState(false);
  const [show,setShow]=useState(false);
  const [manage,setManage]=useState(false);
  const [analytics,setAnalytics]=useState(false);

  useEffect(()=>{
    const stored=window.localStorage.getItem(CONSENT_KEY);
    if(stored){
      setAnalytics(stored==="analytics");
      setShow(false);
    }else{
      setShow(true);
    }
    setReady(true);
  },[]);

  const save=(value:"analytics"|"essential")=>{
    window.localStorage.setItem(CONSENT_KEY,value);
    setAnalytics(value==="analytics");
    setShow(false);
  };

  if(!ready||!show)return null;
  return <div className="cookie-wrap" role="dialog" aria-label="Cookie preferences">
    <div className="cookie card">
      {!manage?<>
        <div className="cookie-copy"><b>Your privacy matters</b><p>Essential technologies keep NaviParka working. Optional analytics can help us understand how the website is used.</p></div>
        <div className="cookie-actions">
          <button className="btn btn-primary" onClick={()=>save("analytics")}>Accept analytics</button>
          <button className="btn btn-secondary" onClick={()=>save("essential")}>Essential only</button>
          <button className="cookie-manage" onClick={()=>setManage(true)}>Manage</button>
        </div>
      </>:<>
        <div className="cookie-copy"><b>Cookie preferences</b>
          <div className="preference-row"><span><strong>Essential</strong><small>Required for the website to operate.</small></span><b>Always on</b></div>
          <label className="preference-row"><span><strong>Analytics</strong><small>Help us understand website usage.</small></span><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/></label>
        </div>
        <div className="cookie-actions">
          <button className="btn btn-primary" onClick={()=>save(analytics?"analytics":"essential")}>Save preferences</button>
          <button className="cookie-manage" onClick={()=>setManage(false)}>Back</button>
        </div>
      </>}
    </div>
  </div>
}
