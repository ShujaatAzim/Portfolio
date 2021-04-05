import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
            <Button color="inherit" onClick={() => history.push("/")}><b style={{ fontSize: "16px"}}>Shujaat Azim</b></Button>
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
          <Button color="inherit" onClick={() => history.push("/about")}>About</Button>
          <Button color="inherit" onClick={() => history.push("/contact")}>Contact</Button>
          <Button color="inherit" onClick={() => history.push("/projects")}>Projects</Button>
          <Button color="inherit" onClick={() => history.push("/resume")}>Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
