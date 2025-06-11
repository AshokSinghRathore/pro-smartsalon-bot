const WhoWeAre = () => {
  return (
    <section className="">
      <div className="grid place-items-center mt-20">
        <h3 className="text-lg font-bold text-cyan-600 uppercase mb-2">
          About us
        </h3>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Who We Are ?
        </h1>
        <div className=" grid lg:grid-cols-2 w-full gap-4 lg:max-w-7xl mx-auto shadow p-8 rounded-xl relative">
          <div className="grid place-items-center col-span-1 rounded-md p-4">
            <div className="grid place-items-center">

              <p className="text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed">
                SmartSalonBot is your ultimate cloud-based software for
                seamlessly managing modern beauty and wellness businesses. From
                effortless online appointment booking and dynamic marketing
                tools to streamlined billing, smart inventory management, and
                insightful sales summaries, SmartSalonBot automates it all. It
                simplifies staff incentives, handles memberships, and offers a
                powerful CRM to keep your client relationships thriving. With
                SmartSalonBot, you get robust features designed to simplify
                operations, boost efficiency, and drive higher profits for your
                salon.
              </p>
            </div>
          </div>

          <div
            className="h-96 mx-auto rounded-md col-span-1 text-center lg:m-0"
          >
            <img
              src="../../prism-sfa/smart-salon-login.jpg"
              alt="prism-sfa login image"
              className="w-full h-full rounded-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
