import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  feedback: string;
  client: string;
  title: string;
  img: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  feedback,
  client,
  title,
  img,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img
      src={img}
      alt={client}
      width={50}
      height={50}
      className="rounded-full mx-auto mb-4"
    />
    <p className="text-lg text-gray-600 italic mb-4">"{feedback}"</p>
    <h4 className="text-xl font-semibold text-gray-800">{client}</h4>
    <p className="text-sm text-gray-500">{title}</p>
  </div>
);

const TESTIMONIALS = [
  {
    feedback:
      "SmartSalonBot has transformed how we manage appointments and customer records. The automation tools and reminders help reduce no-shows, and it's incredibly easy to use for our team.",
    client: "Ritika Verma",
    title: "Salon Owner, Blush & Glow",
    img: "https://img.freepik.com/free-photo/portrait-young-beautiful-woman-salon_144627-30826.jpg?w=740",
  },
  {
    feedback:
      "As a stylist, SmartSalonBot lets me focus more on my clients and less on admin work. The mobile updates and real-time schedule access are game-changers for salon professionals.",
    client: "Arjun Mehta",
    title: "Senior Stylist",
    img: "https://img.freepik.com/free-photo/portrait-handsome-hairdresser_144627-26751.jpg?w=740",
  },
  {
    feedback:
      "Since implementing SmartSalonBot, we've seen smoother operations, better team coordination, and improved customer satisfaction. It's tailor-made for Indian salon businesses.",
    client: "Neha Kapoor",
    title: "Manager, StyleHub Salon",
    img: "https://img.freepik.com/free-photo/beauty-portrait-young-woman-with-natural-makeup_144627-22273.jpg?w=740",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="px-10 py-20">
      <div className="container mx-auto lg:max-w-7xl">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-blue-gray-800 mb-2">
            What Clients Say
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl">
            Discover what our valued clients have to say about their experiences
            with our SmartSalonBot. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
