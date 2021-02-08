import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const RailsProjects = props => {

  const { projectType } = props;
  
  return (
    <div className="project-cards">
      <Grid container direction="row" justify="space-between" >
        <div>
          <Grid item xs={12}>
            <ProjectCard projectType={projectType} />
          </Grid>
        </div>
        <div>
          <Grid item xs={12}>
            <ProjectCard projectType={projectType} />
          </Grid>
        </div>
        <div>
          <Grid item xs={12}>
            <ProjectCard projectType={projectType} />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default RailsProjects;