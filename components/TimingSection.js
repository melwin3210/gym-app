import React from "react";

const TimingSection = () => {
  const timings = [
    { time: "6:00 AM - 9:00 AM", description: "Mixed" },
    { time: "9:00 AM - 2:00 PM", description: "Ladies Only" },
    { time: "5:00 PM - 9:00 PM", description: "Mixed" },
  ];

  return (
    <section className="mb-12 text-white">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">
          Gym Timings
        </h2>

        {/* Timing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {timings.map((slot, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
            >
              <h3 className="text-2xl font-semibold text-red-400 mb-2">
                {slot.time}
              </h3>
              <p className="text-lg font-light">{slot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
