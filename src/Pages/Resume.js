import React, { useState } from 'react';
import ResumeTabBar from '../Components/ResumeTabBar';
import ResumeContent from '../Components/ResumeContent';
import { Grid } from '@material-ui/core';

const Resume = () => {

  const [view, setView] = useState("education")

  return (
    <div className="resume-page">
      <Grid container>
        <Grid item xs={5}>
          <div className="resume-left">
            <img style={{ height: "200px" }} 
              src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" 
              alt="avatar" />
            <h2>Shujaat Azim</h2>
            <h4>Full Stack Developer</h4>
            <hr />
            <p>
              I am an enthusiastic full stack software developer with a background in, and passion for, technology, medicine, and finance. I am 
              offering strong skills in programming, leadership, teamwork, communication, organization, self-motivation, and presentation - all 
              ained from first-hand experience. I am a seasoned professional with a diverse background in many fields, which enables me to quickly 
              adopt and master new technologies while working in both team and self-directed settings. I am always eager to continue learning and 
              improving.
            </p>
            <hr />
            <h5>Address</h5>
            <p>10301 Holly Hill Place, Potomac MD 20854</p>
            <h5>Phone</h5>
            <p>(240) 328-0494</p>
            <h5>Email</h5>
            <p>shujaat.azim@gmail.com</p>
            <h5>Website</h5>
            <p>https://www.shujaatazim.com</p>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="resume-right">
            <div>
              <ResumeTabBar setView={setView} />
            </div>
            <div className="resume-content">
              <ResumeContent content={view} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;