import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
}));
  
export default function ResultsPage() {
    const classes = useStyles();
    let { params } = useRouteMatch("/results/:place");

    return (
        `Results for ${params.place}`
    );
};
