import React from 'react';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <div className="homepage">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className="avatar" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" alt="profile" />
        </Grid>
        <Grid item xs={12}>
          <div className="hero">
            <h3>Full Stack Developer</h3>
            <hr />
            <p> React | Ruby on Rails | JavaScript | Ruby | HTML/CSS | NodeJS | RecoilJS </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="banner">
            Icons
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;