import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import Container from "@material-ui/core/Container";

const BarChart = () => {
  // const [chartDataFst, setChartDataFst] = useState({});
  // const [chartDataCst, setChartDataCst] = useState({});
  // const [chartDataPst, setChartDataPst] = useState({});
  const [chartDataCat, setChartDataCat] = useState({});
  const [chartDataCat2, setChartDataCat2] = useState({});
  const [chartDataPot, setChartDataPot] = useState({});
  const [chartDataInt, setChartDataInt] = useState({});
  const [chartDataLoc, setChartDataLoc] = useState({});
  // const [chartDataCatl, setChartDataCatl] = useState({});
  const [chartDataPotl, setChartDataCPotl] = useState({});
  const [chartDataPYR, setChartDataCPYR] = useState({});
  const [chartDataPYR2, setChartDataCPYR2] = useState({});
  // const [chartDataIntl, setChartDataCaIntl] = useState({});
  // const [chartDataDepoloc, setChartDataCatDepoloc] = useState({});
  // const [qtyFst, setQtyFst] = useState([]); //data
  // const [findSt, setFindSt] = useState([]); //label

  // FINDING CATEGORY INTERNAL ALL
  const chartPyrCom = () => {
    let qtyFA = [];
    let qtyMTC = [];
    let qtyNM = [];
    let qtyUAC = [];
    let qtyFAT = [];
    let qtyLTI = [];
    let qtyRDC = [];
    let fs = [];
    // let fs2 = [];

    axios
      .get("http://10.24.7.70:8080/pyrcom")
      .then((res) => {
        //console.log(res);

        for (const dataObj2 of res.data) {
          qtyFA.push(parseInt([dataObj2["FirstAid"]].join(",")));
          qtyMTC.push(parseInt([dataObj2.MTC].join(",")));
          qtyNM.push(parseInt([dataObj2.Near_Miss].join(",")));
          qtyUAC.push(parseInt([dataObj2["Unsafe Act & Condition"]].join(",")));
          qtyFAT.push(parseInt([dataObj2.Fatality].join(",")));
          qtyLTI.push(parseInt([dataObj2["LTI"]].join(",")));
          qtyRDC.push(parseInt([dataObj2["RDC"]].join(",")));

          //console.log(qtyChs);
          // qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.year);
          //console.log(fs);
          // fs2.push(dataObj2.location);
        }
        setChartDataCPYR({
          labels: fs,
          datasets: [
            {
              label: "FirstAid",
              data: qtyFA,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "MTC",
              data: qtyMTC,
              backgroundColor: [
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Near_Miss",
              data: qtyNM,
              backgroundColor: [
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Unsafe Act & Condition",
              data: qtyUAC,
              backgroundColor: [
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Fatality",
              data: qtyFAT,
              backgroundColor: [
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "LTI",
              data: qtyLTI,
              backgroundColor: [
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "RDC",
              data: qtyRDC,
              backgroundColor: [
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
              ],
              borderWidth: 4,
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

  // FINDING CATEGORY EXTERNAL ALL
  const chartPyrCom2 = () => {
    let qtyFA2 = [];
    let qtyMTC2 = [];
    let qtyNM2 = [];
    let qtyUAC2 = [];
    let qtyFAT2 = [];
    let qtyLTI2 = [];
    let qtyRDC2 = [];
    let fs3 = [];
    // let fs2 = [];

    axios
      .get("http://10.24.7.70:8080/pyrcomE")
      .then((res) => {
        //console.log(res);

        for (const dataObj2 of res.data) {
          qtyFA2.push(parseInt([dataObj2["FirstAid"]].join(",")));
          qtyMTC2.push(parseInt([dataObj2.MTC].join(",")));
          qtyNM2.push(parseInt([dataObj2.Near_Miss].join(",")));
          qtyUAC2.push(
            parseInt([dataObj2["Unsafe Act & Condition"]].join(","))
          );
          qtyFAT2.push(parseInt([dataObj2.Fatality].join(",")));
          qtyLTI2.push(parseInt([dataObj2["LTI"]].join(",")));
          qtyRDC2.push(parseInt([dataObj2["RDC"]].join(",")));

          //console.log(qtyChs);
          // qty.push(parseInt(dataObj2.qty));
          fs3.push(dataObj2.year);
          //console.log(fs);
          // fs2.push(dataObj2.location);
        }
        setChartDataCPYR2({
          labels: fs3,
          datasets: [
            {
              label: "FirstAid",
              data: qtyFA2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "MTC",
              data: qtyMTC2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Near_Miss",
              data: qtyNM2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Unsafe Act & Condition",
              data: qtyUAC2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Fatality",
              data: qtyFAT2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "LTI",
              data: qtyLTI2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "RDC",
              data: qtyRDC2,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
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

  //FINDING AUDIT by CATEGOTY INSPECTION
  const chartCategory = () => {
    let qty = [];
    let fs = [];

    axios
      .get("http://10.24.7.70:8080/auditbhvcatINA")
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.behaviour_category);
        }
        setChartDataCat({
          labels: fs,
          datasets: [
            {
              label: "Category",
              data: qty,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],

              borderWidth: 4,
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

  //FINDING AUDIT by CATEGOTY ACT
  const chartCategory2 = () => {
    let qty = [];
    let fs = [];

    axios
      .get("http://10.24.7.70:8080/auditbhvcatOUA")
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.behaviour_category);
        }
        setChartDataCat2({
          labels: fs,
          datasets: [
            {
              label: "Category",
              data: qty,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],

              borderWidth: 4,
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

  //FINDING AUDIT by POTENTIAL
  const chartPot = () => {
    let qty = [];
    let fs = [];

    axios
      .get("http://10.24.7.70:8080/auditbhvpotA")
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.potential_hazarda);
        }
        setChartDataPot({
          labels: fs,
          datasets: [
            {
              label: "Potential",
              data: qty,
              backgroundColor: [
                "rgba(123, 72, 235, 0.2)",
                "rgba(225, 139, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              // borderColor: [
              //   "rgba(255, 99, 132, 1)",
              //   "rgba(54, 162, 235, 1)",
              //   "rgba(255, 206, 86, 1)",
              //   "rgba(75, 192, 192, 1)",
              //   "rgba(153, 102, 255, 1)",
              //   "rgba(255, 159, 64, 1)",
              // ],
              borderWidth: 4,
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

  //FA BY internal/3rdparty all
  const chartInt = () => {
    let qty = [];
    let fs = [];

    axios
      .get("http://10.24.7.70:8080/auditbhvintA")
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.internal_3rdparty);
        }
        setChartDataInt({
          labels: fs,
          datasets: [
            {
              label: "Internal 3rd Party",
              data: qty,
              backgroundColor: [
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                //"rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              // borderColor: [
              //   "rgba(255, 99, 132, 1)",
              //   "rgba(54, 162, 235, 1)",
              //   "rgba(255, 206, 86, 1)",
              //   "rgba(75, 192, 192, 1)",
              //   "rgba(153, 102, 255, 1)",
              //   "rgba(255, 159, 64, 1)",
              // ],
              borderWidth: 4,
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

  //FA BY LOCATION ALL
  const chartLoc = () => {
    let qty = [];
    let fs = [];

    axios
      .get("http://10.24.7.70:8080/auditbhvlocA")
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.locationa);
        }
        setChartDataLoc({
          labels: fs,
          datasets: [
            {
              label: "Location",
              data: qty,
              backgroundColor: [
                "rgba(0,255,127)", //green
                "rgba(250,128,114)", //red
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 139, 64, 0.2)",
                "rgba(235, 166, 86, 0.2)",
                "rgba(65, 152, 192, 0.2)",
                "rgba(133, 72, 255, 0.2)",
                "rgba(235, 139, 64, 0.2)",
                "rgba(235, 79, 132, 0.2)",
                "rgba(34, 142, 235, 0.2)",
                "rgba(235, 186, 86, 0.2)",
                "rgba(55, 172, 192, 0.2)",
                "rgba(133, 72, 255, 0.2)",
                "rgba(235, 139, 64, 0.2)",
                "rgba(255, 99, 122, 0.2)",
                "rgba(54, 162, 215, 0.2)",
                "rgba(255, 206, 66, 0.2)",
                "rgba(75, 192, 172, 0.2)",
                "rgba(153, 102, 235, 0.2)",
                "rgba(255, 139, 44, 0.2)",
                "rgba(235, 166, 66, 0.2)",
                "rgba(65, 152, 172, 0.2)",
                "rgba(133, 72, 235, 0.2)",
                "rgba(235, 139, 44, 0.2)",
                "rgba(45, 182, 192, 0.2)",
                "rgba(123, 82, 255, 0.2)",
                "rgba(225, 149, 64, 0.2)",
                "rgba(245, 109, 122, 0.2)",
                "rgba(44, 172, 215, 0.2)",
                "rgba(245, 216, 66, 0.2)",
                "rgba(65, 202, 172, 0.2)",
                "rgba(143, 112, 235, 0.2)",
                "rgba(245, 149, 44, 0.2)",
                "rgba(225, 176, 66, 0.2)",
                "rgba(55, 162, 172, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(225, 149, 44, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(225, 186, 66, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(225, 139, 44, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(143, 102, 215, 0.2)",
                "rgba(245, 139, 24, 0.2)",
                "rgba(225, 166, 46, 0.2)",
                "rgba(45, 152, 152, 0.2)",
                "rgba(123, 72, 215, 0.2)",
                "rgba(215, 139, 24, 0.2)",
                "rgba(35, 182, 172, 0.2)",
                "rgba(113, 82, 235, 0.2)",
                "rgba(215, 149, 44, 0.2)",
                "rgba(235, 109, 102, 0.2)",
                "rgba(34, 172, 195, 0.2)",
                "rgba(235, 216, 46, 0.2)",
              ],
              // borderColor: [
              //   "rgba(255, 99, 132, 1)",
              //   "rgba(54, 162, 235, 1)",
              //   "rgba(255, 206, 86, 1)",
              //   "rgba(75, 192, 192, 1)",
              //   "rgba(153, 102, 255, 1)",
              //   "rgba(255, 159, 64, 1)",
              // ],
              borderWidth: 4,
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

  // FA BY CATEGORY/LOCATION ALL
  const chartPotL = () => {
    let qtyMtc = [];
    let qtyChs = [];
    let qtyFil = [];
    let qtyHR = [];
    let qtyLog = [];
    let qtyProc = [];
    let qtyQA = [];
    let qtyQC = [];
    let qtySHE = [];
    let qtyUti = [];
    let qtyYog = [];
    let fs = [];
    // let fs2 = [];

    axios
      .get("http://10.24.7.70:8080/auditbhvcatlA")
      .then((res) => {
        //console.log(res);

        for (const dataObj2 of res.data) {
          //qty = [dataObj2.Cheese, dataObj2.Filling].join(",");
          //qty.push(parseInt([dataObj2.Cheese, dataObj2.Filling].join(",")));
          qtyMtc.push(
            parseInt([dataObj2["Building & facility mtc"]].join(","))
          );
          qtyChs.push(parseInt([dataObj2.Cheese].join(",")));
          qtyFil.push(parseInt([dataObj2.Filling].join(",")));
          qtyHR.push(parseInt([dataObj2["HR & GA"]].join(",")));
          qtyLog.push(parseInt([dataObj2.Logistic].join(",")));
          qtyProc.push(parseInt([dataObj2["Processing Milk"]].join(",")));
          qtyQA.push(parseInt([dataObj2["QA Laboratory"]].join(",")));
          qtyQC.push(parseInt([dataObj2.QC].join(",")));
          qtySHE.push(parseInt([dataObj2.SHE].join(",")));
          qtyUti.push(parseInt([dataObj2.Utility].join(",")));
          qtyYog.push(parseInt([dataObj2.Yogurt].join(",")));

          //console.log(qtyChs);
          // qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.behaviour_category);
          //console.log(fs);
          // fs2.push(dataObj2.location);
        }
        setChartDataCPotl({
          labels: fs,
          datasets: [
            {
              label: "Mtc",
              data: qtyMtc,
              backgroundColor: [
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
                "rgba(123, 82, 235, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Cheese",
              data: qtyChs,
              backgroundColor: [
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
                "rgba(225, 119, 44, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Filling",
              data: qtyFil,
              backgroundColor: [
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
                "rgba(24, 142, 215, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "HRGA",
              data: qtyHR,
              backgroundColor: [
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
                "rgba(195, 186, 26, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Logistic",
              data: qtyLog,
              backgroundColor: [
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
                "rgba(45, 172, 172, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Milk",
              data: qtyProc,
              backgroundColor: [
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
                "rgba(123, 72, 235, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "QA",
              data: qtyQA,
              backgroundColor: [
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
                "rgba(175, 79, 44, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "QC",
              data: qtyQC,
              backgroundColor: [
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
                "rgba(245, 99, 102, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "SHE",
              data: qtySHE,
              backgroundColor: [
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
                "rgba(44, 162, 195, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Utility",
              data: qtyUti,
              backgroundColor: [
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
                "rgba(245, 206, 46, 0.2)",
              ],
              borderWidth: 4,
            },
            {
              label: "Yogurt",
              data: qtyYog,
              backgroundColor: [
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",
                "rgba(65, 192, 152, 0.2)",

                // "rgba(123, 82, 235, 0.2)",
                // "rgba(225, 119, 44, 0.2)",
                // "rgba(24, 142, 215, 0.2)",
                // "rgba(195, 186, 26, 0.2)",
                // "rgba(45, 172, 172, 0.2)",
                // "rgba(123, 72, 235, 0.2)",
                // "rgba(175, 79, 44, 0.2)",
                // "rgba(245, 99, 102, 0.2)",
                // "rgba(44, 162, 195, 0.2)",
                // "rgba(245, 206, 46, 0.2)",
                // "rgba(65, 192, 152, 0.2)",
                // "rgba(143, 102, 215, 0.2)",
                // "rgba(0,255,127)", //green
                // "rgba(250,128,114)", //red
                // "rgba(255, 206, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(255, 159, 64, 0.2)",
              ],
              borderWidth: 4,
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

  //////////////

  useEffect(() => {
    chartCategory();
    chartCategory2();
    chartPot();
    chartInt();
    chartLoc();
    chartPotL();
    chartPyrCom();
    chartPyrCom2();
  }, []);

  return (
    <Container>
      <Container id="right">
        <Bar
          data={chartDataPYR}
          options={{
            responsive: true,
            title: {
              text: "FINDING CATEGORY INTERNAL ALL",
              display: true,
              fontSize: 22,
              fontFamily: '"Segoe UI Light"',
            },
          }}
        />
      </Container>
      <Container id="right">
        <Bar
          data={chartDataPYR2}
          options={{
            responsive: true,
            title: {
              text: "FINDING CATEGORY EXTERNAL ALL",
              display: true,
              fontSize: 22,
              fontFamily: '"Segoe UI Light"',
            },
          }}
        />
      </Container>

      <Container>
        <Container id="right">
          <Bar
            data={chartDataCat}
            options={{
              responsive: true,
              title: {
                text: "FINDING AUDIT by CATEGOTY INSPECTION",
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      stepSize: 25,
                    },
                  },
                ],
              },
            }}
          />
          <Bar
            data={chartDataCat2}
            options={{
              responsive: true,
              title: {
                text: "FINDING AUDIT by CATEGORY ACT",
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      stepSize: 10,
                    },
                  },
                ],
              },
            }}
          />
        </Container>
        <Container id="right">
          <Bar
            data={chartDataPot}
            options={{
              responsive: true,
              title: {
                text: "FINDING AUDIT by POTENTIAL",
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
        <Container id="right">
          <Bar
            data={chartDataLoc}
            options={{
              responsive: true,
              title: {
                text: "FINDING AUDIT by LOCATION ALL",
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
        <Container id="right">
          <Bar
            data={chartDataInt}
            options={{
              responsive: true,
              title: {
                text: "FINDING AUDIT by INTERNAL/3RDPARTY ALL",
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      stepSize: 100,
                    },
                  },
                ],
              },
            }}
          />
        </Container>
        <Container id="right">
          <Bar
            data={chartDataPotl}
            options={{
              responsive: true,
              title: {
                text: "FINDING AUDIT by CATEGORY/LOCATION ALL",
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
      </Container>

      <Container></Container>
    </Container>
  );
};

export default BarChart;
