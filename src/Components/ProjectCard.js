import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { projectsData } from '../Supplemental/ProjectsData';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 275,
  },
});

const ProjectCard = props => {
  const classes = useStyles();

  const { projectType } = props;

  return (
    <Card className={classes.root} elevation={10}>
      <CardActionArea>
        <CardMedia className={classes.media} image={projectsData[projectType].image} title="project logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { projectsData[projectType].title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { projectsData[projectType].desc }
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