import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GaugeChartLBk from '../components/Processing/GaugeChartFillOk';
import GaugeChartLBb from '../components/Processing/GaugeChartFillOb';
import GaugeChartLBs from '../components/Processing/GaugeChartFillOs';

import GaugeChartLCk from '../components/Processing/GaugeChartFillOkC';
import GaugeChartLCb from '../components/Processing/GaugeChartFillObC';
import GaugeChartLCs from '../components/Processing/GaugeChartFillOsC';

import GaugeChartLDk from '../components/Processing/GaugeChartFillOkD';
import GaugeChartLDb from '../components/Processing/GaugeChartFillObD';
import GaugeChartLDs from '../components/Processing/GaugeChartFillOsD';

import GaugeChartAGPLB from '../components/Processing/GaugeChartFillObAGPLB';
import GaugeChartAGPLC from '../components/Processing/GaugeChartFillObAGPLC';
import GaugeChartAGPLD from '../components/Processing/GaugeChartFillObAGPLD';

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
    marginLeft: '13em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1em',
    },
  },
}));

const RealtimeDaily = () => {
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
          <GaugeChartAGPLB />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartAGPLC />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartAGPLD />
        </Paper>
        &ensp; &ensp; &ensp;
      </Grid>
      <br />

      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLBk />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLCk />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLDk />
        </Paper>
      </Grid>
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLBb />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLCb />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLDb />
        </Paper>
      </Grid>
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLBs />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLCs />
        </Paper>
        &ensp; &ensp; &ensp;
        <Paper className={classes.paper} elevation={3}>
          <GaugeChartLDs />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RealtimeDaily;
