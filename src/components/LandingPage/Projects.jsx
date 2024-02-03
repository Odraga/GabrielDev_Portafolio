import React from "react";
import { AllProjects } from "../../utils/allprojects";

const ProjectCard = ({ item }) => {
  return <div className="col-3">{item.name}</div>;
};

const Projects = () => {
  const categories = ["Works", "Collaborations", "My Works"];
  return (
    <div className="container">
      {categories.map((category, index) => {
        const projectsFilters = AllProjects.filter(
          (item) => item.category === category
        );
        return (
          <div key={index} className="row">
            <div className="col-12">
              <h2>{category}</h2>
            </div>
            {projectsFilters.map((item, index) => (
              <ProjectCard item={item} key={index} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
