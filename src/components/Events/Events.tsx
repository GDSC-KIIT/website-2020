import styles from "./events.module.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  button: {
    backgroundColor: "#746B6B",
    color: "white"
  },
  rootCard: {
    maxWidth: 350,
    height: 395
  },
  rootCardMobile: {
    width: "auto",
    height: 420
  },
  media: {
    height: 230
  },
  grid: {
    height: 550
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    margin: "auto"
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  cardAction: {
    "&:focus": {
      backgroundColor: "#ffffff"
    }
  },
  cardActionDark: {
    "&:focus": {
      backgroundColor: "#202020"
    }
  }
}));


export default function Events() {
    const classes = useStyles();
  return (
    <>

      <div className={`container my-5`}>


      <h1 className={`${styles.header}`}>UPCOMING EVENTS</h1>

            <p className={styles.dsc_description}>
        Events are a great way to share knowledge and indulge in great discussions with your peers.
         DSC KIIT has hosted a variety of events to teach important skills and improve the coding culture of our college and its sure that
         its going to host more events
        Stay tuned for future events!
            </p>
          </div>
           <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className={classes.root}>
           <CardActionArea>
             <CardMedia
               className={classes.media}
               image=""
               title="Event 1"
             />
             <CardContent>
             <Grid
                         container
                         direction="column"
                         justify="space-between"
                       >
               <Typography gutterBottom variant="h5" component="h2">
                Event 1
               </Typography>
               <Grid style={{ padding: 3 }}>
                              <Typography>
                                <EventIcon /> DD/MM/YY
                              </Typography>
                            </Grid>
                  </Grid>
               <Typography variant="body2" color="textSecondary" component="p">
          Events are a great way to share knowledge and indulge in great discussions with your peers.
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>

             <Button size="small" color="primary">
               Learn More
             </Button>
           </CardActions>
         </Card>

</Grid>
</Grid>
    </>
  );
}
