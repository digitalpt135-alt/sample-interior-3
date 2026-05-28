import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {

  const [scale, setScale] = useState(1);

  useEffect(() => {

    const handleScroll = () => {

      const scrollY = window.scrollY;

      /* SLOW PREMIUM SCROLL EFFECT */

      let newScale = 1 - scrollY / 2600;

      /* MIN SCALE */

      if (newScale < 0.93) {
        newScale = 0.93;
      }

      /* MAX SCALE */

      if (newScale > 1) {
        newScale = 1;
      }

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <section className="hero" id="home">

      {/* BACKGROUND IMAGE */}

      <div
        className="hero-bg"
        style={{
          transform: `scale(${scale})`
        }}
      ></div>

      {/* OVERLAY */}

      <div className="hero-overlay"></div>

      {/* CONTENT */}

      <div className="hero-content">

        <span>Luxury Interior Studio</span>

        <h1>
          Crafting Elegant
          <em>Modern Spaces</em>
        </h1>

        <p>
          Premium interiors designed with timeless aesthetics,
          modern comfort and architectural luxury.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            Explore Projects
          </a>

          <a
            href="#contact"
            className="outline-btn"
          >
            Book Consultation
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;