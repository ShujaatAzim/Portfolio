import React from 'react';
import { Grid } from '@material-ui/core';

const About = () => {
  return (
    <div className="about-page">
      <Grid container>
        <Grid item xs={12}>
          <h1>About Page (in progress!)</h1>
          <h3>Will be using the projects data file.</h3>
          <p>
            This is going to be about me, my story, and what I plan to do.
          </p>
          <p>
            0) Before software dev
            1) How I got started in dev
            2) Where I am now
            3) Where I want to be
            4) Other than dev, like hobbies and travel
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;