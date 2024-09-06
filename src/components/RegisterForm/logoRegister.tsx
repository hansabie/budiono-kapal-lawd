import { useRouter } from "next/navigation";
import React from "react";

const logoRegister = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex w-1/4 h-full  items-center justify-center text-center pt-10">
      <img
        onClick={handleClick}
        src="/images/logo.png"
        alt="logo"
        className="w-9/12 cursor-pointer items-center justify-center text-center"
      />
    </div>
  );
};

export default logoRegister;
