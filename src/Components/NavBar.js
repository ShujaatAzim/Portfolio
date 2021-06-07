import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


const NavBar = () => {
  const matches = useMediaQuery('(min-width:700px)');
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
            <Button color="inherit" onClick={() => history.push("/")}><b style={{ fontSize: "16px"}}>Shujaat Azim</b></Button>
          </Typography>
          { !matches ? 
          <React.Fragment>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Get Started!
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={() => {history.push("/");handleClose()}}>Home</MenuItem>
              <MenuItem onClick={() => {history.push("/about");handleClose()}}>About</MenuItem>
              <MenuItem onClick={() => {history.push("/contact");handleClose()}}>Contact</MenuItem>
              <MenuItem onClick={() => {history.push("/projects");handleClose()}}>Projects</MenuItem>
              <MenuItem onClick={() => {history.push("/resume");handleClose()}}>Resume</MenuItem>
            </Menu>
          </React.Fragment> :
          <React.Fragment>
            <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
            <Button color="inherit" onClick={() => history.push("/about")}>About</Button>
            <Button color="inherit" onClick={() => history.push("/contact")}>Contact</Button>
            <Button color="inherit" onClick={() => history.push("/projects")}>Projects</Button>
            <Button color="inherit" onClick={() => history.push("/resume")}>Resume</Button>
          </React.Fragment>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
