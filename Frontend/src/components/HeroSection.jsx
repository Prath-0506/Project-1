import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">FOOD</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./Roti Canai & saos Kari.jpeg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">CULTURE</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="LOGOOO.jpeg" alt="logo"  style={{ width: '160px', height: '160px', marginLeft: '40px' }} />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="MAHRAJA _ Indian Food.jpeg" alt="hero" />
          </div>
          <h1 className="title dishes_title">LOVE</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
