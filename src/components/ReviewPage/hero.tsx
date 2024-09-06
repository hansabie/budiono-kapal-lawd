"use client";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState("");

  const handleRatingClick = (index: number) => {
    setRating(index);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/api/review", {
        rating,
        selectedTags,
        reviewText,
      });

      Swal.fire({
        title: "Success",
        text: "Thanks for the review!",
        icon: "success",
      }).then(() => {
        window.location.href = "/login";
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl bg-white p-6 mt-16 rounded-lg shadow-md">
      <h1 className="text-primary pb-2 text-5xl text-center font-bold">
        Rate an Event
      </h1>
      <h2 className="text-xl text-gray-500 text-center mt-4 font-bold mb-2">
        How was the event?
      </h2>
      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            onClick={() => handleRatingClick(i + 1)}
            className={`cursor-pointer text-2xl ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-xl text-gray-500 text-center mb-5">
          What do you like the most?
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "Venue & Location",
            "Food & Beverages",
            "Guest Stars",
            "Artists Performance",
            "Environment",
            "Event Duration & Schedule",
            "Event Atmosphere",
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-4 py-2 rounded-full border ${
                selectedTags.includes(tag)
                  ? "bg-secondary text-white"
                  : "bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-xl text-gray-500 text-center py-4">
          Your thoughts about the event?
        </h3>
        <textarea
          className="w-full p-2 border rounded-lg"
          placeholder="Tell others what you like (or didn't like) about the event"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <button
        className="mt-4 px-4 py-2 bg-primary hover:bg-[#95c0aa] text-white rounded-xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
