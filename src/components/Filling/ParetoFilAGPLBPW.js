import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

// import { dataSource } from "./data.js";
import axios from 'axios';
import '../../style/styles.css';
import Container from '@material-ui/core/Container';

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

const ParetoFilAGPLBPW = () => {
  const classes = useStyles();
  const [chartDataPyr, setChartDataPyr] = useState([]);
  let d = new Date();
  let n = d.getMonth();
  let currentMonth = n + 1;
  let oneJan = new Date(d.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
  let week = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);
  let currentWeek = week - 2;

  const [minggu, setMinggu] = useState(currentWeek);
  const [title, setTitle] = useState(
    'Pareto Line B Downtime All / Week #' + minggu
  );

  const handleChange2 = (event) => {
    setMinggu(event.target.value);
    setTitle('Pareto Line B Downtime All / Week #' + event.target.value);
  };

  const getDataFromAPI = () => {
    let DT1 = [];
    let JD1 = [];

    axios
      .get('http://10.24.7.70:8080/OeeFilAGPLBPW')
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
  }, []);

  const data = chartDataPyr.sort(function (a, b) {
    return b.Downtime - a.Downtime;
  });

  const totalCount = data.reduce(function (prevValue, item) {
    return prevValue + item.Downtime;
  }, 0);

  let cumulativeCount = 0;

  const dataArray = data.map(function (item) {
    cumulativeCount += item.Downtime;
    if (item.Minggu == minggu) {
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

        <TextField
          id='standard-number'
          label='Week'
          type='number'
          value={minggu}
          onChange={handleChange2}
          InputLabelProps={{
            shrink: true,
            max: 100,
            min: 10,
          }}
        />
      </Container>
    </Container>
  );
};

export default ParetoFilAGPLBPW;
