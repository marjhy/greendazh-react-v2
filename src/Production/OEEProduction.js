import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//import ChartOEEFill from './components/ChartOEEFill';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TableOeePeChs from '../components/Production/TableOeePeChs';
import TableOeePeRtd from '../components/Production/TableOeePeRtd';
import TableOeePeStr from '../components/Production/TableOeePeStr';
import TableOeePeFillE from '../components/Production/TableOeePeFillWE';
import TableOeePeUht from '../components/Production/TableOeePeUht';

import TableOeePeChsM from '../components/Production/TableOeePeChsM';
import TableOeePeRtdM from '../components/Production/TableOeePeRtdM';
import TableOeePeStrM from '../components/Production/TableOeePeStrM';
import TableOeePeFillEM from '../components/Production/TableOeePeFillWEM';
import TableOeePeUhtM from '../components/Production/TableOeePeUhtM';

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

const WeeklyHistory = () => {
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
          <TableOeePeChs />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeRtd />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      &ensp; &ensp; &ensp;
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeStr />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeFillE />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeUht />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />

      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeChsM />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeRtdM />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      &ensp; &ensp; &ensp;
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeStrM />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeFillEM />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sm item container direction='row'>
        <Paper className={classes.paper} elevation={3}>
          <TableOeePeUhtM />
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
    </Grid>
  );
};

export default WeeklyHistory;
