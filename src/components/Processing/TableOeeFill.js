import React, { useState, useEffect } from 'react';
import '../../App.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const API_HOST = 'http://10.24.7.70:8080';
//const API_HOST = 'http://localhost:8080';
//http://localhost:8080/OeeMilPGPL
//const API_HOST2 = "http://10.24.7.70:8080";

//const INVENTORY_API_URL = `${API_HOST}/OeeMilPGPLB`;

const INVENTORY_API_URLDB = `${API_HOST}/OeeMilAGPLBc`; //OeeMilAGPLBc //OeeMilPGPLB
const INVENTORY_API_URLDC = `${API_HOST}/OeeMilAGPLCc`;
const INVENTORY_API_URLDD = `${API_HOST}/OeeMilAGPLDc`;

const INVENTORY_API_URLWB = `${API_HOST}/OeeMilAGPLWBc`;
const INVENTORY_API_URLWC = `${API_HOST}/OeeMilAGPLWCc`;
const INVENTORY_API_URLWD = `${API_HOST}/OeeMilAGPLWDc`;

const INVENTORY_API_URLMB = `${API_HOST}/OeeMilAGPLMBc`;
const INVENTORY_API_URLMC = `${API_HOST}/OeeMilAGPLMCc`;
const INVENTORY_API_URLMD = `${API_HOST}/OeeMilAGPLMDc`;

//defaults.global.tooltips.enabled = false;
//defaults.global.legend.position = "top";

const columns = [
  { id: 'Tanggal', label: 'Date', minWidth: 20 },
  // { id: 'GroupShift', label: 'Group Shift', minWidth: 20 },
  { id: 'ProductionTime', label: 'Production Time', minWidth: 50 },
  { id: 'TotalProduction', label: 'Total Production', minWidth: 50 },
  // { id: 'AvailableTime', label: 'Operation Time', minWidth: 50 },
  // { id: 'ActualRunning', label: 'Actual Running', minWidth: 50 },
  { id: 'Avaibility', label: 'Avaibility', minWidth: 50 },
  { id: 'performance', label: 'Performance', minWidth: 50 },
  { id: 'Quality', label: 'Quality', minWidth: 50 },
  { id: 'PE', label: 'PE', minWidth: 50 },
  { id: 'OE', label: 'OE', minWidth: 50 },
  { id: 'OEE', label: 'OEE', minWidth: 50 },
  { id: 'HasilProdALoss', label: 'Hasil Prod After Loss', minWidth: 50 },
  { id: 'RunningTime', label: 'Running Time', minWidth: 50 },
  // { id: 'LossSpeed', label: 'Loss Speed', minWidth: 50 },
  { id: 'NetProdTime', label: 'Net Prod Time', minWidth: 50 },
  { id: 'NotReported', label: 'Not Reported', minWidth: 50 },
  { id: 'ProdActivity', label: 'Prod Activity', minWidth: 50 },
  { id: 'QualityLosses', label: 'Quality Losses', minWidth: 50 },
  // { id: 'RejectFillingPcs', label: 'Reject Filling Pcs', minWidth: 50 },
  // { id: 'RejectPackingPcs', label: 'Reject Packing Pcs', minWidth: 50 },
  // { id: 'SamplePcs', label: 'SamplePcs', minWidth: 50 },
  { id: 'TotalDowntimeExt', label: 'Total Downtime Ext', minWidth: 50 },
  { id: 'TotalDowntimeInt', label: 'Total Downtime Int', minWidth: 50 },
];

const columnsW = [
  { id: 'Minggu', label: 'Week', minWidth: 20 },
  // { id: 'GroupShift', label: 'Group Shift', minWidth: 20 },
  { id: 'ProductionTime', label: 'Production Time', minWidth: 50 },
  { id: 'TotalProduction', label: 'Total Production', minWidth: 50 },
  // { id: 'AvailableTime', label: 'Operation Time', minWidth: 50 },
  // { id: 'ActualRunning', label: 'Actual Running', minWidth: 50 },
  { id: 'Avaibility', label: 'Avaibility', minWidth: 50 },
  { id: 'performance', label: 'Performance', minWidth: 50 },
  { id: 'Quality', label: 'Quality', minWidth: 50 },
  { id: 'PE', label: 'PE', minWidth: 50 },
  { id: 'OE', label: 'OE', minWidth: 50 },
  { id: 'OEE', label: 'OEE', minWidth: 50 },
  // { id: 'FinishGoodPcs', label: 'Finish Good Pcs', minWidth: 50 },
  { id: 'HasilProdALoss', label: 'Hasil Prod After Loss', minWidth: 50 },
  { id: 'RunningTime', label: 'Running Time', minWidth: 50 },
  // { id: 'LossSpeed', label: 'Loss Speed', minWidth: 50 },
  { id: 'NetProdTime', label: 'Net Prod Time', minWidth: 50 },
  { id: 'NotReported', label: 'Not Reported', minWidth: 50 },
  { id: 'ProdActivity', label: 'Prod Activity', minWidth: 50 },
  { id: 'QualityLosses', label: 'Quality Losses', minWidth: 50 },
  // { id: 'RejectFillingPcs', label: 'Reject Filling Pcs', minWidth: 50 },
  // { id: 'RejectPackingPcs', label: 'Reject Packing Pcs', minWidth: 50 },
  // { id: 'SamplePcs', label: 'SamplePcs', minWidth: 50 },
  { id: 'TotalDowntimeExt', label: 'Total Downtime Ext', minWidth: 50 },
  { id: 'TotalDowntimeInt', label: 'Total Downtime Int', minWidth: 50 },
];

const columnsM = [
  { id: 'Bulan', label: 'Month', minWidth: 20 },
  // { id: 'GroupShift', label: 'Group Shift', minWidth: 20 },
  { id: 'ProductionTime', label: 'Production Time', minWidth: 50 },
  { id: 'TotalProduction', label: 'Total Production', minWidth: 50 },
  // { id: 'AvailableTime', label: 'Operation Time', minWidth: 50 },
  // { id: 'ActualRunning', label: 'Actual Running', minWidth: 50 },
  { id: 'Avaibility', label: 'Avaibility', minWidth: 50 },
  { id: 'performance', label: 'Performance', minWidth: 50 },
  { id: 'Quality', label: 'Quality', minWidth: 50 },
  { id: 'PE', label: 'PE', minWidth: 50 },
  { id: 'OE', label: 'OE', minWidth: 50 },
  { id: 'OEE', label: 'OEE', minWidth: 50 },
  // { id: 'FinishGoodPcs', label: 'Finish Good Pcs', minWidth: 50 },
  { id: 'HasilProdALoss', label: 'Hasil Prod After Loss', minWidth: 50 },
  { id: 'RunningTime', label: 'Running Time', minWidth: 50 },
  // { id: 'LossSpeed', label: 'Loss Speed', minWidth: 50 },
  { id: 'NetProdTime', label: 'Net Prod Time', minWidth: 50 },
  { id: 'NotReported', label: 'Not Reported', minWidth: 50 },
  { id: 'ProdActivity', label: 'Prod Activity', minWidth: 50 },
  { id: 'QualityLosses', label: 'Quality Losses', minWidth: 50 },
  // { id: 'RejectFillingPcs', label: 'Reject Filling Pcs', minWidth: 50 },
  // { id: 'RejectPackingPcs', label: 'Reject Packing Pcs', minWidth: 50 },
  // { id: 'SamplePcs', label: 'SamplePcs', minWidth: 50 },
  { id: 'TotalDowntimeExt', label: 'Total Downtime Ext', minWidth: 50 },
  { id: 'TotalDowntimeInt', label: 'Total Downtime Int', minWidth: 50 },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 655,
  },
  divider: {
    // Theme Color, or use css color in quote
    background: 'white',
    color: 'white',
  },
});
//
const TableOeeFill = () => {
  const [data, setData] = useState([]);
  const [dataOeeDB, setDataOeeDB] = useState([]);
  const [dataOeeDC, setDataOeeDC] = useState([]);
  const [dataOeeDD, setDataOeeDD] = useState([]);

  const [dataOeeWB, setDataOeeWB] = useState([]);
  const [dataOeeWC, setDataOeeWC] = useState([]);
  const [dataOeeWD, setDataOeeWD] = useState([]);

  const [dataOeeMB, setDataOeeMB] = useState([]);
  const [dataOeeMC, setDataOeeMC] = useState([]);
  const [dataOeeMD, setDataOeeMD] = useState([]);

  ///////////////// header fix
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [page2, setPage2] = React.useState(0);
  const [rowsPerPage2, setRowsPerPage2] = React.useState(10);
  const handleChangePage2 = (event, newPage) => {
    setPage2(newPage);
  };
  const handleChangeRowsPerPage2 = (event) => {
    setRowsPerPage2(+event.target.value);
    setPage2(0);
  };

  const [page3, setPage3] = React.useState(0);
  const [rowsPerPage3, setRowsPerPage3] = React.useState(10);
  const handleChangePage3 = (event, newPage) => {
    setPage3(newPage);
  };
  const handleChangeRowsPerPage3 = (event) => {
    setRowsPerPage3(+event.target.value);
    setPage3(0);
  };

  const [page4, setPage4] = React.useState(0);
  const [rowsPerPage4, setRowsPerPage4] = React.useState(10);
  const handleChangePage4 = (event, newPage) => {
    setPage4(newPage);
  };
  const handleChangeRowsPerPage4 = (event) => {
    setRowsPerPage4(+event.target.value);
    setPage4(0);
  };

  const [page5, setPage5] = React.useState(0);
  const [rowsPerPage5, setRowsPerPage5] = React.useState(10);
  const handleChangePage5 = (event, newPage) => {
    setPage5(newPage);
  };
  const handleChangeRowsPerPage5 = (event) => {
    setRowsPerPage5(+event.target.value);
    setPage5(0);
  };

  const [page6, setPage6] = React.useState(0);
  const [rowsPerPage6, setRowsPerPage6] = React.useState(10);
  const handleChangePage6 = (event, newPage) => {
    setPage6(newPage);
  };
  const handleChangeRowsPerPage6 = (event) => {
    setRowsPerPage6(+event.target.value);
    setPage6(0);
  };

  const [page7, setPage7] = React.useState(0);
  const [rowsPerPage7, setRowsPerPage7] = React.useState(10);
  const handleChangePage7 = (event, newPage) => {
    setPage7(newPage);
  };
  const handleChangeRowsPerPage7 = (event) => {
    setRowsPerPage7(+event.target.value);
    setPage7(0);
  };

  const [page8, setPage8] = React.useState(0);
  const [rowsPerPage8, setRowsPerPage8] = React.useState(10);
  const handleChangePage8 = (event, newPage) => {
    setPage8(newPage);
  };
  const handleChangeRowsPerPage8 = (event) => {
    setRowsPerPage8(+event.target.value);
    setPage8(0);
  };

  const [page9, setPage9] = React.useState(0);
  const [rowsPerPage9, setRowsPerPage9] = React.useState(10);
  const handleChangePage9 = (event, newPage) => {
    setPage9(newPage);
  };
  const handleChangeRowsPerPage9 = (event) => {
    setRowsPerPage9(+event.target.value);
    setPage9(0);
  };

  ///////////////// end header fix

  //get data from database
  const fetchInventory = () => {
    fetch(`${INVENTORY_API_URLDB}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const fetchInventoryDC = () => {
    fetch(`${INVENTORY_API_URLDC}`)
      .then((res) => res.json())
      .then((json) => setDataOeeDC(json));
  };

  const fetchInventoryDD = () => {
    fetch(`${INVENTORY_API_URLDD}`)
      .then((res) => res.json())
      .then((json) => setDataOeeDD(json));
  };

  const fetchInventoryWB = () => {
    fetch(`${INVENTORY_API_URLWB}`)
      .then((res) => res.json())
      .then((json) => setDataOeeWB(json));
  };

  const fetchInventoryWC = () => {
    fetch(`${INVENTORY_API_URLWC}`)
      .then((res) => res.json())
      .then((json) => setDataOeeWC(json));
  };
  const fetchInventoryWD = () => {
    fetch(`${INVENTORY_API_URLWD}`)
      .then((res) => res.json())
      .then((json) => setDataOeeWD(json));
  };

  const fetchInventoryMB = () => {
    fetch(`${INVENTORY_API_URLMB}`)
      .then((res) => res.json())
      .then((json) => setDataOeeMB(json));
  };

  const fetchInventoryMC = () => {
    fetch(`${INVENTORY_API_URLMC}`)
      .then((res) => res.json())
      .then((json) => setDataOeeMC(json));
  };
  const fetchInventoryMD = () => {
    fetch(`${INVENTORY_API_URLMD}`)
      .then((res) => res.json())
      .then((json) => setDataOeeMD(json));
  };

  useEffect(() => {
    fetchInventory();
    fetchInventoryDC();
    fetchInventoryDD();
    fetchInventoryWB();
    fetchInventoryWC();
    fetchInventoryWD();
    fetchInventoryMB();
    fetchInventoryMC();
    fetchInventoryMD();
  }, []);

  return (
    <Container className='container'>
      <Paper className={classes.root}>
        <h1>DAILY - OEE PROCESSING MILK - ALL GROUP - FLEX 1</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeDD
                .slice(
                  page3 * rowsPerPage3,
                  page3 * rowsPerPage3 + rowsPerPage3
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeDD.length}
          rowsPerPage={rowsPerPage3}
          page={page3}
          onChangePage={handleChangePage3}
          onChangeRowsPerPage={handleChangeRowsPerPage3}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>DAILY - OEE PROCESSING MILK - ALL GROUP - FLEX 2</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>DAILY - OEE PROCESSING MILK - ALL GROUP - GEA</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeDC
                .slice(
                  page2 * rowsPerPage2,
                  page2 * rowsPerPage2 + rowsPerPage2
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeDC.length}
          rowsPerPage={rowsPerPage2}
          page={page2}
          onChangePage={handleChangePage2}
          onChangeRowsPerPage={handleChangeRowsPerPage2}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>WEEKLY - OEE PROCESSING MILK - ALL GROUP - FLEX 1</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columnsW.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeWD
                .slice(
                  page6 * rowsPerPage6,
                  page6 * rowsPerPage6 + rowsPerPage6
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columnsW.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeWD.length}
          rowsPerPage={rowsPerPage6}
          page={page6}
          onChangePage={handleChangePage6}
          onChangeRowsPerPage={handleChangeRowsPerPage6}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>WEEKLY - OEE PROCESSING MILK - ALL GROUP - FLEX 2</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columnsW.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeWB
                .slice(
                  page4 * rowsPerPage4,
                  page4 * rowsPerPage4 + rowsPerPage4
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columnsW.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeWB.length}
          rowsPerPage={rowsPerPage4}
          page={page4}
          onChangePage={handleChangePage4}
          onChangeRowsPerPage={handleChangeRowsPerPage4}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>WEEKLY - OEE PROCESSING MILK - ALL GROUP - GEA</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columnsW.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeWC
                .slice(
                  page5 * rowsPerPage5,
                  page5 * rowsPerPage5 + rowsPerPage5
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columnsW.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeWC.length}
          rowsPerPage={rowsPerPage5}
          page={page5}
          onChangePage={handleChangePage5}
          onChangeRowsPerPage={handleChangeRowsPerPage5}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>MONTHLY - OEE PROCESSING MILK - ALL GROUP - FLEX 1</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columnsM.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeMD
                .slice(
                  page9 * rowsPerPage9,
                  page9 * rowsPerPage9 + rowsPerPage9
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columnsM.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeMD.length}
          rowsPerPage={rowsPerPage9}
          page={page9}
          onChangePage={handleChangePage9}
          onChangeRowsPerPage={handleChangeRowsPerPage9}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>MONTHLY - OEE PROCESSING MILK - ALL GROUP - FLEX 2</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columnsM.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeMB
                .slice(
                  page7 * rowsPerPage7,
                  page7 * rowsPerPage7 + rowsPerPage7
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columnsM.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeMB.length}
          rowsPerPage={rowsPerPage7}
          page={page7}
          onChangePage={handleChangePage7}
          onChangeRowsPerPage={handleChangeRowsPerPage7}
        />
      </Paper>
      <br />
      <br />
      <br />
      <Paper className={classes.root}>
        <h1>MONTHLY - OEE PROCESSING MILK - ALL GROUP - GEA</h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {/* <TableCell>Target</TableCell> */}
                {columnsM.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.divider}>
              {dataOeeMC
                .slice(
                  page8 * rowsPerPage8,
                  page8 * rowsPerPage8 + rowsPerPage8
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                      {/* <TableCell>1</TableCell> */}
                      {columnsM.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < 1
                                  ? 'bgW'
                                  : typeof value !== 'number'
                                  ? null
                                  : 'bgW'
                              }
                            >
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          </React.Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={dataOeeMC.length}
          rowsPerPage={rowsPerPage8}
          page={page8}
          onChangePage={handleChangePage8}
          onChangeRowsPerPage={handleChangeRowsPerPage8}
        />
      </Paper>
    </Container>
  );
};

export default TableOeeFill;
