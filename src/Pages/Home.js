import React from 'react';
import { Grid } from '@material-ui/core';
import { FaDev, FaFreeCodeCamp, FaGithubSquare } from 'react-icons/fa'

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
            <p> ReactJS || Ruby on Rails || JavaScript || Ruby || HTML/CSS || Redux || Jest || NodeJS || RecoilJS </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="icons">
            <a href="https://github.com/ShujaatAzim" target="_blank" rel="noreferrer"><FaGithubSquare size="3rem" color="black" /></a>
            <a href="https://dev.to/@shujaatazim" target="_blank" rel="noreferrer"><FaDev size="3rem" color="black" /></a>
            <a href="https://www.freecodecamp.org/shujaatazim" target="_blank" rel="noreferrer"><FaFreeCodeCamp size="3rem" color="black" /></a>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: "1rem"}}>
        Test
      </div>
    </div>
  );
}

export default Home;