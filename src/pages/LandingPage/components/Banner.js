import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate()

  return (
    <div class="banner_container">
      <div class="banner">
        <h1 className="roboto-black">Find your perfect home</h1>
        <p>Your perfect home is our priority, make it your priority as well</p>
        <div class="banner_buttons">
          <button className="white_button" onClick={() => navigate("/contact")}>
            Talk To Agent
          </button>
          <button className="trans_button" onClick={() => navigate("/contact")}>
            See Our Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
