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
            I am an enthusiastic full stack software developer with a background in, and passion for, technology, medicine, and finance. I am 
            offering strong skills in programming, leadership, teamwork, communication, organization, self-motivation, and presentation - all 
            ained from first-hand experience. I am a seasoned professional with a diverse background in many fields, which enables me to quickly 
            adopt and master new technologies while working in both team and self-directed settings. I am always eager to continue learning and 
            improving.
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