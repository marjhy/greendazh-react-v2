import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BarChartLossM from '../components/Str/BarChartLossM';
import BarChartLossMe02 from '../components/Str/BarChartLossMe02';
import BarChartLossMe05 from '../components/Str/BarChartLossMe05';
import BarChartLossMe09 from '../components/Str/BarChartLossMe09';
import BarChartLossMe10 from '../components/Str/BarChartLossMe10';
import BarChartLossMe18 from '../components/Str/BarChartLossMe18';
// import BarChartLossMt12 from '../components/Str/BarChartLossMt12';
// import BarChartLossMt20 from '../components/Str/BarChartLossMt20';
// import BarChartLossMt25 from '../components/Str/BarChartLossMt25';
// import BarChartLossMu1w from '../components/Str/BarChartLossMu1w';

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

const Loss = () => {
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
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label='Show'
      /> */}

      <Grid sm item container direction='row'>
        <Paper className={classes.customBorderRadius} elevation={6}>
        <BarChartLossM />    
        <br />
        <BarChartLossMe02 />    
        <br />
        <BarChartLossMe05 />    
        <br />
        <BarChartLossMe09 />    
        <br />
        <BarChartLossMe10 />    
        <br />
        <BarChartLossMe18 />    
     
        {/* <BarChartLossMt12 />    
        <br />
        <BarChartLossMt20 />    
        <br />
        <BarChartLossMt25 />    
        <br />
        <BarChartLossMu1w />    
        <br /> */}
        </Paper>
      </Grid>
      <br />
    </Grid>
  );
};

export default Loss;
