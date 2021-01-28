import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { ListItem , ListItemText } from '@material-ui/core';

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
    const [value, setValue] = useState();

    useEffect(() => {
      const getList = async () => {
        const response = await axios.get(`https://lbghack2021team7.nw.r.appspot.com/covid?place=${place.toLowerCase()}`);
        setValue(response.data[0]);
      };
      getList();
    }, [place])

    return (
      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            COVID-19 stats
          </Typography>
        {value && (
          <>
            <Typography variant="h6" component="h4">
              Latest results date: {value.Specimen_date?.value}
            </Typography>
            <ListItem>
              <ListItemText>Daily lab confirmed cases: {value.Daily_lab_confirmed_cases}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Cumulative lab confirmed cases: {value.Cumulative_lab_confirmed_cases}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Cumulative lab confirmed cases rate: {value.Cumulative_lab_confirmed_cases_rate}</ListItemText>
            </ListItem>
          </>
        )}
      </CardContent>
    );
};
