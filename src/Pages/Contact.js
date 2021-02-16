import React from 'react';
import { Grid } from '@material-ui/core';

const Contact = () => {
  return (
    <div style={{ fontFamily: "Anton", height: "85vh", marginTop: "2rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>
            <h1>Shujaat Azim</h1>
            <img className="avatar" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png" 
              style={{ height: "250px" }} alt="profile" />
            <p>
              
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ textAlign: "center" }}>
            This will be side two with other stuff.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;