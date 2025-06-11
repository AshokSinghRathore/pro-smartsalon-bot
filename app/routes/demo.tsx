import { Navbar } from "components/common";
import Banner from "components/common/banner";
import { Footer } from "components/common/footer";
import DemoForm from "components/demo/demoForm";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SmartSalonBot - Salon Automation & Management Software" },
    {
      name: "description",
      content:
        "Experience next-gen salon automation. Request a demo to see how SmartSalonBot simplifies appointment booking, staff scheduling, and customer engagement.",
    },
  ];
}

export default function Demo() {
  return (
    <>
      <Navbar />
      <Banner
        title="Request a Demo"
        paragraph="Raise a demo request to discover how SmartSalonBot can streamline your salon operations and enhance client satisfaction."
      />
      <DemoForm />
      <Footer />
    </>
  );
}
