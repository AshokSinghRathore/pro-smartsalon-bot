import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

interface FAQ {
  title: string;
  desc: string;
}
const FAQS: FAQ[] = [
  {
    title: "How do I get started with Smart Salon Bot?",
    desc: "Getting started is easy! Simply sign up on our platform, configure your salon services, staff schedules, and you're ready to streamline your operations in just a few minutes.",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, Smart Salon Bot offers a 30-day free trial so you can experience all the features without any upfront cost.",
  },
  {
    title: "How can I upgrade to a paid plan?",
    desc: "To upgrade, log into your Smart Salon Bot dashboard, go to the 'Subscription & Billing' section, and choose the plan that best fits your salon’s needs.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Yes, you can cancel your subscription anytime from the billing settings. Your access will continue until the end of your current billing cycle.",
  },
  {
    title: "Does Smart Salon Bot work on both web and mobile?",
    desc: "Absolutely! Smart Salon Bot is accessible via web and mobile devices so salon owners and staff can manage appointments, clients, and more on the go.",
  },
  {
    title: "What if I need help or run into issues?",
    desc: "Our dedicated support team is available 24/7 via chat and email. You can also access our Help Center for guides, FAQs, and video tutorials.",
  },
];

export const Faqs: React.FC = () => {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">
            Find quick answers to common questions about features, setup, support, and more.
          </h1>
          <p className="text-lg text-gray-500 mx-auto mb-24 lg:w-3/5">
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do.
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div key={title} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="text-blue-500 text-xl"
                />
                <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
              </div>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
