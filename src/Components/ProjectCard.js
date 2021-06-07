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

const ProjectCard = props => {
  const classes = useStyles();

  const { project } = props;

  return (
    <Card className={classes.root} elevation={10}>
      <CardActionArea disabled={project.link === ""} onClick={() => window.open(`${project.link}`, "_blank")}>
        <CardMedia className={classes.media} image={project.image} title="project logo" style={{ margin: "0.5rem" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { project.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { project.desc }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-around" }}>
        <Button size="small" color="primary" disabled={!project.deployed} onClick={() => window.open(`${project.link}`, "_blank")}>
          { project.deployed === false ? "× Deployed" : "✓ Deployed" }
        </Button>
        <Button size="small" color="primary" disabled={project.github === ""} onClick={() => window.open(`${project.github}`, "_blank")}>
          GitHub
        </Button>
        <Button size="small" color="primary" disabled={project.demo === ""} onClick={() => window.open(`${project.demo}`, "_blank")}>
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;