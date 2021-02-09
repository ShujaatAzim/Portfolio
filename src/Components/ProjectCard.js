import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 275,
  },
});

const projectsData = {
  "full stack": {
    "title": "Full Stack Project",
    "image": "https://static.thenounproject.com/png/390337-200.png"
  },
  "react": {
    "title": "React Project",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
  },
  "rails": {
    "title": "Rails Project",
    "image": "https://www.yaya.today/img/referral/Technologies/tech_rubyonrails.png"
  },
  "misc": {
    "title": "Miscellaneous Project",
    "image": "https://clubrunner.blob.core.windows.net/00000000127/Images/misc.png"
  }
}

const ProjectCard = props => {
  const classes = useStyles();

  const { projectType } = props;

  return (
    <Card className={classes.root} elevation={10}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={projectsData[projectType].image}
          title="project logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectsData[projectType].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Button size="small" color="primary">
          GitHub
        </Button>
        <Button size="small" color="primary">
          CodePen
        </Button>
        <Button size="small" color="primary">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;