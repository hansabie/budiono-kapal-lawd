import React from "react";

const EventGallery: React.FC = () => (
  <section className="p-6">
    <h2 className="text-2xl text-secondary px-3 font-bold">
      The latest event's album
    </h2>
    <div className="flex mt-4">
      <img className="w-1/4 p-2" src="/images/pespor.png" alt="Event 1" />
      <img className="w-1/4 p-2" src="/images/joyland.png" alt="Event 2" />
      <img className="w-1/4 p-2" src="/images/wtf.png" alt="Event 3" />
      <img className="w-1/4 p-2" src="/images/synchronize.webp" alt="Event 4" />
    </div>
  </section>
);

export default EventGallery;
