import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopList from '../TopListComponent';
import Map from '../MapComponent';

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
}));

  
export default function HomePage() {
    const classes = useStyles();

    return (
      <>
        <Map />
        <TopList/>
      </>
    );
};
