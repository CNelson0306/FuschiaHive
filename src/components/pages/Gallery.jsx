import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import gsap from "gsap";
import "../../index.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";

//This slider was create by installing npm install gsap/react

const imageArray = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
];

function Gallery() {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageArray.length - 1);
      setRightImage(1);
    } else if (midImage === imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const increment = () => {
    setMidImage((prev) => (prev + 1) % imageArray.length);
    animate("right");
  };

  const decrement = () => {
    setMidImage((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
    animate("left");
  };

  const animate = (direction) => {
    const offset = direction === "right" ? -200 : 200;
    gsap.fromTo(
      ".middleImage",
      { x: offset, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  };

  return (
    <div className="galleryContainer">
      <div className="imageSlider">
        <div className="imageSliderContainer">
          <div className="images">
            <img
              src={imageArray[rightImage]}
              className="rightImage"
              alt="Next preview"
            />
            <img
              src={imageArray[midImage]}
              className="middleImage"
              alt="Current image"
              onClick={() => setIsFullscreen(true)}
              style={{ cursor: "zoom-in" }}
            />
            <img
              src={imageArray[leftImage]}
              className="leftImage"
              alt="Previous preview"
            />
          </div>
        </div>

        <div className="buttons">
          <button className="leftButton" onClick={decrement}>
            <IoIosArrowBack />
          </button>
          <button className="rightButton" onClick={increment}>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="dotsPlace">
          {imageArray.map((_, index) => (
            <div
              key={index}
              className={`dots ${index === midImage ? "active" : "passive"}`}
            ></div>
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className="fullscreenOverlay">
          <button
            className="closeFullscreen"
            onClick={() => setIsFullscreen(false)}
          >
            <IoMdClose size={24} />
          </button>

          <button className="navFullscreen left" onClick={decrement}>
            <IoIosArrowBack size={32} />
          </button>

          <img
            src={imageArray[midImage]}
            alt="Fullscreen view"
            className="fullscreenImage"
          />

          <button className="navFullscreen right" onClick={increment}>
            <IoIosArrowForward size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
