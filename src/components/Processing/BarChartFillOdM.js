import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

const BarChartFillObM = () => {
  const [chartDataLineFiO, setChartDataLineFiO] = useState({});
  const min = 2020;
  const max = 2220;
  let CURRENT_YEAR = new Date().getFullYear();
  const [value, setValue] = useState(CURRENT_YEAR);
  const [title, setTitle] = useState(
    'OPERATIONAL TIME FLEX 1 BY MONTH ' + value
  );

  // LINE CHART OEE FILLING FLEX 1
  const lineChartFillOeeM = () => {
    let NPT = [];
    let NR = [];
    let PA = [];
    let QL = [];
    let TE = [];
    let TI = [];
    let fs = [];
    let OEE = [];

    axios
      .get(`http://10.24.7.70:8080/OeeMilAGPLMDc/${value}`)
      .then((res) => {
        for (const dataObj2 of res.data) {
          NPT.push(parseFloat([dataObj2['NetProdTime']].join(',')));
          NR.push(parseFloat([dataObj2['NotReported']].join(',')));
          PA.push(parseFloat([dataObj2['ProdActivity']].join(',')));
          QL.push(parseFloat([dataObj2['QualityLosses']].join(',')));
          TE.push(parseFloat([dataObj2['TotalDowntimeExt']].join(',')));
          TI.push(parseFloat([dataObj2['TotalDowntimeInt']].join(',')));
          OEE.push(parseFloat([dataObj2['OEE']].join(',')));
          fs.push(dataObj2.Bulan);
        }

        setChartDataLineFiO({
          labels: fs,
          datasets: [
            {
              type: 'line',
              label: 'OEE',
              data: OEE,
              fill: false,
              yAxisID: 'B',
              // backgroundColor: '#009688',
              borderColor: 'rgb(8,8,8)',
              borderWidth: 2,
              datalabels: {
                backgroundColor: 'white',
                align: 'end',
                display: true,
              },
            },
            {
              label: 'Net Prod Time',
              data: NPT,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                display: true,
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
                display: true,
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
                display: true,
              },
            },
            {
              label: 'Quality Losses',
              data: QL,
              fill: false,
              backgroundColor: '#76ff03',
              datalabels: {
                backgroundColor: 'white',
                align: 'start',
                display: true,
              },
            },
            {
              label: 'Total Downtime Ext',
              data: TE,
              fill: false,
              backgroundColor: '#00e676',
              datalabels: {
                // backgroundColor: 'black',
                // align: 'center',
                display: true,
              },
            },
            {
              label: 'Total Downtime Int',
              data: TI,
              fill: false,
              backgroundColor: '#009688',
              datalabels: {
                backgroundColor: 'white',
                align: 'end',
                display: true,
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
      text: title,
      display: true,
      fontSize: 22,
      fontFamily: '"Segoe UI Light"',
    },
    scales: {
      yAxes: [
        {
          id: 'A',
          stacked: true,
          position: 'left',
          ticks: {
            beginAtZero: true,
          },
        },
        {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 100,
            min: 0,
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
  }, [value]);

  return (
    <Container>
      <Container id='wrapper'>
        <Bar data={chartDataLineFiO} options={options} />        
      </Container>
      <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
          > 
          <TextField   
           labelId='demo-simple-select-outlined-label2'
           id='demo-simple-select-outlined2'
            type="number"
            inputProps={{ min, max }}
            value={value}
            label='Year'
            onChange={(e) => {
              var value = parseInt(e.target.value, 10);
              if (value > max) value = max;
              if (value < min) value = min;
              setValue(value);
              setTitle('OPERATIONAL TIME FLEX 1 BY MONTH ' + value);
            }}
            variant="outlined"
          /><br/>     
          </Grid> 
    </Container>
  );
};

export default BarChartFillObM;
