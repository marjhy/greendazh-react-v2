import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Barchart from './components/BarChart';
import Tablechart from './components/TableChart';
import Pyramidchart from './components/Pyramid';
import Container from '@material-ui/core/Container';
// import TableOeeFill from './components/Filling/TableOeeFill';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 3,
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  mainContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('md')]: {
      marginTop: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '10em',
    },
    marginLeft: '5em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1em',
    },
  },
  paper: {
    width: '97%',
    height: '100%',
    borderRadius: 25,
    // backgroundColor: 'grey',
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.mainContainer}
    >
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <Pyramidchart />
        </Paper>
      </Grid>
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <Barchart />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <Tablechart />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Grid>
  );
};

export default Home;
