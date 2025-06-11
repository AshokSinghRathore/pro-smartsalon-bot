import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./carousel";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gradient px-8">
        <div className="mx-auto grid h-full w-full lg:max-w-7xl grid-cols-1 mt-32 lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1 grid place-content-start my-auto lg:mt-20">
            <h1 className="text-4xl font-bold text-white mb-20">
              Increase your profit by 25 to 30 percent in just two months
            </h1>
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Perfect <br /> Salon{" "}
              <span className="text-yellow-500">Automation</span> &{" "}
              <span className="text-cyan-500">Management</span>
              <br />
              Solution
            </h1>
            <p className="text-lg text-white mb-7 pr-16 xl:pr-28">
              Our app is here to empower you on your salon for guarantee growth,
              anytime and anywhere.
            </p>
            <h6 className="text-lg text-white mb-4">Book a demo now</h6>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="/demo"
                className="flex justify-center items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg"
              >
                Demo
                <FontAwesomeIcon icon={faArrowRightLong} className="w-6 h-6" />
              </a>
            </div>
          </div>
          <Carousel />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-3">
            Salon Automation & Management
          </h3>
          <p className="font-normal text-gray-500">
            Our solution streamlines every aspect of salon operations, helping
            you effortlessly manage daily tasks, automate client follow-ups,
            monitor staff performance, and make informed, data-driven decisions
            to grow your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
