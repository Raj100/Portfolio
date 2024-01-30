import React from "react";
import "./ProjectBox.css";
import { Link } from "react-router-dom";

const ProjectBox = ({ProjectName,ProjectImg,ProjectLink}) => {
  return (
    <>
    <Link to={ProjectLink} >
    <div className="Project-Box">
      <img src={ProjectImg} alt={ProjectName} />
      <h3>{ProjectName}</h3>
    </div>
    </Link>
    </>
  );
};

export default ProjectBox;
