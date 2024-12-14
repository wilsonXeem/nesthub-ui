import React from "react";
import Hero1 from "../../../images/hero1.jpg";
import Hero2 from "../../../images/hero2.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const hero_items = [
    { item: "for sale", background: Hero1, link: "/contact" },
    { item: "for rent", background: Hero2, link: "/contact" },
  ];
  return (
    <div class="hero">
      {hero_items.map((item, i) => (
        <div className="hero_item" key={i}>
          <div className="hero_item_img">
            <img src={item.background} alt="" />
          </div>
          <button className="black_button" onClick={() => navigate(item.link)}>
            {item.item}
          </button>
        </div>
      ))}
    </div>
  );
}
export default Hero;
