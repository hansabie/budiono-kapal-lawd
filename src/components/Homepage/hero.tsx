import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-white px-6 mt-10 md:px-10 md:mt-12 lg:mt-0">
      <div className="container mx-auto py-16 sm:py-0 lg:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center min-h-[400px] sm:min-h-[600px] lg:min-h-[700px]">
          {/* Text content section */}
          <div className="space-y-7 text-secondary order-2 sm:order-1 px-4 sm:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center sm:text-left">
              Welcome to Culture Sphere!
            </h1>
            <h2 className="text-xl text-third sm:text-2xl lg:text-3xl font-semibold text-center sm:text-left">
              Discover the Best Art Events & Music Performance.
            </h2>
            <input
              className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 rounded-full focus:outline-none bg-zinc-100 text-black"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>

          {/* Image section */}
          <div className="relative z-30 order-1 sm:order-2">
            <img
              src="/images/hero.webp"
              alt="hero"
              className="shadow-2xl rounded-md w-96 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
