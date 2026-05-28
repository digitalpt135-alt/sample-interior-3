import { projects } from "../../data/ projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <span>Our Work</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((item) => (
          <div className="project-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="project-overlay">
              <h3>{item.title}</h3>
              <a href="#contact">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;