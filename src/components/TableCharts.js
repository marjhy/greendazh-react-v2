import React, { useState, useEffect } from "react";
import "../App.css";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const API_HOST = "http://10.24.7.70:8080";
//const API_HOST2 = "http://10.24.7.70:8080";

const INVENTORY_API_URL = `${API_HOST}/dept`;
const INVENTORY_API_URL2 = `${API_HOST}/deptp`;
const INVENTORY_API_URL_MTD = `${API_HOST}/deptpmtd`;
const INVENTORY_API_PIC = `${API_HOST}/auditbhvpicC`;
const INVENTORY_API_PIA = `${API_HOST}/auditbhvpicA`;

//defaults.global.tooltips.enabled = false;
//defaults.global.legend.position = "top";

const TableChart2 = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [dataMtd, setDataMtd] = useState([]);
  const [dataPicC, setDataPicC] = useState([]);
  const [dataPicA, setDataPicA] = useState([]);

  ///////////////// header fix
  // const classes = useStyles();
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  ///////////////// end header fix

  //get data from database
  const fetchInventory = () => {
    fetch(`${INVENTORY_API_URL}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const fetchInventory2 = () => {
    fetch(`${INVENTORY_API_URL2}`)
      .then((res) => res.json())
      .then((json) => setData2(json));
  };

  const fetchInventoryMtd = () => {
    fetch(`${INVENTORY_API_URL_MTD}`)
      .then((res) => res.json())
      .then((json) => setDataMtd(json));
  };

  const fetchInventoryPicC = () => {
    fetch(`${INVENTORY_API_PIC}`)
      .then((res) => res.json())
      .then((json) => setDataPicC(json));
  };

  const fetchInventoryPicA = () => {
    fetch(`${INVENTORY_API_PIA}`)
      .then((res) => res.json())
      .then((json) => setDataPicA(json));
  };

  useEffect(() => {
    fetchInventory();
    fetchInventory2();
    fetchInventoryMtd();
    fetchInventoryPicC();
    fetchInventoryPicA();
  }, []);

  //sementara tidak dipakai
  const renderTableHeader = () => {
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  // data jumlah AB
  const renderTableData = () => {
    return data.map((bhv, index) => {
      const {
        id,
        department_area,
        W1,
        W2,
        W3,
        W4,
        W5,
        W6,
        W7,
        W8,
        W9,
        W10,
        W11,
        W12,
        W13,
        W14,
        W15,
        W16,
        W17,
        W18,
        W19,
        W20,
        W21,
        W22,
        W23,
        W24,
        W25,
        W26,
        W27,
        W28,
        W29,
        W30,
      } = bhv; //destructuring
      return (
        <tr key={id}>
          <td>{department_area}</td>
          <td>
            {(() => {
              switch (department_area) {
                case "CHYOG PRODUCTION":
                  return "30";
                case "ENGINEERING":
                  return "54";
                case "HRGA":
                  return "9";
                case "LOGISTIC":
                  return "48";
                case "MILK PRODUCTION":
                  return "27";
                case "PERFORMANCE & SAFETY":
                  return "15";
                case "QA":
                  return "21";
                case "QC":
                  return "21";
                case "PROCUREMENT":
                  return "9";
                case "R&D":
                  return "6";
                case "PLANNING":
                  return "12";
                case "F&A":
                  return "12";
                default:
                  return "0";
              }
            })()}
          </td>

          <td>{W2 == 0 ? null : W2}</td>
          <td>{W3 == 0 ? null : W3}</td>
          <td>{W4 == 0 ? null : W4}</td>
          <td>{W5 == 0 ? null : W5}</td>
          <td>{W6 == 0 ? null : W6}</td>
          <td>{W7 == 0 ? null : W7}</td>
          <td>{W8 == 0 ? null : W8}</td>
          <td>{W9 == 0 ? null : W9}</td>
          <td>{W10 == 0 ? null : W10}</td>
          <td>{W11 == 0 ? null : W11}</td>
          <td>{W12 == 0 ? null : W12}</td>
          <td>{W13 == 0 ? null : W13}</td>
          <td>{W14 == 0 ? null : W14}</td>
          <td>{W15 == 0 ? null : W15}</td>
          <td>{W16 == 0 ? null : W16}</td>
          <td>{W17 == 0 ? null : W17}</td>
          <td>{W18 == 0 ? null : W18}</td>
          <td>{W19 == 0 ? null : W19}</td>
          <td>{W20 == 0 ? null : W20}</td>
          <td>{W21 == 0 ? null : W21}</td>
          <td>{W22 == 0 ? null : W22}</td>
          <td>{W23 == 0 ? null : W23}</td>
          <td>{W24 == 0 ? null : W24}</td>
          <td>{W25 == 0 ? null : W25}</td>
          <td>{W26 == 0 ? null : W26}</td>
          <td>{W27 == 0 ? null : W27}</td>
          <td>{W28 == 0 ? null : W28}</td>
          <td>{W29 == 0 ? null : W29}</td>
          <td>{W30 == 0 ? null : W30}</td>
        </tr>
      );
    });
  };

  // data percentage AB
  const renderTableData2 = () => {
    return data2.map((bhv, index) => {
      const {
        id,
        department_area,
        W1,
        W2,
        W3,
        W4,
        W5,
        W6,
        W7,
        W8,
        W9,
        W10,
        W11,
        W12,
        W13,
        W14,
        W15,
        W16,
        W17,
        W18,
        W19,
        W20,
        W21,
        W22,
        W23,
        W24,
        W25,
        W26,
        W27,
        W28,
        W29,
        W30,
      } = bhv; //destructuring
      return (
        <tr key={id}>
          <td>{department_area}</td>
          <td>
            {(() => {
              switch (department_area) {
                case "CHYOG PRODUCTION":
                  return "100";
                case "ENGINEERING":
                  return "100";
                case "HRGA":
                  return "100";
                case "LOGISTIC":
                  return "100";
                case "MILK PRODUCTION":
                  return "100";
                case "PERFORMANCE & SAFETY":
                  return "100";
                case "QA":
                  return "100";
                case "QC":
                  return "100";
                case "PROCUREMENT":
                  return "100";
                case "R&D":
                  return "100";
                case "PLANNING":
                  return "100";
                case "F&A":
                  return "100";
                default:
                  return "100";
              }
            })()}
          </td>

          <td>{W2}</td>
          <td>{W3}</td>
          <td>{W4}</td>
          <td>{W5}</td>
          <td>{W6}</td>
          <td>{W7}</td>
          <td>{W8}</td>
          <td>{W9}</td>
          <td>{W10}</td>
          <td>{W11}</td>
          <td>{W12}</td>
          <td>{W13}</td>
          <td>{W14}</td>
          <td>{W15}</td>
          <td>{W16}</td>
          <td>{W17}</td>
          <td>{W18}</td>
          <td>{W19}</td>
          <td>{W20}</td>
          <td>{W21}</td>
          <td>{W22}</td>
          <td>{W23}</td>
          <td>{W24}</td>
          <td>{W25}</td>
          <td>{W26}</td>
          <td>{W27}</td>
          <td>{W28}</td>
          <td>{W29}</td>
          <td>{W30}</td>
        </tr>
      );
    });
  };

  // data AB MTD
  const renderTableDataMtd = () => {
    return dataMtd.map((bhv, index) => {
      const {
        id,
        department_area,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7,
        M8,
        M9,
        M10,
        M11,
        M12,
      } = bhv; //destructuring
      return (
        <tr key={id}>
          <td>{department_area}</td>
          <td>
            {(() => {
              switch (department_area) {
                case "CHYOG PRODUCTION":
                  return "100";
                case "ENGINEERING":
                  return "100";
                case "HRGA":
                  return "100";
                case "LOGISTIC":
                  return "100";
                case "MILK PRODUCTION":
                  return "100";
                case "PERFORMANCE & SAFETY":
                  return "100";
                case "QA":
                  return "100";
                case "QC":
                  return "100";
                case "PROCUREMENT":
                  return "100";
                case "R&D":
                  return "100";
                case "PLANNING":
                  return "100";
                case "F&A":
                  return "100";
                default:
                  return "100";
              }
            })()}
          </td>
          <td
            className={
              M1 < 51
                ? "bgRed"
                : 51 >= M1 >= 84
                ? "bgYe"
                : M1 > 85
                ? "bgB"
                : null
            }
          >
            {M1}
          </td>
          <td
            className={
              M2 < 51
                ? "bgRed"
                : 51 <= M2 && M2 <= 84
                ? "bgYe"
                : M2 > 85
                ? "bgB"
                : null
            }
          >
            {M2}
          </td>
          <td
            className={
              M3 < 51
                ? "bgRed"
                : 51 <= M3 && M3 <= 84
                ? "bgYe"
                : M3 > 85
                ? "bgB"
                : null
            }
          >
            {M3}
          </td>
          <td
            className={
              M4 < 51
                ? "bgRed"
                : 51 <= M4 && M4 <= 84
                ? "bgYe"
                : M4 > 85
                ? "bgB"
                : null
            }
          >
            {M4}
          </td>
          <td
            className={
              M5 < 51
                ? "bgRed"
                : 51 <= M5 && M5 <= 84
                ? "bgYe"
                : M5 > 85
                ? "bgB"
                : null
            }
          >
            {M5}
          </td>
          <td
            className={
              M6 < 51
                ? "bgRed"
                : 51 <= M6 && M6 <= 84
                ? "bgYe"
                : M6 > 85
                ? "bgB"
                : null
            }
          >
            {M6}
          </td>
          <td
            className={
              M7 < 51
                ? "bgRed"
                : 51 <= M7 && M7 <= 84
                ? "bgYe"
                : M7 > 85
                ? "bgB"
                : null
            }
          >
            {M7}
          </td>
          <td
            className={
              M8 < 51
                ? "bgRed"
                : 51 <= M8 && M8 <= 84
                ? "bgYe"
                : M8 > 85
                ? "bgB"
                : null
            }
          >
            {M8}
          </td>
          <td
            className={
              M9 < 51
                ? "bgRed"
                : 51 <= M9 && M9 <= 84
                ? "bgYe"
                : M9 > 85
                ? "bgB"
                : null
            }
          >
            {M9}
          </td>
          <td
            className={
              M10 < 51
                ? "bgRed"
                : 51 <= M10 && M10 <= 84
                ? "bgYe"
                : M10 > 85
                ? "bgB"
                : null
            }
          >
            {M10}
          </td>
          <td
            className={
              M11 < 51
                ? "bgRed"
                : 51 <= M11 && M11 <= 84
                ? "bgYe"
                : M11 > 85
                ? "bgB"
                : null
            }
          >
            {M11}
          </td>
          <td
            className={
              M12 < 51
                ? "bgRed"
                : 51 <= M12 && M12 <= 84
                ? "bgYe"
                : M12 > 85
                ? "bgB"
                : null
            }
          >
            {M12}
          </td>
        </tr>
      );
    });
  };

  // data AB PIC INSPECTION MTD
  const renderTableDataPicC = () => {
    return dataPicC.map((bhv, index) => {
      const {
        id,
        department_area,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7,
        M8,
        M9,
        M10,
        M11,
        M12,
        pic,
      } = bhv; //destructuring
      return (
        <tr key={id}>
          <td>{department_area}</td>
          <td>{pic}</td>
          <td>
            {(() => {
              switch (department_area) {
                case "CHYOG PRODUCTION":
                  return "1";
                case "ENGINEERING":
                  return "1";
                case "HRGA":
                  return "1";
                case "LOGISTIC":
                  return "1";
                case "MILK PRODUCTION":
                  return "1";
                case "PERFORMANCE & SAFETY":
                  return "1";
                case "QA":
                  return "1";
                case "QC":
                  return "1";
                case "PROCUREMENT":
                  return "1";
                case "R&D":
                  return "1";
                case "PLANNING":
                  return "1";
                case "F&A":
                  return "1";
                default:
                  return "1";
              }
            })()}
          </td>
          <td className={M1 < 1 ? "bgRed" : M1 >= 1 ? "bgB" : null}>{M1}</td>
          <td className={M2 < 1 ? "bgRed" : M2 >= 1 ? "bgB" : null}>{M2}</td>
          <td className={M3 < 1 ? "bgRed" : M3 >= 1 ? "bgB" : null}>{M3}</td>
          <td className={M4 < 1 ? "bgRed" : M4 >= 1 ? "bgB" : null}>{M4}</td>
          <td className={M5 < 1 ? "bgRed" : M5 >= 1 ? "bgB" : null}>{M5}</td>
          <td className={M6 < 1 ? "bgRed" : M6 >= 1 ? "bgB" : null}>{M6}</td>
          <td className={M7 < 1 ? "bgRed" : M7 >= 1 ? "bgB" : null}>{M7}</td>
          <td className={M8 < 1 ? "bgRed" : M8 >= 1 ? "bgB" : null}>{M8}</td>
          <td className={M9 < 1 ? "bgRed" : M9 >= 1 ? "bgB" : null}>{M9}</td>
          <td className={M10 < 1 ? "bgRed" : M10 >= 1 ? "bgB" : null}>{M10}</td>
          <td className={M11 < 1 ? "bgRed" : M11 >= 1 ? "bgB" : null}>{M11}</td>
          <td className={M12 < 1 ? "bgRed" : M12 >= 1 ? "bgB" : null}>{M12}</td>
        </tr>
      );
    });
  };

  // data AB PIC SAFETY BEHAVIOUR MTD
  const renderTableDataPicA = () => {
    return dataPicA.map((bhv, index) => {
      const {
        id,
        department_area,
        M1,
        M2,
        M3,
        M4,
        M5,
        M6,
        M7,
        M8,
        M9,
        M10,
        M11,
        M12,
        pic,
      } = bhv; //destructuring
      return (
        <tr key={id}>
          <td>{department_area}</td>
          <td>{pic}</td>
          <td>
            {(() => {
              switch (department_area) {
                case "CHYOG PRODUCTION":
                  return "2";
                case "ENGINEERING":
                  return "2";
                case "HRGA":
                  return "2";
                case "LOGISTIC":
                  return "2";
                case "MILK PRODUCTION":
                  return "2";
                case "PERFORMANCE & SAFETY":
                  return "2";
                case "QA":
                  return "2";
                case "QC":
                  return "2";
                case "PROCUREMENT":
                  return "2";
                case "R&D":
                  return "2";
                case "PLANNING":
                  return "2";
                case "F&A":
                  return "2";
                default:
                  return "2";
              }
            })()}
          </td>
          <td className={M1 < 2 ? "bgRed" : M1 >= 2 ? "bgB" : null}>{M1}</td>
          <td className={M2 < 2 ? "bgRed" : M2 >= 2 ? "bgB" : null}>{M2}</td>
          <td className={M3 < 2 ? "bgRed" : M3 >= 2 ? "bgB" : null}>{M3}</td>
          <td className={M4 < 2 ? "bgRed" : M4 >= 2 ? "bgB" : null}>{M4}</td>
          <td className={M5 < 2 ? "bgRed" : M5 >= 2 ? "bgB" : null}>{M5}</td>
          <td className={M6 < 2 ? "bgRed" : M6 >= 2 ? "bgB" : null}>{M6}</td>
          <td className={M7 < 2 ? "bgRed" : M7 >= 2 ? "bgB" : null}>{M7}</td>
          <td className={M8 < 2 ? "bgRed" : M8 >= 2 ? "bgB" : null}>{M8}</td>
          <td className={M9 < 2 ? "bgRed" : M9 >= 2 ? "bgB" : null}>{M9}</td>
          <td className={M10 < 2 ? "bgRed" : M10 >= 2 ? "bgB" : null}>{M10}</td>
          <td className={M11 < 2 ? "bgRed" : M11 >= 2 ? "bgB" : null}>{M11}</td>
          <td className={M12 < 2 ? "bgRed" : M12 >= 2 ? "bgB" : null}>{M12}</td>
        </tr>
      );
    });
  };

  return (
    <Container className="container">
      <Container style={{ overflowX: "auto" }}>
        <h1>AUDIT BEHAVIOUR</h1>
        <table className="table table-bordered">
          <thead>
            {/* <tr>{renderTableHeader()}</tr>
            {renderTableData()} */}
            <tr>
              <th>Dept</th>
              <th>Target/Month</th>
              <th>W1</th>
              <th>W2</th>
              <th>W3</th>
              <th>W4</th>
              <th>W5</th>
              <th>W6</th>
              <th>W7</th>
              <th>W8</th>
              <th>W9</th>
              <th>W10</th>
              <th>W11</th>
              <th>W12</th>
              <th>W13</th>
              <th>W14</th>
              <th>W15</th>
              <th>W16</th>
              <th>W17</th>
              <th>W18</th>
              <th>W19</th>
              <th>W20</th>
              <th>W21</th>
              <th>W22</th>
              <th>W23</th>
              <th>W24</th>
              <th>W25</th>
              <th>W26</th>
              <th>W27</th>
              <th>W28</th>
              <th>W29</th>
              <th>W30</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </Container>
      <br />
      <br />
      <br />
      <Container style={{ overflowX: "auto" }}>
        <h1>AUDIT BEHAVIOUR %</h1>
        <table className="table table-bordered">
          <thead>
            {/* <tr>{renderTableHeader()}</tr>
            {renderTableData()} */}
            <tr>
              <th>Dept</th>
              <th>Target/Month</th>
              <th>W1</th>
              <th>W2</th>
              <th>W3</th>
              <th>W4</th>
              <th>W5</th>
              <th>W6</th>
              <th>W7</th>
              <th>W8</th>
              <th>W9</th>
              <th>W10</th>
              <th>W11</th>
              <th>W12</th>
              <th>W13</th>
              <th>W14</th>
              <th>W15</th>
              <th>W16</th>
              <th>W17</th>
              <th>W18</th>
              <th>W19</th>
              <th>W20</th>
              <th>W21</th>
              <th>W22</th>
              <th>W23</th>
              <th>W24</th>
              <th>W25</th>
              <th>W26</th>
              <th>W27</th>
              <th>W28</th>
              <th>W29</th>
              <th>W30</th>
            </tr>
          </thead>
          <tbody>{renderTableData2()}</tbody>
        </table>
      </Container>
      <br />
      <br />
      <br />
      <Container style={{ overflowX: "auto" }}>
        <h1>AUDIT BEHAVIOUR MTD %</h1>
        <table className="table table-bordered">
          <thead>
            {/* <tr>{renderTableHeader()}</tr>
            {renderTableData()} */}
            <tr>
              <th>Dept</th>
              <th>Target/Month</th>
              <th>JAN</th>
              <th>FEB</th>
              <th>MAR</th>
              <th>APR</th>
              <th>MAY</th>
              <th>JUN</th>
              <th>JUL</th>
              <th>AUG</th>
              <th>SEP</th>
              <th>AUG</th>
              <th>NOV</th>
              <th>DEC</th>
            </tr>
          </thead>
          <tbody>{renderTableDataMtd()}</tbody>
        </table>
      </Container>
      <br />
      <br />
      <br />
      <Container
        style={{ overflowX: "auto", overflowY: "auto", height: "500px" }}
      >
        <h1>AUDIT BEHAVIOUR PIC / INSPECTION / DEPT</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Dept</th>
              <th>PIC</th>
              <th>Target/Month</th>
              <th>JAN</th>
              <th>FEB</th>
              <th>MAR</th>
              <th>APR</th>
              <th>MAY</th>
              <th>JUN</th>
              <th>JUL</th>
              <th>AUG</th>
              <th>SEP</th>
              <th>AUG</th>
              <th>NOV</th>
              <th>DEC</th>
            </tr>
          </thead>
          <tbody>{renderTableDataPicC()}</tbody>
        </table>
      </Container>
      <br />
      <br />
      <br />
      <Container
        style={{ overflowX: "auto", overflowY: "auto", height: "500px" }}
      >
        <h1>AUDIT BEHAVIOUR PIC / SAFETY BEHAVIOUR / DEPT</h1>
        <table className="table table-bordered">
          <thead>
            {/* <tr>{renderTableHeader()}</tr>
            {renderTableData()} */}
            <tr>
              <th>Dept</th>
              <th>PIC</th>
              <th>Target/Month</th>
              <th>JAN</th>
              <th>FEB</th>
              <th>MAR</th>
              <th>APR</th>
              <th>MAY</th>
              <th>JUN</th>
              <th>JUL</th>
              <th>AUG</th>
              <th>SEP</th>
              <th>AUG</th>
              <th>NOV</th>
              <th>DEC</th>
            </tr>
          </thead>
          <tbody>{renderTableDataPicA()}</tbody>
        </table>
      </Container>
    </Container>
  );
};

export default TableChart2;
