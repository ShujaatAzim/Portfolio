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

const ProjectsTabBar = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    newValue === 0 ? props.setView("full stack") : 
    newValue === 1 ? props.setView("react") : 
    newValue === 2 ? props.setView("rails") :
    props.setView("misc")
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0} style={{ backgroundColor: "transparent", borderRadius: "0px", marginTop: "2rem" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Full Stack" />
        <Tab label="React" />
        <Tab label="Rails" />
        <Tab label="Miscellaneous" />
      </Tabs>
    </Paper>
  );
}

export default ProjectsTabBar;