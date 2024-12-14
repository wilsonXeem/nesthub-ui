import React from "react";

function WhyChooseUs() {
  const reasons = [
    {
      title: "Best properties in town",
      content:
        "Explore a handpicked selection of the finest homes and commercial spaces, carefully chosen to meet your lifestyle and investment goals. Your dream property is just a step away.",
    },
    {
      title: "Passion for the work",
      content:
        "Our commitment to excellence drives everything we do, ensuring every client finds their perfect property. We are passionate about making your real estate journey smooth, rewarding, and memorable.",
    },
    {
      title: "Top tier realtors",
      content:
        "Our team of expert realtors combines market knowledge with personalized service to guide you every step of the way. We ensure a seamless experience, turning your property dreams into reality.",
    },
    {
      title: "Personal dedication",
      content:
        "We are committed to understanding your unique needs and delivering tailored solutions. Your satisfaction is our top priority, and we strive to exceed expectations with every interaction.",
    },
  ];

  return (
    <div class="why_choose_us">
      <h2>Why choose us</h2>
      <div class="reasons">
        {reasons.map((reason, i) => (
          <div class="reason" key={i}>
            <p className="large_text slide_in">{reason.title}</p>
            <hr />
            <p style={{ fontSize: "1.3rem", color: "gray" }}>
              {reason.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
