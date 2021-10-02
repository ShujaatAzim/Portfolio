import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


const NotFound = () => {

  let history = useHistory();

  return (
    <div className="notfound">
      <p style={{ margin: "0" }}>
        Oh no! The dreaded 404 error! Page not found :(
      </p>
      {'\n'}
      <div>
        <Button onClick={() => history.goBack()}>Go Back</Button>
      </div>
    </div>
  );
}

export default NotFound;