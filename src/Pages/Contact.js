import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: "Anton", height: "85vh" }}>
      <h1>Contact Page</h1>
      <Grid container>
        <Grid item xs={6}>
          <div>
            Profile Pic
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            Other Stuff
          </div>
        </Grid>
      </Grid>
      <div>
        This will be side one.
      </div>
    </div>
  );
}

export default Contact;