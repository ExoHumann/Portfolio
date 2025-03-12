import React, { useRef, useEffect } from "react";
import "./ParallaxCard.scss";
import krzys from "../../assets/images/krzys.png";
import backgroundImg from "../../assets/images/background.jpg";

const ParallaxCard = () => {
  const cardRef = useRef(null);
  const range = 40;
  const imageMultiplier = 1.5; // Increase to make the foreground image follow the cursor more

  // Calculate value based on mouse position
  const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let timeout;
    const handleMouseMove = ({ x, y }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);

        // Rotate the card container
        card.style.transform = `rotateX(${yValue}deg) rotateY(${-xValue}deg)`;

        // Move the foreground image with an increased multiplier so it follows your cursor
        const img = card.querySelector(".card__img");
        if (img) {
          img.style.transform = `translateX(${xValue * imageMultiplier}px) translateY(${yValue * imageMultiplier}px)`;
        }

        // Update background position for parallax effect
        const bg = card.querySelector(".card__bg");
        if (bg) {
          bg.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="card parallax-card" ref={cardRef}>
      <div
        className="card__bgg"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <img className="card__img" src={krzys} alt="Parallax Foreground" />
    </div>
  );
};

export default ParallaxCard;
