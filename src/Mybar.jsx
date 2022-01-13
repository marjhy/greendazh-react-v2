import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Barchart from './components/BarChart';
// import Tablechart from './components/TableChart';
// import Pyramidchart from './components/Pyramid';
import PyramidPic from './components/PyramidPic';
import PyramidPicM from './components/PyramidPicM';
import PyramidPicW from './components/PyramidPicW';
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
    width: '97%',
    height: '100%',
    borderRadius: 25,
    // backgroundColor: 'grey',
  },
}));

const Mybar = () => {
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
          <PyramidPic />
          <br />
          <br />
          <PyramidPicM />
          <br />
          <br />
          <PyramidPicW />
          <br />
          <br />
        </Paper>
      </Grid>

      <br />
      <br />
    </Grid>
  );
};

export default Mybar;
