import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const VideoIntro: React.FC = () => {
  return (
    <div className="p-8">
      <h3 className="text-lg font-bold text-cyan-600 uppercase mb-2 text-center">
        Empowering Salons, On Every Step
      </h3>
    <div className="p-8 grid lg:grid-cols-2 gap-4">
      <div className="w-full lg:max-w-7xl container px-5 overflow-hidden rounded-xl relative mx-auto mt-10 max-w-6xl">
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <img
          width={768}
          height={400}
          src="../image/Background.jpg"
          className="w-full object-cover scale-110 rounded-xl h-full"
          alt="Video Background"
        />
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
          <a href="https://youtube.com/shorts/ImH8RHN3828?si=iDVuMXLAV9JoHc8-" target="_blank" className="text-white bg-transparent rounded-full p-4">
            <FontAwesomeIcon
              icon={faPlay}
              className="h-6 w-6 bg-red-600 py-4 px-3 rounded-full"
            />
          </a>
        </div>
      </div>
      <div className="flex-col-center lg:px-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Experience the power of Salon Automaton
        </h1>
        <p>
          Discover how SmartSalonBot, cutting-edge salon automation & management
          system software can revolutionize your business by automating daily
          operations, reducing administrative workload, and enhancing customer
          experiences.
        </p>
      </div>
    </div>
    </div>
  );
};

export default VideoIntro;
