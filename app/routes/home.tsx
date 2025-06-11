import { Navbar } from "components/common/navbar";
import type { Route } from "./+types/home";
import Hero from "components/home/hero";
import VideoIntro from "components/home/video-intro";
import Testimonials from "components/home/testimonials";
import { Faqs } from "components/home";
import { Footer } from "components/common/footer";
import ContactForm from "components/contact/contactForm";
import WhoWeAre from "components/home/who-we-are";
import { BasicFeatures } from "components/home/BasicFeature";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "SmartSalonBot - Salon Automation & Management Automation Software",
    },
    {
      name: "description",
      content:
        "Prism SFA is a powerful field force management software and mobile CRM for field teams, offering field sales automation, medical rep order management, GPS tracking, and real-time analytics for pharmaceutical sales.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <WhoWeAre />
      <BasicFeatures />
      <ContactForm />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
