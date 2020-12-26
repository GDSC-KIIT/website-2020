import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import PersonIcon from "@material-ui/icons/Person";

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
          <div
                                     style={{
                                       display: "flex",
                                       justifyContent: "flex-start",
                                       alignItems: "center",
                                       marginTop: 10
                                     }}
                                   >

                                     <PersonIcon

                                       style={{ marginRight: 10 }}/>

                                    <Typography>Project Members Name</Typography>
                                   </div>
        </CardContent>
      </CardActionArea>
      <CardActions>

                         <IconButton aria-label="Github" color="primary">
                           <GitHubIcon fill="#fff" />
                         </IconButton>
      </CardActions>
    </Card>
  );
}
