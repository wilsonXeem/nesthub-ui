import React, { useEffect } from "react";
import Building from "../../../images/building.jpeg";

function Image() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".zoom_in");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active"); // Optional: Reset when scrolled out
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div class="home_image">
      <div class="home_img slide_in">
        <img src={Building} alt="" />
      </div>
      <div>
        <h1 className="zoom_in">Contact Us Now To Buy or Sell Properties</h1>
      </div>
    </div>
  );
}

export default Image;
