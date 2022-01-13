import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const GaugeChartFillOk = () => {
  //const [chartDataGau, setChartDataGau] = useState({});
  const [chartDataGauOEE, setChartDataGauOEE] = useState({});
  // const [chartDataGauPE, setChartDataGauPE] = useState({});
  // const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  // const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const chartStyle = {
    height: 150,
  };

  //FINDING AUDIT STATUS OPEN CLOSE %
  const chartGau = () => {
    let oee = [];
    // let oe = [];
    // let pe = [];
    axios
      .get('http://10.24.7.70:8080/OeeStrPGPLDc/ranupani')
      .then((res) => {
        //console.log(res);
        for (const dataObj of res.data) {
          oee.push(parseFloat(dataObj.OEE));
          // oe.push(parseFloat(dataObj.OE));
          // pe.push(parseFloat(dataObj.PE));
        }
        //setChartDataGau(res.data);
        setChartDataGauOEE(oee);
        //setChartDataGauPE(pe);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log('oee GAU:', chartDataGau);
    // console.log('oee GAU:', oee);
    // console.log('oe GAU:', oe);
    // console.log('pe GAU:', pe);
  };

  useEffect(() => {
    chartGau();
  }, []);

  //console.log(oee);
  return (
    <Grid Container alignItems='center' direction='row'>
      <Grid
        item
        container
        direction={'column'}
        alignItems='center'
        justify={'center'}
      >
        <h2>OEE STR RANU PANI D</h2>
      </Grid>
      <Grid
        item
        container
        direction={'column'}
        alignItems='center'
        justify={'center'}
      >
        <GaugeChart
          id='gauge-chart-ranupani'
          style={chartStyle}
          animate={false}
          nrOfLevels={420}
          arcsLength={[0.47, 0.02, 0.51]}
          colors={['#EA4228', '#F5CD19', '#5BE12C']}
          textColor='#000000'
          percent={(chartDataGauOEE / 100) * 1}
          arcPadding={0.02}
        />
      </Grid>
      ;
    </Grid>
  );
};

export default GaugeChartFillOk;
