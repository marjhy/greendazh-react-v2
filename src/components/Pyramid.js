import React, { useState, useEffect } from 'react';
//import { dataSource } from "./data.js";
import axios from 'axios';
import '../style/styles.css';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Pyramid = () => {
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
  const [chartTitleE, setChartTitleE] = useState([]);

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

  const chartPyramid = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidin')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }
        // setChartDataPyr([
        //   { count: 300000, level: "Unsafe Act/Condition" },
        //   { count: 30000, level: "Near Misses" },
        //   { count: 3000, level: "Firstaid" },
        //   { count: 300, level: "RDC/MTC" },
        //   { count: 30, level: "LTI" },
        //   { count: 1, level: "Fatality" },
        // ]);
        setChartDataPyr(res.data);
        setChartDataPyrmid(res.data);
        setChartTitle('SAFETY PYRAMID INTERNAL YEAR');
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  const chartPyramidExt = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidex')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }
        setChartDataPyrExt(res.data);
        setChartDataPyrmidE(res.data);
        setChartTitleE('SAFETY PYRAMID EXTERNAL YEAR');
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  //week Internal WEEK
  const chartPyramidW = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidinw')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }

        setChartDataPyrW(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  //week External WEEK
  const chartPyramidWExt = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidexw')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }

        setChartDataPyrWExt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  //week Internal MONTH
  const chartPyramidM = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidinM')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }

        setChartDataPyrM(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  //week External MONTH
  const chartPyramidMExt = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidexM')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }

        setChartDataPyrMExt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  //year Internal ALL
  const chartPyramidA = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidinA')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }
        // setChartDataPyr([
        //   { count: 300000, level: "Unsafe Act/Condition" },
        //   { count: 30000, level: "Near Misses" },
        //   { count: 3000, level: "Firstaid" },
        //   { count: 300, level: "RDC/MTC" },
        //   { count: 30, level: "LTI" },
        //   { count: 1, level: "Fatality" },
        // ]);
        setChartDataAPyr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("PYRAMID: ", chartDataPyr);
    // console.log("PYRAMID FS: ", fs);
    // console.log("PYRAMID QF: ", qf);
  };

  //year External ALL
  const chartPyramidAExt = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/auditpyramidexA')
      .then((res) => {
        // console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }
        // setChartDataPyr([
        //   { count: 300000, level: "Unsafe Act/Condition" },
        //   { count: 30000, level: "Near Misses" },
        //   { count: 3000, level: "Firstaid" },
        //   { count: 300, level: "RDC/MTC" },
        //   { count: 30, level: "LTI" },
        //   { count: 1, level: "Fatality" },
        // ]);
        setChartDataPyrAExt(res.data);
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
    chartPyramidW();
    chartPyramidWExt();
    chartPyramidM();
    chartPyramidMExt();
    chartPyramidA();
    chartPyramidAExt();
  }, []);

  return (
    <Container>
      <Container>
        <Funnel
          id='pyramid'
          dataSource={chartDataPyramid}
          sortData={true}
          inverted={true}
          colorField='#B22222'
          algorithm='dynamicHeight'
          palette='Carmine' //"Soft Pastel" 'Harmony Light'
          argumentField='level'
          valueField='count'
        >
          <Title text={chartTitle}>
            <Margin bottom={30} />
          </Title>
          <Tooltip enabled={true} />
          <Item>
            <Border visible={true} />
          </Item>
          <Legend visible={true} />
          <Label
            visible={true}
            showForZeroValues={true}
            horizontalAlignment='left'
            backgroundColor='none'
          >
            <Font size={16} />
          </Label>
        </Funnel>
        <div className={classes.root}>
          <ButtonGroup
            variant='text'
            color='primary'
            aria-label='text primary button group'
          >
            <Button type='button' onClick={tombolPyramidAll}>
              All
            </Button>
            <Button type='button' onClick={tombolPyramidYear}>
              Year
            </Button>
            <Button type='button' onClick={tombolPyramidMonth}>
              Month
            </Button>
            <Button type='button' onClick={tombolPyramidWeek}>
              Week
            </Button>
          </ButtonGroup>
        </div>
      </Container>
      <br />
      <br />
      <Container>
        <Funnel
          id='pyramid'
          dataSource={chartDataPyramidE}
          sortData={true}
          inverted={true}
          colorField='#B22222'
          algorithm='dynamicHeight'
          palette='Carmine' //"Soft Pastel"
          argumentField='level'
          valueField='count'
        >
          <Title text={chartTitleE}>
            <Margin bottom={30} />
          </Title>
          <Tooltip enabled={true} />
          <Item>
            <Border visible={true} />
          </Item>
          <Legend visible={true} />
          <Label
            visible={true}
            showForZeroValues={true}
            horizontalAlignment='left'
            backgroundColor='none'
          >
            <Font size={16} />
          </Label>
        </Funnel>
        <div className={classes.root}>
          <ButtonGroup
            variant='text'
            color='primary'
            aria-label='text primary button group'
          >
            <Button type='button' onClick={tombolPyramidAllE}>
              All
            </Button>
            <Button type='button' onClick={tombolPyramidYearE}>
              Year
            </Button>
            <Button type='button' onClick={tombolPyramidMonthE}>
              Month
            </Button>
            <Button type='button' onClick={tombolPyramidWeekE}>
              Week
            </Button>
          </ButtonGroup>
        </div>
      </Container>
      <br />
      <br />
    </Container>
  );
};

export default Pyramid;
