import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

// import { dataSource } from "./data.js";
import axios from 'axios';
import '../../style/styles.css';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";

import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  ConstantLine,
  Label,
} from 'devextreme-react/chart';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // marginLeft: '1em',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ParetoFillAGPLBPM = () => {
  const classes = useStyles();
  const [chartDataPyr, setChartDataPyr] = useState([]);

  let d = new Date();
  let n = d.getMonth();
  let currentMonth = n + 1;
  let monthName = d.toLocaleString('default', { month: 'long' });
  const min = 2020;
  const max = 2220;
  const API_HOST = 'http://10.24.7.70:8080';
  let CURRENT_YEAR = new Date().getFullYear();

  const API_LINK = `${API_HOST}/OeeFilPGPLC/${CURRENT_YEAR}`;
  const [value, setValue] = useState(CURRENT_YEAR);

  const [month, setMOnth] = useState(currentMonth);
  const [title, setTitle] = useState(
    'Pareto STR 500/1000 Downtime External / Month ' + monthName + ' ' + value
  );
 
  const handleChange = (event) => {
    setMOnth(event.target.value);
    if (event.target.value === 1) {
      setTitle('Pareto STR 500/1000 Downtime External / Month January '+ value);
    }
    if (event.target.value === 2) {
      setTitle('Pareto STR 500/1000 Downtime External / Month February '+ value);
    }
    if (event.target.value === 3) {
      setTitle('Pareto STR 500/1000 Downtime External / Month March '+ value);
    }
    if (event.target.value === 4) {
      setTitle('Pareto STR 500/1000 Downtime External / Month April '+ value);
    }
    if (event.target.value === 5) {
      setTitle('Pareto STR 500/1000 Downtime External / Month May '+ value);
    }
    if (event.target.value === 6) {
      setTitle('Pareto STR 500/1000 Downtime External / Month June '+ value);
    }
    if (event.target.value === 7) {
      setTitle('Pareto STR 500/1000 Downtime External / Month July '+ value);
    }
    if (event.target.value === 8) {
      setTitle('Pareto STR 500/1000 Downtime External / Month August '+ value);
    }
    if (event.target.value === 9) {
      setTitle('Pareto STR 500/1000 Downtime External / Month September '+ value);
    }
    if (event.target.value === 10) {
      setTitle('Pareto STR 500/1000 Downtime External / Month October '+ value);
    }
    if (event.target.value === 11) {
      setTitle('Pareto STR 500/1000 Downtime External / Month November '+ value);
    }
    if (event.target.value === 12) {
      setTitle('Pareto STR 500/1000 Downtime External / Month December '+ value);
    }
  };

  const getDataFromAPI = () => {
    let DT1 = [];
    let JD1 = [];

    axios
      .get(`http://10.24.7.70:8080/OeeStrAGPLBPMDE/${value}`)
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          DT1.push(parseFloat(dataObj.Downtime));
          JD1.push(dataObj.JenisDowntime);
        }
        setChartDataPyr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromAPI();
  }, [value,month]);

  const data = chartDataPyr.sort(function (a, b) {
    return b.Downtime - a.Downtime;
  });

  const totalCount = data.reduce(function (prevValue, item) {
    return prevValue + item.Downtime;
  }, 0);

  let cumulativeCount = 0;

  const dataArray = data.map(function (item) {
    cumulativeCount += item.Downtime;
    if (item.Bulan === month) {
      return {
        complaint: item.JenisDowntime,
        count: item.Downtime,
        cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
      };
    }
  });

  function customizeTooltip(pointInfo) {
    return {
      html: `<div><div class="tooltip-header">${pointInfo.argumentText}</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName}</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText}</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName}</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText}</span>% </div></div></div>`,
    };
  }

  function customizePercentageText({ valueText }) {
    return `${valueText}%`;
  }

  return (
    <Container>
      <Container>
        <Chart
          title={title}
          id='chart'
          dataSource={dataArray}
          palette='Harmony Light' //"Soft Pastel"
          argumentField='level'
          valueField='count'
        >
          <CommonSeriesSettings argumentField='complaint' />
          <Series
            name='Downtime duration'
            valueField='count'
            axis='frequency'
            type='bar'
            color='#fac29a'
          />
          <Series
            name='Percentage'
            valueField='cumulativePercentage'
            axis='percentage'
            type='spline'
            color='#6b71c3'
          />

          <ArgumentAxis>
            <Label rotated='true' rotationAngle={45} displayMode='rotate' />
          </ArgumentAxis>

          <ValueAxis name='frequency' position='left' tickInterval={300} />
          <ValueAxis
            name='percentage'
            position='right'
            tickInterval={20}
            showZero={true}
            valueMarginsEnabled={false}
          >
            <Label customizeText={customizePercentageText} />
            <ConstantLine value={80} width={2} color='#fc3535' dashStyle='dash'>
              <Label visible={false} />
            </ConstantLine>
          </ValueAxis>
          <Tooltip
            enabled={true}
            shared={true}
            customizeTooltip={customizeTooltip}
          />
          <Legend verticalAlignment='top' horizontalAlignment='center' />
        </Chart>
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
              // setTitle('Pareto STR 500/1000 Downtime External / Month ' + month + ' ' + value);
              setTitle('Pareto STR 500/1000 Downtime External / Month ?? ' + value);
            }}
            variant="outlined"
          /><br/>  
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id='demo-simple-select-outlined-label'>Month</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={month}
            onChange={handleChange}
            label='month'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Jan</MenuItem>
            <MenuItem value={2}>Feb</MenuItem>
            <MenuItem value={3}>Mar</MenuItem>
            <MenuItem value={4}>Apr</MenuItem>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={6}>Jun</MenuItem>
            <MenuItem value={7}>Jul</MenuItem>
            <MenuItem value={8}>Aug</MenuItem>
            <MenuItem value={9}>Sep</MenuItem>
            <MenuItem value={10}>Oct</MenuItem>
            <MenuItem value={11}>Nov</MenuItem>
            <MenuItem value={12}>Dec</MenuItem>
          </Select>         
        </FormControl>    
         </Grid>    
      </Container>
    </Container>
  );
};

export default ParetoFillAGPLBPM;
