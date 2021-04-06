import React from "react";
import WidgetLink from "./widgetComponents/WidgetLink";
import WidgetImage from "./widgetComponents/WidgetImage";
import { widgetLinks } from "./data/widgetLinks/widgetLinks";
import "./Widget.css";

export default function Widget() {
  let [currentItem, setCurrentItem] = React.useState("micro");

  const handlerMouseOver = (e) => {
    if (e.target.localName !== "a") return;
    const wdgtLinks = document.querySelectorAll(".wdgtLinks a");
    currentItem = setCurrentItem(e.currentTarget.dataset.item);

    wdgtLinks.forEach((v) => {
      v.classList.remove("onMouseOver");
    });

    e.currentTarget.querySelector("a").classList.add("onMouseOver");
  };

  React.useEffect(() => {
    document.querySelectorAll(".wdgtLinks a")[0].classList.add("onMouseOver");
  }, []);

  return (
    <div className="widget">
      <div className="wrapperWidgetLinks">
        <WidgetLink widgetLinks={widgetLinks} onMouseOver={handlerMouseOver} />
      </div>
      <WidgetImage widgetLinks={currentItem} />
    </div>
  );
}
