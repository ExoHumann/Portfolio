import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import ParallaxCard from "../../components/parallaxCard/ParallaxCard"; // adjust the import path as needed
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
    const { isDark } = useContext(StyleContext);
    if (!greeting.displayGreeting) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <Fade left duration={1000}>
                        <div className="greeting-text-div">
                            <div>
                                <h1
                                    className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                                >
                                    {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
                                </h1>
                                <p
                                    className={
                                        isDark
                                            ? "dark-mode greeting-text-p"
                                            : "greeting-text-p subTitle"
                                    }
                                >
                                    {greeting.subTitle}
                                </p>
                                <div id="resume" className="empty-div"></div>
                                <SocialMedia />
                                <div className="button-greeting-div">
                                    <Button text="Contact me" href="#contact" />
                                    {greeting.resumeLink && (
                                        <a
                                            href={require("./resume.pdf")}
                                            download="Resume.pdf"
                                            className="download-link-button"
                                        >
                                            <Button text="Download my resume" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <div className="greeting-image-div">
                        <ParallaxCard />
                    </div>
                </div>
            </div>
        </Fade>
    );
}
