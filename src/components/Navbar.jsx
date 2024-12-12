import React from "react";
import Button from "../components/Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto bg-zinc-800 py-6 flex items-center justify-around  border-b-[1px] border-zinc-600">
      <div className="nleft flex items-center">
        <img
          className="w-14 h-12"
          src="https://cdn-icons-png.freepik.com/256/6124/6124987.png?ga=GA1.1.2100011829.1732618920&semt=ais_hybrid"
          alt=""
        />
        <div className="links flex gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.60em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-300"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
