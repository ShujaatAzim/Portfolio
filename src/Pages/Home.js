import React from 'react';
import { Grid } from '@material-ui/core';
import { FaDev, FaFreeCodeCamp, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="homepage">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className="avatar" 
            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" 
            alt="profile" />
        </Grid>
        <Grid item xs={12}>
          <div className="hero">
            <h3>Hi, I'm Shu!</h3>
            {}
            <p>
              I am an enthusiastic full stack software developer with a background in, and passion for, technology, medicine, and finance. I am 
              offering strong skills in programming, leadership, teamwork, communication, organization, self-motivation, and presentation - all 
              ained from first-hand experience. I am a seasoned professional with a diverse background in many fields, which enables me to quickly 
              adopt and master new technologies while working in both team and self-directed settings. I am always eager to continue learning and 
              improving.
            </p>
            <hr />
            <p> ReactJS || Ruby on Rails || JavaScript || Ruby || HTML/CSS || Redux || Jest || NodeJS || RecoilJS || Postgres || GraphQL || Firebase </p>
            <p> Bootstrap || Bulma || AWS </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="icons">
            <a href="https://github.com/ShujaatAzim" target="_blank" rel="noreferrer"><FaGithubSquare size="3rem" color="black" /></a>
            <a href="https://www.linkedin.com/in/shujaatazim/" target="_blank" rel="noreferrer"><FaLinkedin size="3rem" color="black" /></a>
            <a href="https://dev.to/@shujaatazim" target="_blank" rel="noreferrer"><FaDev size="3rem" color="black" /></a>
            <a href="https://www.freecodecamp.org/shujaatazim" target="_blank" rel="noreferrer"><FaFreeCodeCamp size="3rem" color="black" /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;