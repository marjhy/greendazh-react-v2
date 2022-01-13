import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableOeeFill from './components/Filling/TableOeeFill';
//import ChartOEEFill from './components/ChartOEEFill';
import Grid from '@material-ui/core/Grid';
import GaugeChartk from './components/Filling/GaugeChartFillOk';
import GaugeChartb from './components/Filling/GaugeChartFillOb';
import GaugeCharts from './components/Filling/GaugeChartFillOs';
import LineFillB from './components/Filling/LineChartFillOb';
import LineFillC from './components/Filling/LineChartFillOc';
import LineFillD from './components/Filling/LineChartFillOd';
import TableOeePeFillB from './components/Filling/TableOeePeFillB';
import TableOeePeFillC from './components/Filling/TableOeePeFillC';
import TableOeePeFillD from './components/Filling/TableOeePeFillD';
import TableOeePeFillMB from './components/Filling/TableOeePeFillMB';
import TableOeePeFillWB from './components/Filling/TableOeePeFillWB';

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
}));

const OeeFill = () => {
  const classes = useStyles();
  return (
    <Container>
      <main className={classes.content}>
        <Container className={classes.toolbar} />
        <Container>
          <TableOeeFill />
        </Container>
        <br />
        <br />
        <LineFillB />
        <br />
        <br />
        <LineFillC />
        <br />
        <br />
        <LineFillD />
        <br />
        <br />
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item container>
            <GaugeChartk />
          </Grid>
          <Grid item container>
            <GaugeChartb />
          </Grid>
          <Grid item container>
            <GaugeCharts />
          </Grid>
        </Grid>
        <TableOeePeFillB />
        <TableOeePeFillC />
        <TableOeePeFillD />
        <TableOeePeFillWB />
        <TableOeePeFillMB />
      </main>
    </Container>
  );
};

export default OeeFill;
