import React from 'react';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <Grid container style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <img className="avatar" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" alt="profile" />
      </Grid>
      <Grid item xs={12}>
        <h3 className="hero">Full Stack Developer</h3>
      </Grid>
    </Grid>
  );
}

export default Home;