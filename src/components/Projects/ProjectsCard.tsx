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
    height: 200,
  },
});

export default function ProjectsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/projectslogo.png"
          title="DSC KIIT projects"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ante erat. Nulla augue ipsum, pretium eget dui at, malesuada.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
