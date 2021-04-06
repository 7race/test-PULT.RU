import React from "react";
import { imagesWidget } from "../data/images/images";

export default function WidgetImage(props) {

  return <div className="imageItem">{imagesWidget[props.widgetLinks]}</div>;
}
