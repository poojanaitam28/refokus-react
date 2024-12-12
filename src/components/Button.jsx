import React from "react";
import { IoReturnDownForward } from "react-icons/io5";

function Button({ title = "Get Started" }) {
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoReturnDownForward />
    </div>
  );
}

export default Button;
