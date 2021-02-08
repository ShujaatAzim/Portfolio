import React, { useState } from 'react';
import ProjectsTabBar from '../Components/ProjectsTabBar';
import FullStackProjects from '../Components/FullStackProjects';
import ReactProjects from '../Components/ReactProjects';
import RailsProjects from '../Components/RailsProjects';
import MiscProjects from '../Components/MiscProjects';

const Projects = () => {

  const [view, setView] = useState("full stack")

  return (
    <div>
      <div>
        <ProjectsTabBar setView={setView} />
      </div>
      <div>
        { view === "react" ? <ReactProjects /> : 
          view === "rails" ? <RailsProjects /> : 
          view === "full stack" ? <FullStackProjects /> : 
          view === "misc" ? <MiscProjects /> :
          null }
      </div>
    </div>
  );
}

export default Projects;