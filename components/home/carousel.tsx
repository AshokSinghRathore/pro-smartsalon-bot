import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const slides = [
  {
    title: "Slide 1",
    description: "This is the first slide of the carousel.",
    image: "../image/1.png",
  },
  {
    title: "Slide 2",
    description: "This is the second slide of the carousel.",
    image: "../image/2.png",
  },
  {
    title: "Slide 3",
    description: "This is the third slide of the carousel.",
    image: "../image/3.png",
  },
];

const Carousel: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    let index = 0;

    const cycleSlides = async () => {
      while (true) {
        await controls.start({
          x: `-${index * 100}%`,
          transition: { duration: 0.8 },
        });
        index = (index + 1) % slides.length;
        await new Promise((res) => setTimeout(res, 3000));
      }
    };

    cycleSlides();
  }, [controls]);

  return (
    <div className="w-full h-96 mx-auto p-6 lg:px-22 lg:pb-22">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden rounded-lg w-full hidden lg:block">
        <motion.div
          className="flex w-full"
          animate={controls}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item flex-shrink-0 w-full ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
