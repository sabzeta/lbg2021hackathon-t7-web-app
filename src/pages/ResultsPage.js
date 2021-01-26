import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useRouteMatch,
} from "react-router-dom";

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
  
export default function ResultsPage() {
    const classes = useStyles();
    let { params } = useRouteMatch("/results/:place");

    return (
        `Results for ${params.place}`
    );
};
