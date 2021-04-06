import "./Slider.css";
import TinySlider from "tiny-slider-react";
import React from "react";

export default function Slider(props) {
  const sliderRef = React.useRef(null);
  const settings = {
    nav: true,
    mouseDrag: true,
    items: 1,
    controls: false,
    navPosition: "bottom",
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayButtonOutput: false,
  };

  React.useEffect(() => {
    setInterval(() => sliderRef.current.slider.play(), 500);
  }, []);

  const slides = Object.values(props.slides);

  const handlerMouseOver = (e) => {
    e.currentTarget
      .querySelector(".slider-baner")
      .classList.remove("scale-back");
    e.currentTarget.querySelector(".slider-baner").classList.add("scale");
    e.currentTarget.querySelector(".footer-img").classList.add("change-color");
  };

  const handlerMouseLeave = (e) => {
    e.currentTarget.querySelector(".slider-baner").classList.add("scale-back");
    e.currentTarget
      .querySelector(".footer-img")
      .classList.remove("change-color");
  };

  return (
    <TinySlider settings={settings} ref={sliderRef}>
      {slides.map((v, i) => {
        return (
          <div
            key={i}
            className="slider"
            onMouseOver={handlerMouseOver}
            onMouseLeave={handlerMouseLeave}
          >
            {v}
          </div>
        );
      })}
    </TinySlider>
  );
}
