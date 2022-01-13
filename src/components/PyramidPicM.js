import React, { useState, useEffect } from 'react';
//import { dataSource } from "./data.js";
import axios from 'axios';
import '../style/styles.css';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

import Funnel, {
  Title,
  Margin,
  Tooltip,
  Item,
  Border,
  Legend,
  Label,
  Font,
} from 'devextreme-react/funnel';

import vision from '../assets/pyramid2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
}));

const PyramidPic = () => {
  const [chartDataPyr, setChartDataPyr] = useState([]);
  const [chartDataPyrExt, setChartDataPyrExt] = useState([]);
  const [chartDataPyrW, setChartDataPyrW] = useState([]);
  const [chartDataPyrWExt, setChartDataPyrWExt] = useState([]);
  const [chartDataPyrA, setChartDataAPyr] = useState([]);
  const [chartDataPyrAExt, setChartDataPyrAExt] = useState([]);
  const [chartDataPyrM, setChartDataPyrM] = useState([]);
  const [chartDataPyrMExt, setChartDataPyrMExt] = useState([]);
  const [chartDataPyramid, setChartDataPyrmid] = useState([]);
  const [chartDataPyramidE, setChartDataPyrmidE] = useState([]);

  const [chartTitle, setChartTitle] = useState('');
  const [chartTitleX, setChartTitleX] = useState([]);
  const [chartTitleE, setChartTitleE] = useState([]);

  const [chartDataFat, setChartDataFat] = useState([]);
  const [chartDataFa, setChartDataFa] = useState([]);
  const [chartDataLti, setChartDataLti] = useState([]);
  const [chartDataMtc, setChartDataMtc] = useState([]);
  const [chartDataMiss, setChartDataLMiss] = useState([]);
  const [chartDataUn, setChartDataUn] = useState([]);

  const [chartDataFatX, setChartDataFatX] = useState([]);
  const [chartDataFaX, setChartDataFaX] = useState([]);
  const [chartDataLtiX, setChartDataLtiX] = useState([]);
  const [chartDataMtcX, setChartDataMtcX] = useState([]);
  const [chartDataMissX, setChartDataLMissX] = useState([]);
  const [chartDataUnX, setChartDataUnX] = useState([]);

  const classes = useStyles();

  //START FUNCTION TOMBOL INTERNAL
  const tombolPyramidAll = () => {
    setChartDataPyrmid(chartDataPyrA);
    setChartTitle('SAFETY PYRAMID INTERNAL ALL');
  };
  const tombolPyramidYear = () => {
    setChartDataPyrmid(chartDataPyr);
    setChartTitle('SAFETY PYRAMID INTERNAL YEAR');
  };
  const tombolPyramidMonth = () => {
    setChartDataPyrmid(chartDataPyrM);
    setChartTitle('SAFETY PYRAMID INTERNAL MONTH');
  };
  const tombolPyramidWeek = () => {
    setChartDataPyrmid(chartDataPyrW);
    setChartTitle('SAFETY PYRAMID INTERNAL WEEK');
  };

  //START FUNCTION TOMBOL EXTERNAL
  const tombolPyramidAllE = () => {
    setChartDataPyrmidE(chartDataPyrAExt);
    setChartTitleE('SAFETY PYRAMID EXTERNAL ALL');
  };
  const tombolPyramidYearE = () => {
    setChartDataPyrmidE(chartDataPyrExt);
    setChartTitleE('SAFETY PYRAMID EXTERNAL YEAR');
  };
  const tombolPyramidMonthE = () => {
    setChartDataPyrmidE(chartDataPyrMExt);
    setChartTitleE('SAFETY PYRAMID EXTERNAL MONTH');
  };
  const tombolPyramidWeekE = () => {
    setChartDataPyrmidE(chartDataPyrWExt);
    setChartTitleE('SAFETY PYRAMID EXTERNAL WEEK');
  };

  //END OF TOMBOL

  // month internal
  const chartPyramid = () => {
    let nilaiFat = [];
    let nilaiFa = [];
    let nilaiLti = [];
    let nilaiMtc = [];
    let nilaiNMiss = [];
    let nilaiNUn = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidinM')
      .then((res) => {
        for (const dataObj of res.data) {
          if (dataObj.level === 'FirstAid') {
            nilaiFa.push(parseInt(dataObj.count));
            //fs.push(dataObj.level);
          } else if (dataObj.level === 'LTI') {
            nilaiLti.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'MTC') {
            nilaiMtc.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'Near_Miss') {
            nilaiNMiss.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'Unsafe Act & Condition') {
            nilaiNUn.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'Fatality') {
            nilaiFat.push(parseInt(dataObj.count));
          }
        }
        setChartDataFat(nilaiFat);
        setChartDataFa(nilaiFa);
        setChartDataLti(nilaiLti);
        setChartDataMtc(nilaiMtc);
        setChartDataLMiss(nilaiNMiss);
        setChartDataUn(nilaiNUn);
        setChartTitle('SAFETY PYRAMID INTERNAL MONTHLY');
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  // month external
  const chartPyramidExt = () => {
    let nilaiFat = [];
    let nilaiFa = [];
    let nilaiLti = [];
    let nilaiMtc = [];
    let nilaiNMiss = [];
    let nilaiNUn = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidexM')
      .then((res) => {
        for (const dataObj of res.data) {
          if (dataObj.level === 'FirstAid') {
            nilaiFa.push(parseInt(dataObj.count));
            //fs.push(dataObj.level);
          } else if (dataObj.level === 'LTI') {
            nilaiLti.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'MTC') {
            nilaiMtc.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'Near_Miss') {
            nilaiNMiss.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'Unsafe Act & Condition') {
            nilaiNUn.push(parseInt(dataObj.count));
          } else if (dataObj.level === 'Fatality') {
            nilaiFat.push(parseInt(dataObj.count));
          }
        }
        setChartDataFatX(nilaiFat);
        setChartDataFaX(nilaiFa);
        setChartDataLtiX(nilaiLti);
        setChartDataMtcX(nilaiMtc);
        setChartDataLMissX(nilaiNMiss);
        setChartDataUnX(nilaiNUn);
        setChartTitleX('SAFETY PYRAMID EXTERNAL MONTHLY');
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  useEffect(() => {
    chartPyramid();
    chartPyramidExt();
  }, []);

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.mainContainer}
    >
      {/*-----Pyramid Internal Month-----*/}{' '}
      <Grid item>
        {' '}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item>
            <Typography variant='h2' align='center'>
              {chartTitle}
            </Typography>
            <br />
            <Grid container justify='center'>
              <img
                src={vision}
                alt='Pyramid Safety'
                style={{
                  maxWidth: '60em',
                  marginLeft: '10em',
                  marginRight: '2em',
                  marginBottom: 0,
                }}
              />
            </Grid>
          </Grid>
          <Grid sm item>
            <br />
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataFat < 1 ? '0' : chartDataFat}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataLti < 1 ? '0' : chartDataLti}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataMtc < 1 ? '0' : chartDataMtc}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataFa < 1 ? '0' : chartDataFa}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2' align='center'>
                {chartDataMiss < 1 ? '0' : chartDataMiss}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2' align='center'>
                {chartDataUn < 1 ? '0' : chartDataUn}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      {/*-----Pyramid External Month-----*/}{' '}
      <Grid item>
        {' '}
        <Grid container justify='flex-end' alignItems='center' direction='row'>
          <Grid sm item>
            <Typography variant='h2' align='center'>
              {chartTitleX}
            </Typography>
            <br />
            <Grid container justify='center'>
              <img
                src={vision}
                alt='Pyramid Safety External'
                style={{
                  maxWidth: '60em',
                  marginLeft: '10em',
                  marginRight: '2em',
                  marginBottom: 0,
                }}
              />
            </Grid>
          </Grid>
          <Grid sm item>
            <br />
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataFatX < 1 ? '0' : chartDataFatX}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataLtiX < 1 ? '0' : chartDataLtiX}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataMtcX < 1 ? '0' : chartDataMtcX}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2'>
                {chartDataFaX < 1 ? '0' : chartDataFaX}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2' align='center'>
                {chartDataMissX < 1 ? '0' : chartDataMissX}
              </Typography>
            </Grid>
            <br />
            <Grid container justify='center'>
              <Typography variant='h2' align='center'>
                {chartDataUnX < 1 ? '0' : chartDataUnX}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PyramidPic;
