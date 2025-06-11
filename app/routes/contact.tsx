import { Navbar } from "components/common";
import { Footer } from "components/common/footer";
import Banner from "components/common/banner";
import ContactForm from "components/contact/contactForm";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Contact Us - SmartSalonBot | Salon Automation & Management Automation Software",
    },
    {
      name: "description",
      content:
        "Get in touch with SmartSalonBot for support, inquiries, or demos of our salon management software. Automate appointments, manage staff and inventory, and streamline your salon operations effortlessly.",
    },
  ];
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        title="Contact Us"
        paragraph="Have questions about our salon management software? Reach out to us for assistance with appointment scheduling, staff and inventory management, client engagement, and salon automation solutions."
      />
      <ContactForm />
      <Footer />
    </>
  );
}
