import styles from "./ProjectsStyles.module.css";
import portfolio from "../../assets/portfolio.png";
import taskGoal from "../../assets/task-goal.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={portfolio}
          link="https://github.com/CTHartze/profile-portfolio-website"
          h3="Portfolio"
          p="Profile Portfolio Website"
        />
        <ProjectCard
          src={taskGoal}
          link="https://github.com/CTHartze/task-goal"
          h3="Task-Goal"
          p="Todo List App"
        />
      </div>
    </section>
  );
}

export default Projects;
