import "./App.css";
import React from "react";
import Header from "./Header/Header"
import Slider from "./Slider/Slider";
import Widget from "./Widget/Widget";
import Footer from "./Footer/Footer";

import { slides1, slides2 } from "./Slider/data/Slide/slide";

function App() {
  return (
    <>
      <Header />
      <div className="sliders">
        <Slider slides={slides1} />
        <Slider slides={slides2} />
      </div>
      <Widget />
      <Footer />
      <div style={{fontSize: "14px"}}>2021 © / PULT.RU / ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
    </>
  );
}

export default App;
