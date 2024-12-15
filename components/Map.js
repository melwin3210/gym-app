import React from 'react'

const Map = () => {
  return (
    <div>
        <section className="mb-12">
   <h2 className="text-2xl font-semibold mb-4 text-center">Find Us Here</h2>

   {/* Clickable Map */}
   <a
     href="https://maps.app.goo.gl/ZJojffMRppzzawQv6"
     target="_blank"
     rel="noopener noreferrer"
     className="block mx-auto rounded-md overflow-hidden shadow-md"
     style={{ maxWidth: "600px" }}
   >
     <iframe
       title="Gym Location"
       src=''
       width="100%"
       height="400"
       style={{ border: 0, pointerEvents: "none" }} // Prevent interaction with the embedded map
       loading="lazy"
     ></iframe>
   </a>
 </section>
      
    </div>
  )
}

export default Map
