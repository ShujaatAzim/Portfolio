import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { RiStackLine, RiReactjsFill, RiQuestionLine } from 'react-icons/ri';
import { SiRails } from 'react-icons/si';

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
      <Tabs value={value} onChange={handleChange} centered style={{ flexDirection: "row" }}>
        <Tab label="Full Stack" icon={<RiStackLine />} />
        <Tab label="React" icon={<RiReactjsFill />} />
        <Tab label="Rails" icon={<SiRails />} />
        <Tab label="Miscellaneous" icon={<RiQuestionLine />} />
      </Tabs>
    </Paper>
  );
}

export default ProjectsTabBar;