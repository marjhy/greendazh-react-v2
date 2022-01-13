import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChartFillDOb from '../components/Rtd/BarChartFillOb';
import BarChartFillDOc from '../components/Rtd/BarChartFillOc';
import BarChartFillDOd from '../components/Rtd/BarChartFillOd';

import BarChartFillDObM from '../components/Rtd/BarChartFillObM';
import BarChartFillDOcM from '../components/Rtd/BarChartFillOcM';
import BarChartFillDOdM from '../components/Rtd/BarChartFillOdM';

import BarChartFillDObW from '../components/Rtd/BarChartFillObW';
import BarChartFillDOcW from '../components/Rtd/BarChartFillOcW';
import BarChartFillDOdW from '../components/Rtd/BarChartFillOdW';

import BarChartFillDObCop from '../components/Rtd/BarChartFillOb - Copy';
import BarChartFillDOcCop from '../components/Rtd/BarChartFillOc - Copy';
import BarChartFillDOdCop from '../components/Rtd/BarChartFillOd - Copy';

import BarChartFillDObMCop from '../components/Rtd/BarChartFillObM - Copy';
import BarChartFillDOcMCop from '../components/Rtd/BarChartFillOcM - Copy';
import BarChartFillDOdMCop from '../components/Rtd/BarChartFillOdM - Copy';

import BarChartFillDObWCop from '../components/Rtd/BarChartFillObW - Copy';
import BarChartFillDOcWCop from '../components/Rtd/BarChartFillOcW - Copy';
import BarChartFillDOdWCop from '../components/Rtd/BarChartFillOdW - Copy';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  customBorderRadius: {
    width: '90%',
    height: '105%',
    borderRadius: 25,
  },
}));

const OperationalTime = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.mainContainer}
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label='Show'
      />
      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDObCop /> : <BarChartFillDOb />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDOcCop /> : <BarChartFillDOc />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDOdCop /> : <BarChartFillDOd />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDObWCop /> : <BarChartFillDObW />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDOcWCop /> : <BarChartFillDOcW />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDOdWCop /> : <BarChartFillDOdW />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDObMCop /> : <BarChartFillDObM />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDOcMCop /> : <BarChartFillDOcM />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
          {checked ? <BarChartFillDOdMCop /> : <BarChartFillDOdM />}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </Grid>
  );
};

export default OperationalTime;
