import React, { useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";


function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8MHwwfHx8MA%3D%3D",
      top: "50%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1663937576055-a1d89f3895ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8MHwwfHx8MA%3D%3D",
      top: "56%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664640458907-7545e1a9d215?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGFydHxlbnwwfDB8MHx8fDA%3D",
      top: "49%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1656645197620-934f2abed3c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhcnR8ZW58MHwwfDB8fHww",
      top: "51%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxhcnR8ZW58MHwwfDB8fHww",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1490186969638-fe0c8aea80bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxhcnR8ZW58MHwwfDB8fHww",
      top: "55%",
      left: "52%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((data) => {
      const progress = Math.min(Math.max(data, 0), 1);
      const step = Math.floor(progress * 100);

      function imagesShow(arr) {
        setImages((prev) =>
          prev.map((item, index) =>
            arr.includes(index) ? { ...item, isActive: true } : { ...item, isActive: false }
          )
        );
      }

    switch (step) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3, 4, 5, 6]);
        break;
      default:
        imagesShow([]);
        break;
    }
  });
},[scrollYProgress]);

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl flex justify-center items-center mx-auto text-center ">
        <h1 className="text-[30vw] leading-none font-medium font-satoshi  select-none tracking-normal">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((elem, index) => {
            return (
              <img key={index}
                className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
