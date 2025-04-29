import React, { useState } from "react";
import lineBlack from "@/assets/line-black.svg";
import lineWhite from "@/assets/line-white.svg";

const Partner = ({
  num = "5",
  width = "w-860",
  w = "w-159",
  h = "h-96",
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredR, setIsHoveredR] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 获取当前显示的5张图片
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < num; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <div className="relative w-1120 mx-auto mb-80 wow animate__animated animate__fadeInUp">
      <div className="flex items-center justify-between">
        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="z-10 w-56 h-96 pl-20 bg-white border-1 rounded-5 hover:bg-[#FF5C01]"
        >
          <img
            src={isHovered ? lineWhite : lineBlack}
            className="transform rotate-180"
          />
        </button>

        <div className={`${width} flex justify-between`}>
          {getVisibleImages().map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`${w} ${h} overflow-hidden`}
            >
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsHoveredR(true)}
          onMouseLeave={() => setIsHoveredR(false)}
          className="z-10 w-56 h-96 pl-20 bg-white border-1 rounded-5 hover:bg-[#FF5C01]"
        >
          <img src={isHoveredR ? lineWhite : lineBlack} className="" />
        </button>
      </div>
    </div>
  );
};

export default Partner;
