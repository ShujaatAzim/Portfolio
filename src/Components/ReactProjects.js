import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const ReactProjects = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Grid container direction="row" justify="space-between">
        <div>
          <Grid item xs={12}>
            <ProjectCard />
          </Grid>
        </div>
        <div>
          <Grid item xs={12}>
            <ProjectCard />
          </Grid>
        </div>
        <div>
          <Grid item xs={12}>
            <ProjectCard />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default ReactProjects;