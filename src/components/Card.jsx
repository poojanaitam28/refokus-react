import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover }) {
  return (
    <div className={`bg-zinc-700 p-5 rounded-xl ${width} hover:${hover} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h1>One heading</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading.</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
