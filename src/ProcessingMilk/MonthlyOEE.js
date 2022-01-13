import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//import ChartOEEFill from './components/ChartOEEFill';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LineFillB from '../components/Processing/LineChartFillOb';
import LineFillC from '../components/Processing/LineChartFillOc';
import LineFillD from '../components/Processing/LineChartFillOd';

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
    flexGrow: 1,
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
    marginLeft: '10em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1em',
    },
  },
  paper: {
    width: '90%',
    height: '120%',
    // backgroundColor: 'grey',
  },
}));

const MonthlyOEE = () => {
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
          <LineFillD />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <LineFillB />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      &ensp; &ensp; &ensp;
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <LineFillC />
        </Paper>
        &ensp; &ensp; &ensp;
      </Grid>
      <br />
    </Grid>
  );
};

export default MonthlyOEE;
