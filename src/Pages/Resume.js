import React, { useState } from 'react';
import ResumeTabBar from '../Components/ResumeTabBar';
import ResumeContent from '../Components/ResumeContent';
import PersonalStatement from '../Components/PersonalStatement';
import { Grid } from '@material-ui/core';
import Avatar from '../Images/IMG_0123.jpg'

const Resume = () => {

  const [view, setView] = useState("employment")

  return (
    <div className="resume-page">
      <Grid container>
        <Grid item xs={5}>
          <div className="resume-left">
            <img className="avatar" style={{ marginTop: "2rem" }}src={Avatar} alt="avatar" />
            <h2>Shujaat Azim</h2>
            <h4>Full Stack Developer</h4>
            <hr />
              <PersonalStatement />
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