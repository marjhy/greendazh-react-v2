import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
import Container from '@material-ui/core/Container';

const BarChartFillOc = () => {
  const [chartDataLineFiO, setChartDataLineFiO] = useState({});

  // RTD OEE RTD 250/150
  const lineChartFillOeeM = () => {
    let NPT = [];
    let NR = [];
    let PA = [];
    let QL = [];
    let TE = [];
    let TI = [];

    let fs = [];

    axios
      .get('http://10.24.7.70:8080/OeeRtdAGPLCc')
      .then((res) => {
        for (const dataObj2 of res.data) {
          NPT.push(parseFloat([dataObj2['NetProdTime']].join(',')));
          NR.push(parseFloat([dataObj2['NotReported']].join(',')));
          PA.push(parseFloat([dataObj2['ProdActivity']].join(',')));
          QL.push(parseFloat([dataObj2['QualityLosses']].join(',')));
          TE.push(parseFloat([dataObj2['TotalDowntimeExt']].join(',')));
          TI.push(parseFloat([dataObj2['TotalDowntimeInt']].join(',')));
          fs.push(dataObj2.Tanggal);
        }

        setChartDataLineFiO({
          labels: fs,
          datasets: [
            {
              label: 'Net Prod Time',
              data: NPT,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                // display: false,
              },
            },
            {
              label: 'Not Reported',
              data: NR,
              fill: false,
              backgroundColor: 'rgb(54, 162, 235)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                // display: false,
              },
            },
            {
              label: 'Prod Activity',
              data: PA,
              fill: false,
              backgroundColor: 'rgb(75, 192, 192)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                // display: false,
              },
            },
            {
              label: 'Quality Losses',
              data: QL,
              fill: false,
              backgroundColor: '#76ff03',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                // display: false,
              },
            },
            {
              label: 'Total Downtime Ext',
              data: TE,
              fill: false,
              backgroundColor: '#00e676',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                // display: false,
              },
            },
            {
              label: 'Total Downtime Int',
              data: TI,
              fill: false,
              backgroundColor: '#009688',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                // display: false,
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
  };

  const options = {
    responsive: true,
    title: {
      text: 'OPERATIONAL TIME RTD POUCH BY DAY',
      display: true,
      fontSize: 22,
      fontFamily: '"Segoe UI Light"',
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  useEffect(() => {
    lineChartFillOeeM();
  }, []);

  return (
    <Container direction='column' justify='center' alignItems='center'>
      <Container sm item container direction='row'>
        <Bar data={chartDataLineFiO} options={options} />
      </Container>
    </Container>
  );
};

export default BarChartFillOc;
