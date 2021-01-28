import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import bridge from '../media/bridge.png';
import castle from '../media/castle.png';
import sand from '../media/sand.png';
import durdleDoor from '../media/durdle-door.png';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      search: {
        marginTop: theme.spacing(4),
      },
      searchComponent: {
        margin: theme.spacing(1),
        height: 56,
      },
}));
  
export default function Header() {
    const classes = useStyles();
    const [location, setLocation] = useState('');

    return (
        <Grid container spacing={0}>
            <Grid container item spacing={1} md={12} lg={12}>
                <Grid item md={4}><img src={castle} alt='castle'/></Grid>
                <Grid item md={4}><img src={bridge} alt='bridge'/></Grid>
                <Grid item md={4}><img src={durdleDoor} alt='durdle door'/></Grid>
        
            </Grid>
            <Grid container item md={12} lg={12} spacing={1}>
                <Grid item  md={3}>
                    <img src={sand} alt='sand'/>
                </Grid>
                <Grid item md={6} style={{padding: '20px'}}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    STAYCATION 
                    </Typography>
                    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                        Where to?
                    </Typography>
                    <div className={classes.search}>
                        <Grid container spacing={2} justify="center">
                        <Grid item>
                            <TextField id="standard-basic" label="Search for a UK city" variant="outlined" className={classes.searchComponent} 
                            value={location} onChange={(e) => { setLocation(e.target.value); console.log(e.target.value)}}
                            />
                            <Link to={`/results/${location}`}>
                            <Button size="large" variant="contained" color="primary" type="submit" className={classes.searchComponent} >
                                <SearchIcon className={classes.icon} />
                            </Button>
                            </Link>
                        </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
      </Grid>
    );
};
