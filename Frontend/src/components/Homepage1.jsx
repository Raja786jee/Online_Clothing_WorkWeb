import React, { useState, useEffect } from "react";

const images = [
  "/images/image18.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const HomePage1 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .background-slider {
            height: 80vh;
            max-height: 80vh;
            background-size: cover;
            background-position: center;
            transition: background-image 1s ease-in-out;
            overflow: hidden;
          }
        `}
      </style>

      {/* Background Image Section */}
      <div
        className="background-slider"
        style={{ backgroundImage: `url('${images[currentImage]}')` }}
      ></div>
    </div>
  );
};

export default HomePage1;
