import React from "react";
import "./styles.css" // Keep your existing CSS animations here

import ImageStart from "../../assets/images/success_start.png";
import ImageThree from "../../assets/images/success_3.png";
import ImageLast from "../../assets/images/success_1.png";

const AnimatedImages = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative flex justify-center items-center">
        {/* Image 1 */}
        <img
          src={ImageStart}
          className="absolute w-36 h-36 opacity-0 animate-animate"
          alt="Start"
        />

        {/* Image 2 */}
        <img
          src={ImageThree}
          className="absolute w-36 h-36 opacity-0 animate-fade-in-out delay-[1.1s]"
          alt="Popup"
        />

        {/* Image 3 */}
        <img
          src={ImageLast}
          className="absolute w-36 h-36 opacity-0 animate-animates delay-[1.2s]"
          alt="Check"
        />
      </div>
    </div>
  );
};

export default AnimatedImages;
