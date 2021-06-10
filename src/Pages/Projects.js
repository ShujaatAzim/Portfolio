import React, { useState } from 'react';
import ProjectsTabBar from '../Components/ProjectsTabBar';
import ProjectCard from '../Components/ProjectCard';
import { Grid } from '@material-ui/core';
import { projectsData } from '../Supplemental/ProjectsData';

const Projects = () => {

  const [view, setView] = useState("fullstack")

  return (
    <div>
      <div>
        <ProjectsTabBar setView={setView} />
      </div>
      <div className="project-cards">
        <Grid container direction="row" justify="space-around" >
          {projectsData[view].map(project => {
            return (
              <div key={project.title}>
                <Grid item xs={12}> 
                  <ProjectCard project={project} />
                </Grid>
              </div>
            )})}
        </Grid>
      </div>
    </div>
  );
}

export default Projects;