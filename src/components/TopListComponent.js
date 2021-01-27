import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Link } from "react-router-dom";

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
  
export default function TopList() {
    const classes = useStyles();
    const [list, setList] = useState([]);

    useEffect(() => {
      const getList = async () => {
        const response = await axios.get('https://europe-west2-lbghack2021team7.cloudfunctions.net/web-api-list');
        setList(response.data);
      };
      getList();
    }, [])

    return (
        <Grid item key={1} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                Top places to visit
                </Typography>
                {list.map((item, index) => (
                  <Link key={index} className={classes.link} to={`/results/${item.toLowerCase()}`}>
                    <Typography>{item}</Typography>
                  </Link>
                ))}
            </CardContent>
            </Card>
        </Grid>
          
    );
};
