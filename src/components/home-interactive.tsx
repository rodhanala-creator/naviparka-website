"use client";

import { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, CreditCard, Clock3, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PhoneMockup } from "@/components/site";

const resultViews = [
  {
    key: "clear",
    label: "Clear answer",
    title: "See the important rule first.",
    text: "NaviParka highlights the decision, the time restriction and the next action so you do not have to decode the sign line by line.",
    icon: CheckCircle2,
    status: "Allowed now",
    points: ["Mon–Sat 8am–6pm", "Maximum stay 2 hours", "No return within 1 hour"],
  },
  {
    key: "conditional",
    label: "Conditional parking",
    title: "Surface the conditions before you walk away.",
    text: "When parking is allowed only under certain conditions, NaviParka can bring those rules forward in simpler language.",
    icon: AlertTriangle,
    status: "Conditional",
    points: ["Permit holders excepted", "Blue Badge rules may apply", "Check bay markings and local context"],
  },
  {
    key: "timing",
    label: "Payment & timing",
    title: "Move straight to the next step.",
    text: "When payment details are supported, the result can show the provider, the location code and a direct action to continue externally.",
    icon: CreditCard,
    status: "Payment found",
    points: ["Provider shown in result", "Location code ready to copy", "Direct open-payment action"],
  },
] as const;

export function ResultShowcase() {
  const [active, setActive] = useState(0);
  const current = resultViews[active];
  const Icon = current.icon;

  return (
    <div className="s11-showcase">
      <div className="s11-showcase-tabs" role="tablist" aria-label="Parking guidance views">
        {resultViews.map((item, index) => (
          <button
            key={item.key}
            className={`s11-showcase-tab ${index === active ? "is-active" : ""}`}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={index === active}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="s11-showcase-grid">
        <div className="s11-showcase-copy">
          <div className="s11-status-pill"><Icon size={16} /> {current.status}</div>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
          <ul>
            {current.points.map((point) => (
              <li key={point}><CheckCircle2 size={16} /> {point}</li>
            ))}
          </ul>
          <Link href="/#download" className="s11-inline-link">Get NaviParka <ArrowRight size={16} /></Link>
        </div>

        <div className="s11-showcase-visual">
          <div className="s11-visual-panel">
            <div className="s11-ring s11-ring-a" />
            <div className="s11-ring s11-ring-b" />
            <div className="s11-floating s11-float-top"><ShieldCheck size={16} /> Restriction simplified</div>
            <div className="s11-floating s11-float-bottom"><Clock3 size={16} /> Timer support available</div>
            <PhoneMockup kind={active === 2 ? "payment" : "scanner"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const faqItems = [
  {
    q: "What can NaviParka scan right now?",
    a: "The current MVP is designed around parking signs, road markings and related visible parking evidence in the frame.",
  },
  {
    q: "Can NaviParka show payment details?",
    a: "Yes. When supported payment information is recognised, NaviParka can surface the provider, the location code and a direct action to open the external payment service.",
  },
  {
    q: "Does NaviParka already include a parking map?",
    a: "No. The current release focuses on scanning, understanding restrictions, payment support, timers and useful driver context. Map-based parking discovery is planned for a later version.",
  },
  {
    q: "Does the app replace checking the physical sign?",
    a: "No. NaviParka is there to help make the rules easier to understand. Drivers should still verify the physical sign, bay markings and local conditions before leaving the vehicle.",
  },
] as const;

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="s11-faq-list">
      {faqItems.map((item, index) => (
        <article key={item.q} className={`s11-faq-item ${open === index ? "is-open" : ""}`}>
          <button className="s11-faq-trigger" onClick={() => setOpen(open === index ? null : index)}>
            <span>{item.q}</span>
            <span>{open === index ? "−" : "+"}</span>
          </button>
          {open === index && <p className="s11-faq-answer">{item.a}</p>}
        </article>
      ))}
    </div>
  );
}
