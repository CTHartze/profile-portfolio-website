import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ismail Mahomed"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ismail
          <br />
          Mahomed
        </h1>
        <h2>Frontend Engineer</h2>
        <span>
          <a href="https://x.com/caydenhartze" target="_black">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/CTHartze" target="_black">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/cayden-hartze" target="_black">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          Fueled by a passion for creating dynamic and visually appealing
          interfaces, that are responsive and user-friendly.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
