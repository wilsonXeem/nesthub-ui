import React, { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".slide_in");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
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
    <div className="contact_us">
      <p className="larger_text slide_in">Contact Us</p>
      <div className="contact_us_right">
        <h2>Office</h2>
        <p style={{ fontSize: "large" }}>40 Nile Strt Maitama Abuja</p>
        <h2>Phone</h2>
        <p style={{ fontSize: "large" }}>+2349033782254</p>
        <p style={{ fontSize: "large" }}>+2349033782254</p>
        <h2>Email</h2>
        <p style={{ fontSize: "large" }}>iwindstream@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactUs;
