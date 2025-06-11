"use client";

import React from "react";
import { Timeline } from "../ui/Timeline";

export type IFeaturesData = {
  title: string;
  content: React.ReactElement;
};

export const SmartSalonFeatures: IFeaturesData[] = [
  {
    title: "POS Billing & Invoicing",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          SmartSalonBot's POS system is seamlessly integrated with your
          services, bookings, and customer feedback tools. Generate insightful
          reports on sales, products, and service performance. Now accept
          payments and instantly send e-invoices via WhatsApp – all from one
          powerful dashboard.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/13.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Online Appointments & Scheduling",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          Accept walk-ins and online bookings securely with SmartSalonBot’s
          intuitive scheduling system. Get WhatsApp reminders, confirmations,
          and automated follow-ups to minimize no-shows and manage your
          appointments effortlessly via a unified dashboard.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/14.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Digital Catalog Management",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          List and update your salon’s services, products, and offers in
          real-time with SmartSalonBot’s digital catalog. Effortlessly manage
          pricing, availability, and visuals in one place to ensure your
          offerings are always current and attractive.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/15.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "WhatsApp Marketing Campaigns",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          Run personalized marketing campaigns with built-in design tools. Use
          ready-to-edit templates to send festive offers, birthday wishes, or
          loyalty rewards directly via WhatsApp and SMS. Boost client engagement
          with automated, meaningful messages.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/13.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "E-Commerce for Salon Products",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          Sell your products and services directly through your SmartSalonBot
          e-commerce dashboard. List unlimited items, manage promotions, and
          offer seamless checkouts with integrated payment gateways—all from a
          single platform.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/14.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Salon CRM & Client Insights",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          Track customer behavior, preferences, and return visits using
          SmartSalonBot’s CRM. Access actionable reports and send timely
          reminders or greetings to build deeper client relationships. Make
          data-backed decisions to grow your business.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/15.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Membership Management",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          Reward loyalty with customizable membership plans. Easily enroll
          repeat clients and offer exclusive benefits during bookings.
          SmartSalonBot helps foster long-term connections and drives retention
          with built-in membership features.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/13.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Smart Feedback System",
    content: (
      <div>
        <p className="text-neutral-800 mb-8 text-xs font-normal md:text-sm">
          Gather detailed feedback on individual stylists and overall salon
          experiences. Use client reviews to enhance service quality and drive
          strategic improvements. SmartSalonBot turns feedback into a growth
          tool.
        </p>
        <div className="grid place-items-center gap-4">
          <img
            src="../../image/14.jpg"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
];
export function BasicFeatures() {
  return (
    <div className="w-full container overflow-hidden">
      <Timeline data={SmartSalonFeatures} />
    </div>
  );
}
