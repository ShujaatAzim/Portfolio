import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const FullStackProjects = props => {

  const { projectType } = props;

  return (
    <div style={{ marginTop: "2rem" }}>
      <Grid container direction="row" justify="space-between">
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

export default FullStackProjects;