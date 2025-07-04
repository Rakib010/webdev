import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImpactStories = () => {
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then((data) => setItems(data));

    // Initialize AOS animations
    AOS.init({
     /*  duration: 1000,  */
      easing: "ease-in-out", 
      /* once: true,  */
    });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-6 rounded-lg">
      <h2
        className="text-3xl font-bold text-gray-800 text-center mb-8"
        data-aos="fade-down"
      >
        Real Stories, Real Impact
      </h2>

      {/* Stories Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            data-aos="fade-up" 
            data-aos-delay={index * 100} 
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            />
            <h3
              className="text-xl font-semibold text-gray-800 mb-2"
              data-aos="fade-right"
              data-aos-delay={index * 150}
            >
              {item.name}
            </h3>
            <p className="text-gray-700" data-aos="fade-left">
              {item.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
