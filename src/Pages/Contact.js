import React from 'react';
import ContactList from '../Components/ContactList';
import PersonalStatement from '../Components/PersonalStatement';
import { Grid } from '@material-ui/core';
import Professional from '../Images/Professional.png'

const Contact = () => {
  return (
    <div className="contact-page">
      <Grid className="contact-grid" container>
        <Grid item xs={6}>
          <div>
            <h1>Shujaat Azim</h1>
            <img className="avatar" src={Professional} alt="profile" style={{ margin: "1rem" }} />
            <PersonalStatement />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <h1>Let's Chat!</h1> 
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