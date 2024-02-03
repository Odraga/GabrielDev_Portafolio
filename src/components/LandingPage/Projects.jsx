import React from "react";
import { AllProjects } from "../../utils/allprojects";
import "../../css/effects.scss";
import "../../css/projects.css";

const ProjectCard = ({ project }) => {
  const imageStyle = {
    backgroundImage: `url(${project.pictures.principal})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "30rem",
    height: "11.5rem",
    margin: "auto",
  };
  return (
    <div className="col-sm-6 col-md-4 selectProject">
      <div className="text-center">
        <h3 className="color-secondary ">{project.name}</h3>
        <img src={project.pictures.principal} width={"100%"} alt="" />
      </div>
    </div>
  );
};

const Projects = () => {
  const categories = ["Works", "Collaborations", "Own Projects"];
  return (
    <div className="container">
      {categories.map((category, index) => {
        const projectsFilters = AllProjects.filter(
          (item) => item.category === category
        );
        return (
          <div key={index} className="row justify-content-center fw-light">
            <div className="col-12  line-bottom">
              <h2 className="text-shadow-1">{category}</h2>
            </div>
            {projectsFilters.map((item, index) => (
              <ProjectCard project={item} key={index} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
