import React from "react";
import { useNavigate } from "react-router-dom";

function ListNow() {
  const navigate = useNavigate();
  return (
    <div class="list_now">
      <h1 className="slide_in">Live Listing!</h1>
      <div class="list_now_right">
        <p style={{ fontSize: "large" }}>
          Looking to rent a house, click below to find one to your taste.
        </p>
        <div>
          <button
            class="white_button"
            onClick={() => navigate("/live/listing")}
          >
            Live Listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListNow;
