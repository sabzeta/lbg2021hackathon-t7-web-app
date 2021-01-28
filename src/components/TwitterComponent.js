import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Avatar, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark
    },
    avatar: {
      width: 200,
      height: 200,
      fontSize: 120,
      backgroundColor: theme.palette.primary.main,
    },
    cardContent: {
      flexGrow: 1,
    },
    container: {
      height: '100%',
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
    }
  }));
  
export default function Twitter({ place }) {
    const classes = useStyles();
    const [value, setValue] = useState(42);

    useEffect(() => {
      const getList = async () => {
        const response = await axios.get(`https://lbghack2021team7.nw.r.appspot.com/sentiment?place=${place.toLowerCase()}`);

        const val = Object.values(response.data.pop());
        const sentiment = Math.round(val * 100) / 100
        setValue(sentiment);
      };
      getList();
    }, [place])

    return (
      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          Twitter sentiment
          </Typography>
          <div className={classes.container}>
            <Avatar className={classes.avatar}>{value}</Avatar>
          </div>
      </CardContent>
    );
};
