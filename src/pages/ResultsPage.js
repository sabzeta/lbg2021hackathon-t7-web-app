import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useRouteMatch,
} from "react-router-dom";
import HotelsList from '../components/HotelsListComponent';
import Twitter from '../components/TwitterComponent';
import CovidComponent from '../components/CovidComponent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.dark
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));
  
export default function ResultsPage() {
    const classes = useStyles();
    let { params } = useRouteMatch("/results/:place");

    return (
      <>
        <Grid item key={1} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <Twitter place={params.place} />
          </Card>
        </Grid>

        <Grid item key={2} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CovidComponent place={params.place} />
          </Card>
        </Grid>

        <Grid item key={3} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <HotelsList place={params.place} />
          </Card>
        </Grid>
        

        <Grid item key={4} xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Where to eat?
              </Typography>
              <Typography>Comming up next!</Typography>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
};
