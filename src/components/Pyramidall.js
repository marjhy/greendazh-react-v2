import React, { useState, useEffect } from "react";
// import { dataSource } from "./data.js";
import axios from "axios";
import "../style/styles.css";
import Container from "@material-ui/core/Container";

import Funnel, {
  Title,
  Margin,
  Tooltip,
  Item,
  Border,
  Legend,
  Label,
  Font,
} from "devextreme-react/funnel";

const Pyramid = () => {
  const [chartDataPyr, setChartDataPyr] = useState([]);
  const [chartDataPyrExt, setChartDataPyrExt] = useState([]);

  const chartPyramid = () => {
    let qf = [];
    let fs = [];
    axios
      .get("http://10.24.7.70:8080/auditpyramidinA")
      .then((res) => {
        console.log(res);
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
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("PYRAMID: ", chartDataPyr);
    console.log("PYRAMID FS: ", fs);
    console.log("PYRAMID QF: ", qf);
  };

  const chartPyramidExt = () => {
    let qf = [];
    let fs = [];
    axios
      .get("http://10.24.7.70:8080/auditpyramidexA")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.count));
          fs.push(dataObj.level);
        }
        // setChartDataPyrExt([
        //   { count: 1, level: "Unsafe Act/Condition" },
        //   { count: 1, level: "Near Misses" },
        //   { count: 1, level: "Firstaid" },
        //   { count: 1, level: "RDC/MTC" },
        //   { count: 1, level: "LTI" },
        //   { count: 1, level: "Fatality" },
        // ]);
        setChartDataPyrExt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("PYRAMID: ", chartDataPyr);
    console.log("PYRAMID FS: ", fs);
    console.log("PYRAMID QF: ", qf);
  };

  useEffect(() => {
    chartPyramid();
    chartPyramidExt();
  }, []);
  return (
    <Container>
      <Container>
        <Funnel
          id="pyramid"
          dataSource={chartDataPyr}
          sortData={true}
          inverted={true}
          colorField="#B22222"
          algorithm="dynamicHeight"
          palette="Harmony Light" //"Soft Pastel"
          argumentField="level"
          valueField="count"
        >
          <Title text="SAFETY PYRAMID INTERNAL ALL">
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
            horizontalAlignment="left"
            backgroundColor="none"
          >
            <Font size={16} />
          </Label>
        </Funnel>
      </Container>
      <br />
      <br />
      <Container>
        <Funnel
          id="pyramid"
          dataSource={chartDataPyrExt}
          sortData={true}
          inverted={true}
          algorithm="dynamicHeight"
          palette="Harmony Light" //"Soft Pastel"
          argumentField="level"
          valueField="count"
        >
          <Title text="SAFETY PYRAMID EXTERNAL ALL">
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
            horizontalAlignment="left"
            backgroundColor="none"
          >
            <Font size={16} />
          </Label>
        </Funnel>
      </Container>
    </Container>
  );
};

export default Pyramid;
