import React from "react";

function Marquee({ imgUrls }) {
  return (
    <div className="flex w-full py-8 gap-20 bg-zinc-800 whitespace-nowrap overflow-hidden">
      {imgUrls.map((url, index) => (
        <img key={index} className="filter brightness-0 invert" src={url} alt="" />
      ))}
      {imgUrls.map((url, index) => (
        <img key={index} className="filter brightness-0 invert" src={url} alt="" />
      ))}
    </div>
  );
}

export default Marquee;
