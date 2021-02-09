import React, { useState } from 'react';
import ProjectsTabBar from '../Components/ProjectsTabBar';
import FullStackProjects from '../Components/FullStackProjects';
import ReactProjects from '../Components/ReactProjects';
import RailsProjects from '../Components/RailsProjects';
import MiscProjects from '../Components/MiscProjects';

const Projects = () => {

  const [view, setView] = useState("full stack")

  return (
    <div style={{ height: "80vh" }}>
      <div>
        <ProjectsTabBar setView={setView} />
      </div>
      <div>
        { view === "react" ? <ReactProjects projectType={view} /> : 
          view === "rails" ? <RailsProjects projectType={view} /> : 
          view === "full stack" ? <FullStackProjects projectType={view} /> : 
          view === "misc" ? <MiscProjects projectType={view} /> :
          null }
      </div>
    </div>
  );
}

export default Projects;