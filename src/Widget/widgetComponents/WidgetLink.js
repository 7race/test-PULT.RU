import React from "react";

export default function Widget(props) {
  const wdgLinksKey = Object.keys(props.widgetLinks); 
  const wdgtLinks = Object.values(props.widgetLinks);
  return wdgtLinks.map((v, i) => {
    return (
      <p key={i} data-item={wdgLinksKey[i]} className="wdgtLinks" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        {v}
      </p>
    );
  });
}