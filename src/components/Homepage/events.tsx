"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getAllEvents } from "@/api/apiUrl";

interface Event {
  id: number;
  name: string;
  description: string;
  category: string;
  date: string;
  location: string;
  price: number;
  availableSeats: number;
  image: string;
}

const Hero = () => {
  const [event, setEvent] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="relative z-0 bg-white px-4 mt-32 sm:px-10">
      <div className="container mx-auto py-0 sm:py-0 lg:py-0 relative ">
        <div className=" sm:grid-cols-2 gap-8 min-h-[400px] sm:min-h-[600px]">
          {/* text content section */}
          <div className="space-y-5 sm:space-y-7 text-secondary text-center sm:text-left lg:text-center">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold">
              Events
            </h1>
          </div>

          {/* event section */}
          <div className="flex flex-wrap mt-5 justify-center gap-8">
            {event.map((event) => (
              <div className="w-full sm:w-72 p-5 shadow-lg bg-[#c0dacb] flex flex-col items-center text-primary text-center rounded-lg">
                <img
                  src={event.image}
                  alt="pespor"
                  className="rounded-[20%] w-3/5 h-28 lg:w-11/12 sm:w-4/5"
                />
                <h3 className="mt-4 mb-2 text-lg font-bold">{event.name}</h3>
                <p className="mt-2 mb-2 text-sm">{event.description}</p>
                <p className="mt-2 mb-2 text-sm">{event.date.slice(0, 10)}</p>
                <p className="mt-2 mb-2 text-sm">
                  {formatter.format(event.price)}
                </p>
                <a
                  href={`/event_details/${event.id}`}
                  className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-[#95c0aa]"
                >
                  Beli Tiket!
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
