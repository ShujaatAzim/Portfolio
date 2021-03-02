import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ResumeTabBar = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    newValue === 0 ? props.setView("education") : 
    newValue === 1 ? props.setView("employment") : 
    newValue === 2 ? props.setView("skills") :
    props.setView("extras")
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0} style={{ backgroundColor: "transparent", borderRadius: "0px" }}>
      <Tabs value={value} onChange={handleChange} centered style={{ flexDirection: "row" }}>
        <Tab label="Education" />
        <Tab label="Employment History" />
        <Tab label="Relevant Skills" />
        <Tab label="Volunteerism/Hobbies" />
      </Tabs>
    </Paper>
  );
}

export default ResumeTabBar;