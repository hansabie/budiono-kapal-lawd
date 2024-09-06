import React from "react";
import CreateEvent from "@/components/CreateEventPage/createevent";
import Navbar from "@/components/CreateEventPage/navbarCreateEvent";
import Footer from "@/components/HomePage/footer";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className="mt-12">
        <CreateEvent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
