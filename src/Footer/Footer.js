import React from "react";
import { lgFooter } from "./data/images";
import "./Footer.css";
import FooterRight from "./FooterRight/FooterRight";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        {lgFooter.lgPultFooter}
        <div className="telInfo">
          <p className="tel">
            <a href="tel:8(800)555-51-52" target="_blank" rel="noreferrer">
              <span>8</span>(<span>800</span>)<span>555-51-52</span>
            </a>
          </p>
          <p className="telTextFree">звонок по России бесплатный</p>
        </div>
      </div>
      <FooterRight />
    </div>
  );
}
