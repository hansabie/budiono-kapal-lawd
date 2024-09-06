import React from "react";

const checkoutPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="max-w-sm p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between gap-20 mb-2">
          <span>Event 1</span>
          <span>Rp.1000 /Ticket</span>
        </div>

        <div className="flex justify-between mb-4">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg text-purple-600">${"total"}</span>
        </div>

        <button className="w-full py-2 bg-purple-600 text-white rounded-lg">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default checkoutPage;
