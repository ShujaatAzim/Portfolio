import React, { useState } from 'react';
import ResumeTabBar from '../Components/ResumeTabBar';
import ResumeEducation from '../Components/ResumeEducation';
import ResumeEmployment from '../Components/ResumeEmployment';
import ResumeSkills from '../Components/ResumeSkills';
import ResumeExtras from '../Components/ResumeExtras';
import { Grid } from '@material-ui/core';

const Resume = () => {

  const [view, setView] = useState("education")

  return (
    <div className="resume-page">
      <div>
        <ResumeTabBar setView={setView} />
      </div>
      <Grid container>
        <Grid item xs={5}>
          <div className="resume-left">
            <img style={{ height: "200px" }} 
              src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" 
              alt="avatar" />
            <h2>Shujaat Azim</h2>
            <h4>Full Stack Developer</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <hr />
            <h5>Address</h5>
            <p>10301 Holly Hill Place, Potomac MD 20854</p>
            <h5>Phone</h5>
            <p>(240) 328-0494</p>
            <h5>Email</h5>
            <p>shujaat.azim@gmail.com</p>
            <h5>Website</h5>
            <p>https://www.shujaatazim.com</p>
          <hr />
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="resume-right">
            { view === "education" ? <ResumeEducation /> : 
              view === "employment" ? <ResumeEmployment /> : 
              view === "skills" ? <ResumeSkills /> :
              view === "extra" ? <ResumeExtras /> : null }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;