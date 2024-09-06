"use client";
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { useRouter } from "next/router";

const Categories = () => {
  // const router = useRouter();

  //   const handleClick = () => {
  //     router.push("/search");
  //   };

  return (
    <div className="text-primary mt-3 px-5">
      <div className="flex justify-center items-center py-6 gap-2">
        <h1 className="text-secondary font-bold">Explore</h1>
        <h1>by Categories</h1>
      </div>
      <div className="flex justify-center gap-20">
        <div className="flex flex-col items-center gap-3">
          <div className="hover:bg-secondary cursor-pointer flex justify-center items-center border border-black rounded-[100%] p-6 w-24 h-24">
            <i className="bx bx-music bx-lg"></i>
          </div>
          <h3>Music</h3>
        </div>
        <div className=" flex flex-col items-center gap-3">
          <div className="hover:bg-secondary cursor-pointer flex justify-center items-center border border-black rounded-[100%] p-6 w-24 h-24">
            <i className="bx bxs-universal-access bx-lg"></i>
          </div>
          <h3>Dance</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="hover:bg-secondary cursor-pointer flex justify-center items-center border border-black rounded-[100%] p-6 w-24 h-24">
            <i className="bx bxs-paint bx-lg"></i>
          </div>
          <h3>Mural</h3>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="hover:bg-secondary cursor-pointer flex justify-center items-center border border-black rounded-[100%] p-4 w-24 h-24">
            <i className="bx bxs-happy-alt bx-lg"></i>
          </div>
          <h3>Theater</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
