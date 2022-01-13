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
// import axios from 'axios';
const std = process.env.REACT_APP_CHS_STD_PE_1; //89
const std2 = process.env.REACT_APP_CHS_STD_OEE_1; //56
const rms = process.env.REACT_APP_RUMUS;
const std2rms = rms * std2;
const std1rms = rms * std;

const API_HOST = 'http://10.24.7.70:8080';
//const API_HOST = 'http://localhost:8080';
const INVENTORY_API_URLDB = `${API_HOST}/OeeRtdMP`;
// const INVENTORY_API_URLDC = `${API_HOST}/OeeChsPGPLC`;
// const INVENTORY_API_URLDD = `${API_HOST}/OeeChsPGPLD`;

const columns = [
  { id: 'Bulan', label: 'Month', minWidth: 20 },
  { id: 'NetProdTime', label: 'Net Prod Time', minWidth: 20 },
  { id: 'AvailableTime', label: 'Operational Time', minWidth: 50 },
  { id: 'PE', label: 'PE', minWidth: 50 },
  { id: 'OE', label: 'OE', minWidth: 20 },
  { id: 'OEE', label: 'OEE', minWidth: 20 },
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

const TableOeePeFillWB = () => {
  const [dataOeeDB, setDataOeeDB] = useState([]);
  //   const [dataOeeDC, setDataOeeDC] = useState([]);
  //   const [dataOeeDD, setDataOeeDD] = useState([]);

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
  ///////////////// end header fix

  //get data from database
  const fetchInventory = () => {
    fetch(`${INVENTORY_API_URLDB}`)
      .then((res) => res.json())
      .then((json) => setDataOeeDB(json));
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <Container className='container'>
      <Paper className={classes.root}>
        <h1>MONTLHY PERFORMANCE RTD </h1>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>         
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
              {dataOeeDB
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.code}
                    >
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <React.Fragment>
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className={
                                value < std2rms &&
                                (column.label === 'OEE Hiu' ||
                                  column.label === 'OEE Rajawali' ||
                                  column.label === 'OEE Singa' ||
                                  column.label === 'OEE Combined')
                                  ? 'bgRed'
                                  : std2rms <= value &&
                                    value < std2 &&
                                    (column.label === 'OEE Hiu' ||
                                      column.label === 'OEE Rajawali' ||
                                      column.label === 'OEE Singa' ||
                                      column.label === 'OEE Combined')
                                  ? 'bgYe'
                                  : value >= std2 &&
                                    (column.label === 'OEE Hiu' ||
                                      column.label === 'OEE Rajawali' ||
                                      column.label === 'OEE Singa' ||
                                      column.label === 'OEE Combined')
                                  ? 'bgB'
                                  : value < std1rms &&
                                    (column.label === 'PE Hiu' ||
                                      column.label === 'PE Rajawali' ||
                                      column.label === 'PE Singa' ||
                                      column.label === 'PE Combined')
                                  ? 'bgRed'
                                  : std1rms <= value &&
                                    value < std &&
                                    (column.label === 'PE Hiu' ||
                                      column.label === 'PE Rajawali' ||
                                      column.label === 'PE Singa' ||
                                      column.label === 'PE Combined')
                                  ? 'bgYe'
                                  : value >= std &&
                                    (column.label === 'PE Hiu' ||
                                      column.label === 'PE Rajawali' ||
                                      column.label === 'PE Singa' ||
                                      column.label === 'PE Combined')
                                  ? 'bgB'
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
          count={dataOeeDB.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <br />
      <br />
    </Container>
  );
};

export default TableOeePeFillWB;
