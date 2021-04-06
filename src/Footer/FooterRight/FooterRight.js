import React from "react";
import { lgFooter } from "../data/images";

export default function FooterRight() {
    const handlerClick = (e) => {
        if(e.target.localName !== "span") return;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  return (
    <div className="footer-right" onClick={handlerClick}>
      <div className="links">
        <div>
          <p>
            <span>акустика</span>
          </p>
          <p>
            <span>hi-fi</span>
          </p>
          <p>
            <span>винил</span>
          </p>
          <p>
            <span>наушники</span>
          </p>
          <p>
            <span>телевизоры</span>
          </p>
          <p>
            <span>проекторы</span>
          </p>
        </div>
        <div>
          <p>
            <span>распродажа</span>
          </p>
          <p>
            <span>outlet</span>
          </p>
          <p>
            <span>акции</span>
          </p>
          <p>
            <span>бонусы и скидки</span>
          </p>
          <p>
            <span>рассрочка</span>
          </p>
        </div>
        <div className="right-column">
          <p>
            <span>о компании {lgFooter.lgIconText}</span>
          </p>
          <p>
            <span>контакты {lgFooter.lgIconText}</span>
          </p>
          <p>
            <span>салоны {lgFooter.lgIconText}</span>
          </p>
          <p>
            <span>новости {lgFooter.lgIconText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
