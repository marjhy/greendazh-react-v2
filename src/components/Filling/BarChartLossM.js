import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
import Container from '@material-ui/core/Container';
import { PushSpinner, WaveSpinner } from "react-spinners-kit";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";

const BarChartFillObM = () => {
  const [chartDataLineFiO, setChartDataLineFiO] = useState({});

  const min = 2020;
  const max = 2220;
  let CURRENT_YEAR = new Date().getFullYear();
  const [value, setValue] = useState(CURRENT_YEAR);
  const [title, setTitle] = useState(
    'LOSS PACKAGING UHT PACK 1000 ML BY MONTH ' + value
  );

  // LINE CHART OEE FILLING LINE B
  const lineChartFillOeeM = () => {
    let Sample = [];
    let StartUp = [];
    let Pengecekan = [];
    let VariableLoss = [];
    let PackagingLoss = [];
    let FixLoss = [];
    let Standart = [];
    // let OEE = [];
    let fs = [];

    axios
      .get(`http://10.24.7.70:8080/LossOeeFillM/${value}`)
      .then((res) => {
        for (const dataObj2 of res.data) {
          if (dataObj2['MATERIAL GROUP'] === 'UHT PACK 1000 ML') {
            Sample.push(parseFloat([dataObj2['INC-SMPLE-PCS']].join(',')));
            StartUp.push(parseFloat([dataObj2['STARTUP']].join(',')));
            Pengecekan.push(parseFloat([dataObj2['PENGECEKAN']].join(',')));
            VariableLoss.push(parseFloat([dataObj2['VARIABLELOSS']].join(',')));
            PackagingLoss.push(parseFloat([dataObj2['PACKAGINGLOSS']].join(',')));
            FixLoss.push(parseFloat([dataObj2['FIXLOSS']].join(',')));
            Standart.push(parseFloat([dataObj2['STD']].join(',')));
            fs.push(dataObj2.MONTHs);
          }          
        }

        setChartDataLineFiO({
          labels: fs,
          datasets: [
            {
              type: 'line',
              label: 'PackagingLoss',
              data: PackagingLoss,
              fill: false,
              yAxisID: 'B',
              // backgroundColor: '#009688',
              borderColor: '#00e676',
              borderWidth: 2,
              datalabels: {
                backgroundColor: 'white',
                align: 'start',
                // display: true,
              },
            },
            {
              type: 'line',
              label: 'FixLoss',
              data: FixLoss,
              fill: false,
              yAxisID: 'B',
              // backgroundColor: '#009688',
              borderColor: '#009688',
              borderWidth: 2,
              datalabels: {
                backgroundColor: 'white',
                align: 'start',
                 display: false,
              },
            },
            {
              type: 'line',
              label: 'Standart',
              data: Standart,
              fill: false,
              yAxisID: 'B',
              // backgroundColor: '#009688',
              borderColor: 'rgb(8,8,8)',
              borderWidth: 2,
              datalabels: {
                backgroundColor: 'white',
                align: 'start',
                display: false,
              },
            },
            {
              label: 'Sample',
              data: Sample,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                display: false,
              },
            },
            {
              label: 'StartUp',
              data: StartUp,
              fill: false,
              backgroundColor: 'rgb(54, 162, 235)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                display: false,
              },
            },
            {
              label: 'Pengecekan',
              data: Pengecekan,
              fill: false,
              backgroundColor: 'rgb(75, 192, 192)',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
                display: false,
              },
            },
            {
              label: 'VariableLoss',
              data: VariableLoss,
              fill: false,
              backgroundColor: '#76ff03',
              datalabels: {
                // backgroundColor: 'white',
                // align: 'center',
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
            min: 0,
          },
        },
        {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 5,
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
        {(Object.keys(chartDataLineFiO).length === 0) ?  <WaveSpinner size={30} color="#09ba33" loading={true} /> :<Bar data={chartDataLineFiO} options={options} />  }
             {console.log(chartDataLineFiO)}
              {/* <Bar data={chartDataLineFiO} options={options} /> */}
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
              setTitle('LOSS PACKAGING UHT PACK 1000 ML BY MONTH ' + value);
            }}
            variant="outlined"
          /><br/>     
          </Grid> 
    </Container>
  );
};

export default BarChartFillObM;
