import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.dark
    },

    cardContent: {
      flexGrow: 1,
    },
  }));
  
export default function Twitter({ place }) {
    const classes = useStyles();
    const [value, setValue] = useState([]);

    useEffect(() => {
      const getList = async () => {
        const response = await axios.get(`https://europe-west2-lbghack2021team7.cloudfunctions.net/web-api-sentiment?place=${place}`);
        setValue(response.data);
      };
      getList();
    }, [])

    return (
      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          Twitter sentiment
          </Typography>
          <Typography>{value}</Typography>
      </CardContent>
    );
};
