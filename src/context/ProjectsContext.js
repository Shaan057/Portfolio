import React from "react";
import projects from "../assets/ProjectsList";

const ProjectsContext = React.createContext({
    projectsList: [],
    addProjectsList: () => { }
})

export default ProjectsContext