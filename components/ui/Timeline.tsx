import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="grid place-content-center place-items-center mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <h3 className="text-lg font-bold text-cyan-600 uppercase mb-2">
          Features
        </h3>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Features Of Smart Salon Bot
        </h1>
        <p className="text-neutral-700 text-sm md:text-base text-center">
          SmartSalonBot empowers your salon with the mordern tech to stay ahead
          of the curve by automating routine tasks and optimizing salon
          management strategies.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pb-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3">
                <div className="bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 h-4 w-4 rounded-full border p-2" />
              </div>
              <h3 className="text-neutral-500 dark:text-neutral-500 hidden text-xl font-bold md:block md:pl-20 md:text-5xl ">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="text-neutral-500 dark:text-neutral-500 mb-4 block text-left text-2xl font-bold md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="via-neutral-200 dark:via-neutral-700 absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]  md:left-8 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="from-blue-600 via-pink-700 absolute  inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[0%] via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
