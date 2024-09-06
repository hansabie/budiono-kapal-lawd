import React from "react";

const SimilarEvents: React.FC = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold text-secondary px-3">Similar Events</h2>
    <div className="flex mt-4">
      <div className="w-1/2 p-2 ">
        <div className="bg-[#c0dacb] p-4 rounded flex-col flex items-center">
          <h3 className="text-center text-primary text-xl font-bold">
            Freed Ballet
          </h3>
          <img className="w-96 p-2" src="/images/freed.png" alt="Event 4" />
          <p className="text-sm font-bold text-center text-primary">
            This event features elegant dance performances by professional
            dancers, providing a captivating experience for ballet enthusiasts.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="bg-[#c0dacb] p-4 rounded flex-col flex items-center">
          <h3 className="text-center text-primary text-xl font-bold">
            Frokitin
          </h3>
          <img className="w-96 p-2" src="/images/mural.png" alt="Event 4" />
          <p className="text-sm font-bold text-center text-primary">
            Experience the "Frokitin" mural event, where artists transform walls
            into vibrant works of art. Join us to celebrate creativity and
            community.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SimilarEvents;
