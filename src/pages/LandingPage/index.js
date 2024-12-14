import React, { useEffect } from "react";
import "./landingpage.css";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import WelcomeStatement from "./components/WelcomeStatement";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Solutions from "./components/Solutions";
import AboutUs from "./components/AboutUs";
import Image from "./components/Image";
import ListNow from "../../components/ListNow";

function LandingPage() {
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
    <div className="monserat">
      <Header />
      <Banner />
      <WelcomeStatement />
      <Hero />
      <WhyChooseUs />
      <Solutions />
      <AboutUs />
      <Image />
      <ListNow />
    </div>
  );
}

export default LandingPage;
