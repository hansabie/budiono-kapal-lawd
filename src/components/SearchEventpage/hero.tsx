"use client";
import React, { useState, useEffect } from "react";
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

const SearchPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="bg-white min-h-screen mt-24">
      <div>
        <h1 className="text-5xl text-center text-primary font-bold">
          Search Event
        </h1>
      </div>
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap -mx-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 px-6 mb-12 lg:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-secondary mb-4">
                Filter
              </h2>
              <div>
                <label className="block text-secondary">Category</label>
                <select className="w-full mt-2 px-4 py-2 border text-gray-500 rounded-lg focus:outline-none focus:shadow-outline">
                  <option>All</option>
                  <option>Music</option>
                  <option>Dance</option>
                  <option>Mural</option>
                  <option>Theater</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-secondary">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4 px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-secondary">Events</h2>
              <input
                type="text"
                placeholder="Search events"
                className="w-full lg:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="cursor-pointer w-full sm:w-72 p-5 shadow-2xl bg-[#c0dacb] flex flex-col items-center text-primary text-center rounded-lg"
                >
                  <img
                    src={event.image}
                    alt="event"
                    className="rounded-[20%] w-3/5 h-28 lg:w-11/12 sm:w-4/5"
                  />
                  <h3 className="mt-4 mb-2 text-lg font-bold">{event.name}</h3>
                  <p className="mt-2 mb-2 text-sm">{event.description}</p>
                  <p className="mt-2 mb-2 text-sm">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
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

            {/* Recommended Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-secondary">
                Recommended for you
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recommended Event Cards */}
                <div className="bg-[#c0dacb] rounded-lg shadow-md p-6">
                  <img
                    src="/images/wtf.png"
                    alt="Recommended Event"
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      We The Fest
                    </h3>
                    <p className="text-gray-600">19 Jul - 21 Jul 2024</p>
                    <p className="text-gray-600">Rp. 1.499.000</p>
                    <button className="mt-4 w-full bg-primary hover:bg-[#95c0aa] text-white py-2 rounded-lg">
                      Beli Tiket
                    </button>
                  </div>
                </div>
                <div className="bg-[#c0dacb] rounded-lg shadow-md p-6">
                  <img
                    src="/images/freed.png"
                    alt="Recommended Event"
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Freed Ballet
                    </h3>
                    <p className="text-gray-600">20 Oct 2024</p>
                    <p className="text-gray-600">Rp. 299.000</p>
                    <button className="mt-4 w-full bg-primary hover:bg-[#95c0aa] text-white py-2 rounded-lg">
                      Beli Tiket
                    </button>
                  </div>
                </div>
                <div className="bg-[#c0dacb] rounded-lg shadow-md p-6">
                  <img
                    src="/images/mural.png"
                    alt="Recommended Event"
                    className="w-full h-32 sm:h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-secondary">
                      Frokitin
                    </h3>
                    <p className="text-gray-600">6 Jun 2024</p>
                    <p className="text-gray-600">Rp. 299.000</p>
                    <button className="mt-4 w-full bg-primary hover:bg-[#95c0aa] text-white py-2 rounded-lg">
                      Beli Tiket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
