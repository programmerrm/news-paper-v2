"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import slide1 from "../../assets/image/national-2.jpg";
import slide2 from "../../assets/image/national-image-led.png";
import slide3 from "../../assets/image/national-image.jpg";

export default function SmoothSlider() {
  const images = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // Parent wrapper
    <div className="relative w-full max-w-211.5 mx-auto sm:pb-5">

      {/* Image wrapper */}
      <div className="relative w-full h-60 sm:h-80 md:h-116 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`slide-${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              current === index ? "bg-red" : "bg-[#FDCBCC]"
            }`}
          />
        ))}
      </div>

    </div>
  );
}