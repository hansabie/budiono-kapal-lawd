import React from "react";
import EventDetails from "@/components/EventDetailsPage/eventDetails";
import AboutEvent from "@/components/EventDetailsPage/aboutEvent";
import EventGallery from "@/components/EventDetailsPage/eventGallery";
import SimilarEvents from "@/components/EventDetailsPage/similarEvents";
import Navbar from "@/components/HomePage/navbarHome";
import Footer from "@/components/HomePage/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <EventDetails />
      <AboutEvent />
      <EventGallery />
      <SimilarEvents />
      <Footer />
    </div>
  );
};

export default page;
