import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import ParetoFillAGPLBPM from '../components/Str/ParetoFillAGPLBPM';
import ParetoFillAGPLCPM from '../components/Str/ParetoFillAGPLCPM';
import ParetoFillAGPLDPM from '../components/Str/ParetoFillAGPLDPM';
import ParetoFilAGPLBPW from '../components/Str/ParetoFilAGPLBPW';
import ParetoFilAGPLCPW from '../components/Str/ParetoFilAGPLCPW';
import ParetoFilAGPLDPW from '../components/Str/ParetoFilAGPLDPW';

import ParetoFillAGPLBPMDI from '../components/Str/ParetoFillAGPLBPMDI';
import ParetoFillAGPLCPMDI from '../components/Str/ParetoFillAGPLCPMDI';
import ParetoFillAGPLDPMDI from '../components/Str/ParetoFillAGPLDPMDI';
import ParetoFilAGPLBPWDI from '../components/Str/ParetoFilAGPLBPWDI';
import ParetoFilAGPLCPWDI from '../components/Str/ParetoFilAGPLCPWDI';
import ParetoFilAGPLDPWDI from '../components/Str/ParetoFilAGPLDPWDI';

import ParetoFillAGPLBPMDE from '../components/Str/ParetoFillAGPLBPMDE';
import ParetoFillAGPLCPMDE from '../components/Str/ParetoFillAGPLCPMDE';
import ParetoFillAGPLDPMDE from '../components/Str/ParetoFillAGPLDPMDE';
import ParetoFilAGPLBPWDE from '../components/Str/ParetoFilAGPLBPWDE';
import ParetoFilAGPLCPWDE from '../components/Str/ParetoFilAGPLCPWDE';
import ParetoFilAGPLDPWDE from '../components/Str/ParetoFilAGPLDPWDE';

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
    marginLeft: '5em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1em',
    },
  },
  paper: {
    width: '85%',
    height: '110%',
    borderRadius: 25,
    // backgroundColor: 'grey',
  },
}));

const ParetoDowntime = () => {
  const classes = useStyles();
  const [pageChoice, setPageChoice] = useState(1);

  const tombolAll = () => {
    setPageChoice(1);
  };

  const tombolInternal = () => {
    setPageChoice(2);
  };

  const tombolExternal = () => {
    setPageChoice(3);
  };

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.mainContainer}
    >
      <Grid sm item container direction='row'>
        <ButtonGroup
          variant='text'
          color='secondary'
          aria-label='text primary button group'
        >
          <Button onClick={tombolAll}>All</Button>
          <Button onClick={tombolInternal}>Internal</Button>
          <Button onClick={tombolExternal}>External</Button>
        </ButtonGroup>
      </Grid>
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={6}>
          {pageChoice === 1 ? (
            <ParetoFillAGPLBPM />
          ) : pageChoice === 2 ? (
            <ParetoFillAGPLBPMDI />
          ) : pageChoice === 3 ? (
            <ParetoFillAGPLBPMDE />
          ) : null}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={6}>
          {pageChoice === 1 ? (
            <ParetoFillAGPLCPM />
          ) : pageChoice === 2 ? (
            <ParetoFillAGPLCPMDI />
          ) : pageChoice === 3 ? (
            <ParetoFillAGPLCPMDE />
          ) : null}
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      &ensp; &ensp; &ensp;
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={6}>
          {pageChoice === 1 ? (
            <ParetoFillAGPLDPM />
          ) : pageChoice === 2 ? (
            <ParetoFillAGPLDPMDI />
          ) : pageChoice === 3 ? (
            <ParetoFillAGPLDPMDE />
          ) : null}
        </Paper>
        &ensp; &ensp; &ensp;
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={6}>
          {pageChoice === 1 ? (
            <ParetoFilAGPLBPW />
          ) : pageChoice === 2 ? (
            <ParetoFilAGPLBPWDI />
          ) : pageChoice === 3 ? (
            <ParetoFilAGPLBPWDE />
          ) : null}
        </Paper>
        &ensp; &ensp; &ensp;
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={6}>
          {pageChoice === 1 ? (
            <ParetoFilAGPLCPW />
          ) : pageChoice === 2 ? (
            <ParetoFilAGPLCPWDI />
          ) : pageChoice === 3 ? (
            <ParetoFilAGPLCPWDE />
          ) : null}
        </Paper>
        &ensp; &ensp; &ensp;
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={6}>
          {pageChoice === 1 ? (
            <ParetoFilAGPLDPW />
          ) : pageChoice === 2 ? (
            <ParetoFilAGPLDPWDI />
          ) : pageChoice === 3 ? (
            <ParetoFilAGPLDPWDE />
          ) : null}
        </Paper>
        &ensp; &ensp; &ensp;
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </Grid>
  );
};

export default ParetoDowntime;
