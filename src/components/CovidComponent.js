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
        const response = await axios.get(`https://europe-west2-lbghack2021team7.cloudfunctions.net/web-api-covid?place=${place}`);
        setValue(response.data[0]);
      };
      getList();
    }, [place])

    return (
      <CardContent className={classes.cardContent}>
        {value && (
          <>
            <Typography gutterBottom variant="h5" component="h2">
            COVID-19 stats
            </Typography>
            <Typography variant="h6" component="h4">
              Latest results date: {value.Specimen_date?.value}
            </Typography>
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
