import React from "react";

interface TicketProps {
  image: string;
  title: string;
  date: string;
  time: string;
}

const Ticket: React.FC<TicketProps> = ({ image, title, date, time }) => {
  return (
    <div className="flex p-4 border-b mt-20">
      <img src={image} alt={title} className="w-24 h-24 rounded" />
      <div className="ml-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{date}</p>
        <p className="text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default Ticket;
