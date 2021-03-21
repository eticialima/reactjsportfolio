import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Typical from "react-typical";
import { Animated } from "react-animated-css";

function HeroSection() {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>I'm Letícia Lima</h1>
        <Typical
          steps={["Gostaria de conhecer", 1000, "meus projetos ?", 500]}
          loop={Infinity}
          wrapper="p"
        />
        <div className="hero-btns">
          <a href="/portfolio">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              PORTFÓLIO
            </Button>
          </a>
          <a href="/sobrem">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              SOBRE MIM
            </Button>
          </a>
        </div>
      </div>
    </Animated>
  );
}

export default HeroSection;
