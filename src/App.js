import './App.css';
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import AppRoutes from './AppRoutes';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4ab77c',
      main: '#00864f',
      dark: '#005826',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff8a50',
      main: '#ff5722',
      dark: '#c41c00',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  homeLink: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  search: {
    marginTop: theme.spacing(4),
  },
  searchComponent: {
    margin: theme.spacing(1),
    height: 56,
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  const [location, setLocation] = useState('');
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>

    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Link to="/" className={classes.homeLink}>
          <Typography variant="h6">
              Staycation - where to?
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          STAYCATION 
          </Typography>
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
            WHERE TO?
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
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <AppRoutes />
        </Grid>
      </Container>
    </main>
    </Router>
    {/* Footer */}
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Staycation 
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        This demo web site was built for LBG CDO 2021 CGP Hackathon by team 7!
      </Typography>
    </footer>
    {/* End footer */}
</ThemeProvider>

  </React.Fragment>
  );
}

export default App;
