import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";

function Hero() {
  return (
    <section id="hero">
      <div>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Ismail Mahomed"
        />
      </div>
    </section>
  );
}

export default Hero;
