"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateEvent: React.FC = () => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    location: "",
    availableSeats: "",
    price: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const {
        name,
        description,
        category,
        date,
        location,
        availableSeats,
        price,
        image,
      } = eventData;

      const parsedDate = new Date(date).toISOString();
      const seats = parseInt(availableSeats, 10);
      const eventPrice = parseFloat(price);

      await axios.post("http://localhost:8000/api/event", {
        name,
        description,
        category,
        date: parsedDate,
        location,
        availableSeats: seats,
        price: eventPrice,
        image,
      });

      // alert("Event created successfully!");
      Swal.fire({
        title: "Success",
        text: "Event created!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl text-center text-primary font-bold mb-6">
          Create an Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Event Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="music">Music</option>
              <option value="dance">Dance</option>
              <option value="mural">Mural</option>
              <option value="theater">Theater</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="availableSeats"
              className="block text-sm font-medium text-gray-700"
            >
              Available Seats
            </label>
            <input
              type="number"
              name="availableSeats"
              id="availableSeats"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.availableSeats}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              id="price"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={eventData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-[#95c0aa]"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
