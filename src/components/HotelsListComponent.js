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
  
export default function HotelsList({ place }) {
    const classes = useStyles();
    const [list, setList] = useState([]);

    useEffect(() => {
      const getList = async () => {
        const response = await axios.get(`https://europe-west2-lbghack2021team7.cloudfunctions.net/web-api-hotels?place=${place}`);
        setList(response.data);
      };
      getList();
    }, [place])

    return (
      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          What hotels to stay at?
          </Typography>
          {list.map((item, index) => (
            <ListItem component="a" key={index}
              href={`https://www.booking.com/searchresults.en-gb.html?&ss=${item.Name}%20${place}`}
              target="_blank" rel="noopener" className={classes.link}>
              <ListItemText>{item.Name}</ListItemText>
            </ListItem>
          ))}
      </CardContent>
    );
};
