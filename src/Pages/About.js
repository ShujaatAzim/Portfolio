import React from 'react';
import { Grid } from '@material-ui/core';

const About = () => {
  return (
    <div className="about-page">
      <Grid container>
        <Grid item xs={12}>
          <h1>About Page</h1>
          <p>
            This is going to be about me, my story, and what I plan to do.
          </p>
          <p>
            0) Before software dev
            1) How I got started in dev
            2) Where I am now
            3) Where I want to be
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;