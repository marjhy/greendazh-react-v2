import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Container from '@material-ui/core/Container';
//import GaugeChart from 'react-gauge-chart';
const std = process.env.REACT_APP_CHS_STD_OEE_1;

const LineChartFillOb = () => {
  //const [chartDataCat, setChartDataCat] = useState({});
  const [chartDataLineFiO, setChartDataLineFiO] = useState({});

  // RICOTTA 250HART OEE CHS MOZZA 1000
  const lineChartFillOeeM = () => {
    let OEEK = []; //eng
    let OEEB = []; //eng
    let OEES = []; //eng
    let OEEGab = []; //eng
    // let qtyChs = []; //chs
    // let qtyFil = []; //milk

    let fs = [];
    const sEng = 'stack1';

    axios
      .get('http://10.24.7.70:8080/OeeChsPGPLBMt')
      .then((res) => {
        //console.log(res);

        for (const dataObj2 of res.data) {
          OEEK.push(parseFloat([dataObj2['OeeRajawali']].join(',')));
          OEEB.push(parseFloat([dataObj2['OeeHiu']].join(',')));
          OEES.push(parseFloat([dataObj2['OeeSinga']].join(',')));
          OEEGab.push(parseFloat([dataObj2['targetOEE']].join(',')));
          fs.push(dataObj2.Bulan);
        }

        setChartDataLineFiO({
          labels: fs,

          datasets: [
            {
              stack: sEng,
              label: 'RAJAWALI',
              data: OEEK,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              datalabels: {
                backgroundColor: 'white',
                align: 'start',
              },
            },
            {
              label: 'Hiu',
              data: OEEB,
              fill: false,
              borderColor: 'rgb(54, 162, 235)',
              datalabels: {
                backgroundColor: 'white',
                align: 'end',
              },
            },
            {
              label: 'Singa',
              data: OEES,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              datalabels: {
                backgroundColor: 'white',
                align: 'start',
              },
            },
            {
              label: 'ALL GROUP',
              data: OEEGab,
              fill: false,
              borderColor: 'rgb(15, 0, 0)',
              datalabels: {
                backgroundColor: 'white',
                align: '45',
              },
            },
            {
              label: 'TARGET',
              data: [
                std,
                std,
                std,
                std,
                std,
                std,
                std,
                std,
                std,
                std,
                std,
                std,
              ],
              fill: false,
              borderColor: '#00a152',
              datalabels: {
                backgroundColor: 'white',
                align: '45',
                display: false,
              },
            },
          ],
          options: {
            cutoutPercentage: 0,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log("DEPARTMENT:", fs, qty);
  };

  useEffect(() => {
    //chartCategory();
    lineChartFillOeeM();
  }, []);

  return (
    <Container>
      <Container id='wrapper'>
        <Line
          data={chartDataLineFiO}
          options={{
            responsive: true,
            title: {
              text: 'OEE MONTHLY CHEESE MOZZA 1000',
              display: true,
              fontSize: 22,
              fontFamily: '"Segoe UI Light"',
            },
          }}
        />
      </Container>
    </Container>
  );
};

export default LineChartFillOb;
