import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a
          href="https://github.com/CTHartze/profile-portfolio-website"
          target="_blank"
        >
          <img className="hover" src={viberr} alt="Viberr logo" />
          <h3>Portfolio</h3>
          <p>Profile Portfolio Website</p>
        </a>
      </div>
    </section>
  );
}

export default Projects;
