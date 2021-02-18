import React from 'react';
import ContactList from '../Components/ContactList';
import { Grid } from '@material-ui/core';

const Contact = () => {
  return (
    <div className="contact-page">
      <Grid container>
        <Grid className="contact-grid" item xs={6}>
          <div>
            <h1>Shujaat Azim</h1>
            <img className="avatar" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" 
              style={{ paddingTop: "1rem" }} alt="profile" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Grid>
        <Grid className="contact-grid" item xs={6}>
          <div>
            <h1>Contact Me</h1>
            <div className="contact-info">
              <ContactList />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;