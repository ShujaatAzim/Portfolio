import React from 'react';
import PersonalStatement from '../Components/PersonalStatement';
import { Grid } from '@material-ui/core';
import { FaDev, FaFreeCodeCamp, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Professional from '../Images/Professional.png'

const Home = () => {
  
  return (
    <div className="homepage">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img className="avatar" 
            src={Professional} 
            alt="professional avatar" />
        </Grid>
        <Grid item xs={12}>
          <div className="hero">
            <h3>Hi, I'm Shu! Nice to "meet" you!</h3>
              <PersonalStatement />
            <hr />
            <p>React || Ruby on Rails || JavaScript || Ruby || Vue || HTML/CSS || Redux || Jest || NodeJS || RecoilJS || REST APIs || Postgres</p>
            <p>GraphQL || Firebase || Bootstrap || Bulma || AWS || Heroku</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="icons">
            <a href="https://github.com/ShujaatAzim" target="_blank" rel="noreferrer"><FaGithubSquare size="3rem" /></a>
            <a href="https://www.linkedin.com/in/shujaatazim/" target="_blank" rel="noreferrer"><FaLinkedin size="3rem" /></a>
            <a href="https://dev.to/@shujaatazim" target="_blank" rel="noreferrer"><FaDev size="3rem" /></a>
            <a href="https://www.freecodecamp.org/shujaatazim" target="_blank" rel="noreferrer"><FaFreeCodeCamp size="3rem" /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;