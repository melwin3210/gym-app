import React from "react";

const Map = () => {
  return (
    <div>
      <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center text-red-400 animate__animated animate__fadeIn animate__delay-1s">Find Us Here</h2>

        {/* Clickable Map */}
        <a
          href="https://maps.app.goo.gl/ZJojffMRppzzawQv6"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto rounded-md overflow-hidden shadow-md"
          style={{ maxWidth: "400px" }} // Limit the width
        >
          <img
            src="/map.jpg" // Static map image
            alt="Gym Location"
            style={{
              width: "100%", // Ensure the image scales to fit width
              height: "250px", // Set a fixed height
              objectFit: "cover", // Crop and scale image to fit the frame perfectly
              border: 0, // Remove any border
            }}
          />
        </a>
      </section>
    </div>
  );
};

export default Map;
