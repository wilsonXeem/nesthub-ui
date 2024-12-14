import React from "react";
import { useNavigate } from "react-router-dom";

function Solutions() {
  const navigate = useNavigate();
  const solutions = [
    {
      for_who: "For sellers",
      title: "Valuation request",
      content:
        "Looking to sell your home but don’t want to waste time or compromise on price? Haus group specializes in selling properties, finding you the best buyer in no time.",
      button: "Contact Us",
      link: "/contact",
    },
    {
      for_who: "For landlords",
      title: "Rent your property",
      content:
        "Renting out your property shouldn’t be hard. Find the perfect tenant and protect your investment without your property remaining vacant for a long period of time.",
      button: "List your Property",
      link: "/listing/abuja",
    },
  ];
  return (
    <div class="home_solutions">
      <div class="home_solution">
        <h2>We have solutions for you</h2>
        <div class="solutions">
          {solutions.map((solution, i) => (
            <div class="solution" key={i}>
              <h2>{solution.for_who}</h2>
              <p className="large_text slide_in">{solution.title}</p>
              <p style={{ fontSize: "1.4rem" }}>{solution.content}</p>
              <button
                className="trans_button"
                onClick={() => navigate(solution.link)}
              >
                {solution.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
