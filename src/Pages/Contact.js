import React from 'react';
import ContactList from '../Components/ContactList';
import { Grid } from '@material-ui/core';

const Contact = () => {
  return (
    <div className="contact-page">
      <Grid className="contact-grid" container>
        <Grid item xs={6}>
          <div>
            <h1>Shujaat Azim</h1>
            <img className="avatar" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" 
              style={{ paddingTop: "1rem" }} alt="profile" />
            <p>
              I am a full stack web developer with a background in, and a passion for, medicine and finance. With some previous self-taught experience 
              in JavaScript through FreeCodeCamp, I learned full stack web development through Flatiron School’s intensive, in-person bootcamp. 
              I bring strong skills in programming, leadership, teamwork, communication, organization, self-motivation, and presentation to the table. 
              All of those skills are from first-hand experience, and they will help, and have already helped, companies with big ideas change the world.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <h1>Contact Me</h1> 
            <div className="contact-info">
              <ContactList /> {/* the text in this list is not collapsing when screen is resized, except for the phone number which is. */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;