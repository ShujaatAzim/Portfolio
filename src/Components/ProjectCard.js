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
    height: 270,
  },
});

let projectTypes = {
  "full stack": {
    "title": "Full Stack Project",
    "image": "https://static.thenounproject.com/png/390337-200.png"
  },
  "react": {
    "title": "React Project",
    "image": "https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
  },
  "rails": {
    "title": "Rails Project",
    "image": "https://www.clipartmax.com/png/middle/109-1092427_learn-to-build-modern-web-apps-with-angularjs-and-ruby-ruby-on.png"
  },
  "misc": {
    "title": "Miscellaneous Project",
    "image": "https://e1.pngegg.com/pngimages/288/462/png-clipart-wordcons-misc-text.png"
  }
}

const ProjectCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={projectTypes[props.projectType].image}
          title="project logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectTypes[props.projectType].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
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