import './App.css';
import React from 'react';
import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  search: {
    marginTop: theme.spacing(4),
  },
  searchComponent: {
    margin: theme.spacing(1),
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

const cards = [1, 2, 3];


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Staycation - where to?
        </Typography>
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
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Search" variant="outlined" />
                  <Button variant="contained" color="primary" type="submit">
                  <TextField id="standard-basic" label="Search" variant="outlined" className={classes.searchComponent} />
                  <Button size="big" variant="contained" color="primary" type="submit" className={classes.searchComponent} >
                    <SearchIcon className={classes.icon} />
                  </Button>
                </form>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
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
