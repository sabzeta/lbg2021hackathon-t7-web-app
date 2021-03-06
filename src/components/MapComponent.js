import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import viz from '../media/viz.png';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
  
export default function Map() {
    const classes = useStyles();


    return (
        <Grid item key={1} xs={12} sm={6} md={8}>
            <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Map
                </Typography>
                <a href="https://datastudio.google.com/reporting/2016b160-cb06-4733-9382-e8bbf6062252/page/ZW7yB"
                  target="_blank" rel="noopener">
                  <img src={viz} alt="Logo" />
                </a>
            </CardContent>
            </Card>
        </Grid>
          
    );
};
