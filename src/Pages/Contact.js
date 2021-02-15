import React from 'react';
import { Grid } from '@material-ui/core';

const Contact = () => {
  return (
    <div style={{ fontFamily: "Anton", height: "85vh" }}>
      <h1>Contact Page</h1>
      <Grid container>
        <Grid item xs={6}>
          <div>
          This will be side one with profile pic.
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            This will be side two with other stuff.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;