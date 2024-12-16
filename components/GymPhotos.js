"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/gym1.jpg", alt: "Gym Image 1" },
  { src: "/gym2.jpg", alt: "Gym Image 2" },
  { src: "/gym3.jpg", alt: "Gym Image 3" },
];

const GymPhotos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Automatically change images every 3 seconds unless paused
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [isPaused]);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">
        Explore Our Gym
      </h2>
      <div
        className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsPaused(true)} // Pause on mouse over
        onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
        onTouchStart={() => setIsPaused(true)} // Pause on touch
        onTouchEnd={() => setIsPaused(false)} // Resume after touch ends
      >
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          width={800}
          height={500}
          className="object-cover w-full h-[300px] transition-opacity duration-500"
          priority
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentImage ? "bg-red-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default GymPhotos;
