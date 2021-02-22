import React, { useState } from 'react';
import ProjectsTabBar from '../Components/ProjectsTabBar';
import { Grid } from '@material-ui/core';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {

  const [view, setView] = useState("full stack")

  return (
    <div style={{ height: "85vh" }}>
      <div>
        <ProjectsTabBar setView={setView} />
      </div>
      <div className="project-cards">
        <Grid container direction="row" justify="space-around" >
          <div>
            <Grid item xs={12}>
              <ProjectCard projectType={view} />
            </Grid>
          </div>
          <div>
            <Grid item xs={12}>
              <ProjectCard projectType={view} />
            </Grid>
          </div>
          <div>
            <Grid item xs={12}>
              <ProjectCard projectType={view} />
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default Projects;