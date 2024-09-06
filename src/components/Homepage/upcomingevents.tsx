import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 bg-white px-4 mt-1 sm:px-10">
      <div className="container mx-auto py-0 sm:py-0 lg:py-0 relative">
        <div className="sm:grid-cols-2 gap-8 min-h-[400px] sm:min-h-[600px] lg:min-h-[400px]">
          {/* text content section */}
          <div className="space-y-5 sm:space-y-7 pl-2 text-third text-left sm:text-left lg:text-left">
            <h1 className="text-4xl sm:text-xl lg:text-3xl font-bold">
              Upcoming Events
            </h1>
          </div>

          {/* event section */}
          <section>
            <div className="flex mt-4 space-x-4">
              <div className="w-1/3 p-4 bg-[#c0dacb] shadow-xl rounded">
                <img
                  src="/images/freed.png"
                  alt="Recommendation 1"
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg text-primary font-bold mt-2">
                  Freed Ballet
                </h3>
                <p className="text-md text-primary mt-2">3 Aug 2024</p>
              </div>
              <div className="w-1/3 p-4 bg-[#c0dacb] shadow-xl rounded">
                <img
                  src="/images/mural.png"
                  alt="Recommendation 2"
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg text-primary font-bold mt-2">
                  Frokitin
                </h3>
                <p className="text-md text-primary mt-2">6 Jun 2024</p>
              </div>
              <div className="w-1/3 p-4 bg-[#c0dacb] shadow-xl rounded">
                <img
                  src="/images/pentas.png"
                  alt="Recommendation 2"
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg text-primary font-bold mt-2">
                  Pentas Seni Sekolah
                </h3>
                <p className="text-md text-primary mt-2">3 Mar 2024</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
