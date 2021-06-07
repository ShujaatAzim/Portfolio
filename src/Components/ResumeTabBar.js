import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ResumeTabBar = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const matches = useMediaQuery('(min-width:1000px)');

  const handleChange = (event, newValue) => {
    newValue === 0 ? props.setView("employment") : 
    newValue === 1 ? props.setView("skills") : 
    newValue === 2 ? props.setView("education") :
    props.setView("extras")
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    !matches ?           
    <React.Fragment>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => {props.setView("employment");handleClose()}}>Employment History</MenuItem>
        <MenuItem onClick={() => {props.setView("skills");handleClose()}}>Relevant Skills</MenuItem>
        <MenuItem onClick={() => {props.setView("education");handleClose()}}>Education</MenuItem>
        <MenuItem onClick={() => {props.setView("extras");handleClose()}}>Volunteerism/Hobbies</MenuItem>
      </Menu>
    </React.Fragment> :
    <Paper className={classes.root} elevation={0} style={{ backgroundColor: "transparent", borderRadius: "0px" }}>
      <Tabs value={value} onChange={handleChange} centered style={{ flexDirection: "row" }}>
        <Tab label="Employment History" />
        <Tab label="Relevant Skills" />
        <Tab label="Education" />
        <Tab label="Volunteerism/Hobbies" />
      </Tabs>
    </Paper>
  );
}

export default ResumeTabBar;