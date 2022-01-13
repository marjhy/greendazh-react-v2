import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Container from '@material-ui/core/Container';
import GaugeChart from 'react-gauge-chart';

const ChartOEEFill = () => {
  const [chartDataFst, setChartDataFst] = useState({});
  const [chartDataCst, setChartDataCst] = useState({});
  const [chartDataPst, setChartDataPst] = useState({});
  const [chartDataCat, setChartDataCat] = useState({});
  const [chartDataCat2, setChartDataCat2] = useState({});
  const [chartDataPot, setChartDataPot] = useState({});
  const [chartDataInt, setChartDataInt] = useState({});
  const [chartDataLoc, setChartDataLoc] = useState({});
  const [chartDataPotl, setChartDataCPotl] = useState({});
  const [chartDataOpDep, setChartDataOpDep] = useState({});
  const [chartDataOpDepPst, setChartDataOpDepPst] = useState({});
  const [chartDataOpDepCst, setChartDataOpDepCst] = useState({});
  //const [chartDataPYR, setChartDataCPYR] = useState({});
  //const [chartDataIntl, setChartDataCaIntl] = useState({});
  //const [chartDataDepoloc, setChartDataCatDepoloc] = useState({});
  //const [qtyFst, setQtyFst] = useState([]); //data
  //const [findSt, setFindSt] = useState([]); //label

  //FINDING AUDIT STATUS OPEN CLOSE %
  const chartPie1 = () => {
    let qf = [];
    let fs = [];
    axios
      .get('http://10.24.7.70:8080/OeeRtdPGPLBc/ranupani')
      .then((res) => {
        //console.log(res);
        for (const dataObj of res.data) {
          qf.push(parseInt(dataObj.OEE));
          fs.push(dataObj.Tanggal);
        }
        setChartDataFst({
          labels: fs,
          datasets: [
            {
              label: 'OEE',
              data: qf,
              backgroundColor: [
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
    //console.log("FINDING:", fs, qf);
  };

  //CORRECTIVE AUDIT STATUS OPEN CLOSE %
  const chartPie2 = () => {
    let qf = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/corstC')
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qf.push(parseInt(dataObj2.Qty));
          fs.push(dataObj2.corrective_status);
        }
        setChartDataCst({
          labels: fs,
          datasets: [
            {
              label: 'Open Close',
              data: qf,
              backgroundColor: [
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
    //console.log("CORRECTIVE:", fs, qf);
  };

  //PREVENTIVE AUDIT STATUS OPEN CLOSE %
  const chartPie3 = () => {
    let qf = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/prestC')
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qf.push(parseInt(dataObj2.Qty));
          fs.push(dataObj2.preventive_status);
        }
        setChartDataPst({
          labels: fs,
          datasets: [
            {
              label: 'Open Close',
              data: qf,
              backgroundColor: [
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
    //console.log("CORRECTIVE:", fs, qf);
  };

  //FA BY CATEGORY INSPECTION
  const chartCategory = () => {
    let qty = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/auditbhvcatIN')
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
              label: 'Category',
              data: qty,
              backgroundColor: [
                'rgba(123, 82, 235, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(143, 102, 215, 0.2)',
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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

  //FA BY CATEGORY ACT
  const chartCategory2 = () => {
    let qty = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/auditbhvcatOU')
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
              label: 'Category',
              data: qty,
              backgroundColor: [
                'rgba(123, 82, 235, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(143, 102, 215, 0.2)',
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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

  //FA BY POTENTIAL
  const chartPot = () => {
    let qty = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/auditbhvpot')
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
              label: 'Potential',
              data: qty,
              backgroundColor: [
                'rgba(123, 72, 235, 0.2)',
                'rgba(225, 139, 44, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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

  //FA BY LOCATION
  const chartLoc = () => {
    let qty = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/auditbhvloc')
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
              label: 'Location',
              data: qty,
              backgroundColor: [
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 139, 64, 0.2)',
                'rgba(235, 166, 86, 0.2)',
                'rgba(65, 152, 192, 0.2)',
                'rgba(133, 72, 255, 0.2)',
                'rgba(235, 139, 64, 0.2)',
                'rgba(235, 79, 132, 0.2)',
                'rgba(34, 142, 235, 0.2)',
                'rgba(235, 186, 86, 0.2)',
                'rgba(55, 172, 192, 0.2)',
                'rgba(133, 72, 255, 0.2)',
                'rgba(235, 139, 64, 0.2)',
                'rgba(255, 99, 122, 0.2)',
                'rgba(54, 162, 215, 0.2)',
                'rgba(255, 206, 66, 0.2)',
                'rgba(75, 192, 172, 0.2)',
                'rgba(153, 102, 235, 0.2)',
                'rgba(255, 139, 44, 0.2)',
                'rgba(235, 166, 66, 0.2)',
                'rgba(65, 152, 172, 0.2)',
                'rgba(133, 72, 235, 0.2)',
                'rgba(235, 139, 44, 0.2)',
                'rgba(45, 182, 192, 0.2)',
                'rgba(123, 82, 255, 0.2)',
                'rgba(225, 149, 64, 0.2)',
                'rgba(245, 109, 122, 0.2)',
                'rgba(44, 172, 215, 0.2)',
                'rgba(245, 216, 66, 0.2)',
                'rgba(65, 202, 172, 0.2)',
                'rgba(143, 112, 235, 0.2)',
                'rgba(245, 149, 44, 0.2)',
                'rgba(225, 176, 66, 0.2)',
                'rgba(55, 162, 172, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(225, 149, 44, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(225, 186, 66, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(225, 139, 44, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(143, 102, 215, 0.2)',
                'rgba(245, 139, 24, 0.2)',
                'rgba(225, 166, 46, 0.2)',
                'rgba(45, 152, 152, 0.2)',
                'rgba(123, 72, 215, 0.2)',
                'rgba(215, 139, 24, 0.2)',
                'rgba(35, 182, 172, 0.2)',
                'rgba(113, 82, 235, 0.2)',
                'rgba(215, 149, 44, 0.2)',
                'rgba(235, 109, 102, 0.2)',
                'rgba(34, 172, 195, 0.2)',
                'rgba(235, 216, 46, 0.2)',
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

  //FA BY INTERNAL 3RD PARTY
  const chartInt = () => {
    let qty = [];
    let fs = [];

    axios
      .get('http://10.24.7.70:8080/auditbhvint')
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
              label: 'Internal 3rd Party',
              data: qty,
              backgroundColor: [
                'rgba(0,255,127)', //green
                'rgba(250,128,114)', //red
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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

  // FA BY CATEGORY/LOCATION
  const chartPotL = () => {
    let qtyMtc = [];
    let qtyRtd = [];
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
      .get('http://10.24.7.70:8080/auditbhvcatl')
      .then((res) => {
        //console.log(res);

        for (const dataObj2 of res.data) {
          //qty = [dataObj2.Yogurt, dataObj2.Filling].join(",");
          //qty.push(parseInt([dataObj2.Yogurt, dataObj2.Filling].join(",")));
          qtyMtc.push(
            parseInt([dataObj2['Building & facility mtc']].join(','))
          );
          qtyRtd.push(parseInt([dataObj2.Yogurt].join(',')));
          qtyFil.push(parseInt([dataObj2.Filling].join(',')));
          qtyHR.push(parseInt([dataObj2['HR & GA']].join(',')));
          qtyLog.push(parseInt([dataObj2.Logistic].join(',')));
          qtyProc.push(parseInt([dataObj2['Processing Milk']].join(',')));
          qtyQA.push(parseInt([dataObj2['QA Laboratory']].join(',')));
          qtyQC.push(parseInt([dataObj2.QC].join(',')));
          qtySHE.push(parseInt([dataObj2.SHE].join(',')));
          qtyUti.push(parseInt([dataObj2.Utility].join(',')));
          qtyYog.push(parseInt([dataObj2.Yogurt].join(',')));

          //console.log(qtyRtd);
          // qty.push(parseInt(dataObj2.qty));
          fs.push(dataObj2.behaviour_category);
          //console.log(fs);
          // fs2.push(dataObj2.location);
        }
        setChartDataCPotl({
          labels: fs,
          datasets: [
            {
              label: 'Mtc',
              data: qtyMtc,
              backgroundColor: [
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Yogurt',
              data: qtyRtd,
              backgroundColor: [
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Filling',
              data: qtyFil,
              backgroundColor: [
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
                'rgba(24, 142, 215, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'HRGA',
              data: qtyHR,
              backgroundColor: [
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Logistic',
              data: qtyLog,
              backgroundColor: [
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Milk',
              data: qtyProc,
              backgroundColor: [
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QA',
              data: qtyQA,
              backgroundColor: [
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QC',
              data: qtyQC,
              backgroundColor: [
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'SHE',
              data: qtySHE,
              backgroundColor: [
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
                'rgba(44, 162, 195, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Utility',
              data: qtyUti,
              backgroundColor: [
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
                'rgba(245, 206, 46, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Yogurt',
              data: qtyYog,
              backgroundColor: [
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',
                'rgba(65, 192, 152, 0.2)',

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

  // FA BY OPENCLOSE/DEPT FSP
  const chartOpDep = () => {
    let qtyMtc = []; //eng
    let qtyRtd = []; //rtd
    let qtyFil = []; //milk
    let qtyHR = []; //hr
    let qtyLog = []; //log
    let qtyProc = []; //procurement
    let qtyQA = []; //qa
    let qtyQC = []; //qc
    let qtySHE = []; //she
    let qtyUti = []; //rnd
    let fs = [];
    const sEng = 'stack1';

    axios
      .get('http://10.24.7.70:8080/auditbhvDeptFst')
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qtyMtc.push(parseInt([dataObj2['ENGINEERING']].join(',')));
          qtyRtd.push(parseInt([dataObj2['CHYOG PRODUCTION']].join(',')));
          qtyFil.push(parseInt([dataObj2['MILK PRODUCTION']].join(',')));
          qtyHR.push(parseInt([dataObj2['HRGA']].join(',')));
          qtyLog.push(parseInt([dataObj2.LOGISTIC].join(',')));
          qtyProc.push(parseInt([dataObj2['PROCUREMENT']].join(',')));
          qtyQA.push(parseInt([dataObj2['QA']].join(',')));
          qtyQC.push(parseInt([dataObj2.QC].join(',')));
          qtySHE.push(parseInt([dataObj2['PERFORMANCE & SAFETY']].join(',')));
          qtyUti.push(parseInt([dataObj2['R&D']].join(',')));
          fs.push(dataObj2.finding_audit_status);
        }
        setChartDataOpDep({
          labels: fs,
          datasets: [
            {
              stack: sEng,
              label: 'Eng',
              data: qtyMtc,
              backgroundColor: [
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Yogurt',
              data: qtyRtd,
              backgroundColor: [
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Milk',
              data: qtyFil,
              backgroundColor: [
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
              ],
              borderWidth: 4,
            },
            {
              label: 'HRGA',
              data: qtyHR,
              backgroundColor: [
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Logistic',
              data: qtyLog,
              backgroundColor: [
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Procurement',
              data: qtyProc,
              backgroundColor: [
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QA',
              data: qtyQA,
              backgroundColor: [
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QC',
              data: qtyQC,
              backgroundColor: [
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'SHE',
              data: qtySHE,
              backgroundColor: [
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
              ],
              borderWidth: 4,
            },
            {
              label: 'RnD',
              data: qtyUti,
              backgroundColor: [
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
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

  // FA BY OPENCLOSE/DEPT PST
  const chartOpDepPst = () => {
    let qtyMtc = []; //eng
    let qtyRtd = []; //rtd
    let qtyFil = []; //milk
    let qtyHR = []; //hr
    let qtyLog = []; //log
    let qtyProc = []; //procurement
    let qtyQA = []; //qa
    let qtyQC = []; //qc
    let qtySHE = []; //she
    let qtyUti = []; //rnd
    let fs = [];
    const sEng = 'stack1';

    axios
      .get('http://10.24.7.70:8080/auditbhvDeptPst')
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qtyMtc.push(parseInt([dataObj2['ENGINEERING']].join(',')));
          qtyRtd.push(parseInt([dataObj2['CHYOG PRODUCTION']].join(',')));
          qtyFil.push(parseInt([dataObj2['MILK PRODUCTION']].join(',')));
          qtyHR.push(parseInt([dataObj2['HRGA']].join(',')));
          qtyLog.push(parseInt([dataObj2.LOGISTIC].join(',')));
          qtyProc.push(parseInt([dataObj2['PROCUREMENT']].join(',')));
          qtyQA.push(parseInt([dataObj2['QA']].join(',')));
          qtyQC.push(parseInt([dataObj2.QC].join(',')));
          qtySHE.push(parseInt([dataObj2['PERFORMANCE & SAFETY']].join(',')));
          qtyUti.push(parseInt([dataObj2['R&D']].join(',')));
          fs.push(dataObj2.preventive_status);
        }
        setChartDataOpDepPst({
          labels: fs,
          datasets: [
            {
              stack: sEng,
              label: 'Eng',
              data: qtyMtc,
              backgroundColor: [
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Yogurt',
              data: qtyRtd,
              backgroundColor: [
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Milk',
              data: qtyFil,
              backgroundColor: [
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
              ],
              borderWidth: 4,
            },
            {
              label: 'HRGA',
              data: qtyHR,
              backgroundColor: [
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Logistic',
              data: qtyLog,
              backgroundColor: [
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Procurement',
              data: qtyProc,
              backgroundColor: [
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QA',
              data: qtyQA,
              backgroundColor: [
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QC',
              data: qtyQC,
              backgroundColor: [
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'SHE',
              data: qtySHE,
              backgroundColor: [
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
              ],
              borderWidth: 4,
            },
            {
              label: 'RnD',
              data: qtyUti,
              backgroundColor: [
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
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

  // FA BY OPENCLOSE/DEPT CST
  const chartOpDepCst = () => {
    let qtyMtc = []; //eng
    let qtyRtd = []; //rtd
    let qtyFil = []; //milk
    let qtyHR = []; //hr
    let qtyLog = []; //log
    let qtyProc = []; //procurement
    let qtyQA = []; //qa
    let qtyQC = []; //qc
    let qtySHE = []; //she
    let qtyUti = []; //rnd
    let fs = [];
    const sEng = 'stack1';

    axios
      .get('http://10.24.7.70:8080/auditbhvDeptCst')
      .then((res) => {
        //console.log(res);
        for (const dataObj2 of res.data) {
          qtyMtc.push(parseInt([dataObj2['ENGINEERING']].join(',')));
          qtyRtd.push(parseInt([dataObj2['CHYOG PRODUCTION']].join(',')));
          qtyFil.push(parseInt([dataObj2['MILK PRODUCTION']].join(',')));
          qtyHR.push(parseInt([dataObj2['HRGA']].join(',')));
          qtyLog.push(parseInt([dataObj2.LOGISTIC].join(',')));
          qtyProc.push(parseInt([dataObj2['PROCUREMENT']].join(',')));
          qtyQA.push(parseInt([dataObj2['QA']].join(',')));
          qtyQC.push(parseInt([dataObj2.QC].join(',')));
          qtySHE.push(parseInt([dataObj2['PERFORMANCE & SAFETY']].join(',')));
          qtyUti.push(parseInt([dataObj2['R&D']].join(',')));
          fs.push(dataObj2.corrective_status);
        }
        setChartDataOpDepCst({
          labels: fs,
          datasets: [
            {
              stack: sEng,
              label: 'Eng',
              data: qtyMtc,
              backgroundColor: [
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
                'rgba(123, 82, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Yogurt',
              data: qtyRtd,
              backgroundColor: [
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
                'rgba(225, 119, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Milk',
              data: qtyFil,
              backgroundColor: [
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
                'rgba(64,224,208 ,1 )',
              ],
              borderWidth: 4,
            },
            {
              label: 'HRGA',
              data: qtyHR,
              backgroundColor: [
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
                'rgba(195, 186, 26, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Logistic',
              data: qtyLog,
              backgroundColor: [
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
                'rgba(45, 172, 172, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'Procurement',
              data: qtyProc,
              backgroundColor: [
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
                'rgba(123, 72, 235, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QA',
              data: qtyQA,
              backgroundColor: [
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
                'rgba(175, 79, 44, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'QC',
              data: qtyQC,
              backgroundColor: [
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
                'rgba(245, 99, 102, 0.2)',
              ],
              borderWidth: 4,
            },
            {
              label: 'SHE',
              data: qtySHE,
              backgroundColor: [
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
                'rgba(255,228,181 ,1)',
              ],
              borderWidth: 4,
            },
            {
              label: 'RnD',
              data: qtyUti,
              backgroundColor: [
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
                'rgba(189,183,107 ,1)',
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

  useEffect(() => {
    chartPie1();
    chartPie2();
    chartPie3();
    chartCategory();
    chartCategory2();
    chartPot();
    chartInt();
    chartLoc();
    chartPotL();
    chartOpDep();
    chartOpDepPst();
    chartOpDepCst();
  }, []);

  return (
    <Container>
      <Container id='wrapper'>
        <Container id='right'>
          <Pie
            id='chart'
            data={chartDataFst}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT STATUS OPEN CLOSE %',
                display: true,
                fontSize: 16,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
        <Container id='left'>
          <GaugeChart
            id='gauge-chart5'
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            percent={0.37}
            arcPadding={0.02}
          />
        </Container>
        <Container id='center'>
          <Pie
            id='chart'
            data={chartDataPst}
            options={{
              responsive: true,
              title: {
                text: 'PREVENTIVE STATUS OPEN CLOSE %',
                display: true,
                fontSize: 16,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
      </Container>
      <Container>
        <Container id='right'>
          <Bar
            data={chartDataCat}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by CATEGORY INSPECTION',
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
          <Bar
            data={chartDataCat2}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by CATEGORY ACT',
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
        </Container>
        <Container id='right'>
          <Bar
            data={chartDataPot}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by POTENTIAL',
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
        </Container>
        <Container id='right'>
          <Bar
            data={chartDataLoc}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by LOCATION',
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
        <Container id='right'>
          <Bar
            data={chartDataInt}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by INTERNAL/3RDPARTY',
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      min: 0,
                      stepSize: 50,
                    },
                  },
                ],
              },
            }}
          />
        </Container>
        <Container id='right'>
          <Bar
            data={chartDataPotl}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by CATEGORY/LOCATION',
                display: true,
                fontSize: 22,
                fontFamily: '"Segoe UI Light"',
              },
            }}
          />
        </Container>
      </Container>

      <Container>
        <Container id='right'>
          <Bar
            data={chartDataOpDep}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by OPEN CLOSE/DEPT',
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

        <Container id='right'>
          <Bar
            data={chartDataOpDepPst}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by PREVENTIVE OPEN CLOSE/DEPT',
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

        <Container id='right'>
          <Bar
            data={chartDataOpDepCst}
            options={{
              responsive: true,
              title: {
                text: 'FINDING AUDIT by CORRECTIVE OPEN CLOSE/DEPT',
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
      </Container>
    </Container>
  );
};

export default ChartOEEFill;
