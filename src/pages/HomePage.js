import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopList from '../components/TopListComponent';
import Map from '../components/MapComponent';

const useStyles = makeStyles((theme) => ({

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
