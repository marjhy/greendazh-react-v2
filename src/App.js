import React, { Component } from 'react';
import './App.css';
import './styles.css';
// import Barchart from "./components/BarChart";
// import Tablechart from "./components/TableChart";
//import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
//import { withRouter } from "react-router";
import './style/Dashboard.css';
import { Route, Switch } from 'react-router-dom';
import Drawer from './Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home';
import Mychart from './Mychart';
import Mybar from './Mybar';
import History from './History';
import OeeFill from './OeeFill';
//PRODUCTION
import OEEProduction from './Production/OEEProduction';
// FILLING
import RealtimeDaily from './FillingMilk/RealtimeDaily';
import MonthlyOEE from './FillingMilk/MonthlyOEE';
import DailyHistory from './FillingMilk/DailyHistory';
import MonthlyHistory from './FillingMilk/MonthlyHistory';
import WeeklyHistory from './FillingMilk/WeeklyHistory';
import DetailData from './FillingMilk/DetailData';
import OperationalTime from './FillingMilk/OperationalTime';
import ParetoDowntime from './FillingMilk/ParetoDowntime';
import LossM from './FillingMilk/LossM';
import LossW from './FillingMilk/LossW';
// PROCESSING
import RealtimeDailyPrcs from './ProcessingMilk/RealtimeDaily';
import MonthlyOEEPrcs from './ProcessingMilk/MonthlyOEE';
import DailyHistoryPrcs from './ProcessingMilk/DailyHistory';
import MonthlyHistoryPrcs from './ProcessingMilk/MonthlyHistory';
import WeeklyHistoryPrcs from './ProcessingMilk/WeeklyHistory';
import DetailDataPrcs from './ProcessingMilk/DetailData';
import OperationalTimePrcs from './ProcessingMilk/OperationalTime';
import ParetoDowntimePrcs from './ProcessingMilk/ParetoDowntime';
// CHS
import RealtimeDailyChs from './Chs/RealtimeDaily';
import MonthlyOEEChs from './Chs/MonthlyOEE';
import DailyHistoryChs from './Chs/DailyHistory';
import MonthlyHistoryChs from './Chs/MonthlyHistory';
import WeeklyHistoryChs from './Chs/WeeklyHistory';
import DetailDataChs from './Chs/DetailData';
import OperationalTimeChs from './Chs/OperationalTime';
import ParetoDowntimeChs from './Chs/ParetoDowntime';
// STR
import RealtimeDailyStr from './Str/RealtimeDaily';
import MonthlyOEEStr from './Str/MonthlyOEE';
import DailyHistoryStr from './Str/DailyHistory';
import MonthlyHistoryStr from './Str/MonthlyHistory';
import WeeklyHistoryStr from './Str/WeeklyHistory';
import DetailDataStr from './Str/DetailData';
import OperationalTimeStr from './Str/OperationalTime';
import ParetoDowntimeStr from './Str/ParetoDowntime';
import LossMStr from './Str/LossM';
import LossWStr from './Str/LossW';
// RTD
import RealtimeDailyRtd from './Rtd/RealtimeDaily';
import MonthlyOEERtd from './Rtd/MonthlyOEE';
import DailyHistoryRtd from './Rtd/DailyHistory';
import MonthlyHistoryRtd from './Rtd/MonthlyHistory';
import WeeklyHistoryRtd from './Rtd/WeeklyHistory';
import DetailDataRtd from './Rtd/DetailData';
import OperationalTimeRtd from './Rtd/OperationalTime';
import ParetoDowntimeRtd from './Rtd/ParetoDowntime';

// import Pyramidchart from "./components/Pyramid";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact from='/' render={(props) => <Home {...props} />} />
        <Route
          exact
          path='/mychart'
          render={(props) => <Mychart {...props} />}
        />
        <Route exact path='/mybar' render={(props) => <Mybar {...props} />} />
        <Route
          exact
          path='/history'
          render={(props) => <History {...props} />}
        />
         <Route
          exact
          path='/OEEProduction'
          render={(props) => <OEEProduction {...props} />}
        />
        <Route
          exact
          path='/OeeFill'
          render={(props) => <OeeFill {...props} />}
        />
        <Route
          exact
          path='/RealtimeDaily'
          render={(props) => <RealtimeDaily {...props} />}
        />
        <Route
          exact
          path='/MonthlyOEE'
          render={(props) => <MonthlyOEE {...props} />}
        />
        <Route
          exact
          path='/DailyHistory'
          render={(props) => <DailyHistory {...props} />}
        />
        <Route
          exact
          path='/WeeklyHistory'
          render={(props) => <WeeklyHistory {...props} />}
        />
        <Route
          exact
          path='/MonthlyHistory'
          render={(props) => <MonthlyHistory {...props} />}
        />
        <Route
          exact
          path='/DetailData'
          render={(props) => <DetailData {...props} />}
        />
        <Route
          exact
          path='/OperationalTime'
          render={(props) => <OperationalTime {...props} />}
        />
        <Route
          exact
          path='/ParetoDowntime'
          render={(props) => <ParetoDowntime {...props} />}
        />
        <Route exact path='/LossM' render={(props) => <LossM {...props} />} />
        <Route exact path='/LossW' render={(props) => <LossW {...props} />} />
        <Route exact path='/LossMStr' render={(props) => <LossMStr {...props} />} />
        <Route exact path='/LossWStr' render={(props) => <LossWStr {...props} />} />
        <Route
          exact
          path='/RealtimeDailyPrcs'
          render={(props) => <RealtimeDailyPrcs {...props} />}
        />
        <Route
          exact
          path='/MonthlyOEEPrcs'
          render={(props) => <MonthlyOEEPrcs {...props} />}
        />
        <Route
          exact
          path='/DailyHistoryPrcs'
          render={(props) => <DailyHistoryPrcs {...props} />}
        />
        <Route
          exact
          path='/WeeklyHistoryPrcs'
          render={(props) => <WeeklyHistoryPrcs {...props} />}
        />
        <Route
          exact
          path='/MonthlyHistoryPrcs'
          render={(props) => <MonthlyHistoryPrcs {...props} />}
        />
        <Route
          exact
          path='/DetailDataPrcs'
          render={(props) => <DetailDataPrcs {...props} />}
        />
        <Route
          exact
          path='/OperationalTimePrcs'
          render={(props) => <OperationalTimePrcs {...props} />}
        />
        <Route
          exact
          path='/ParetoDowntimePrcs'
          render={(props) => <ParetoDowntimePrcs {...props} />}
        />

        <Route
          exact
          path='/RealtimeDailyChs'
          render={(props) => <RealtimeDailyChs {...props} />}
        />
        <Route
          exact
          path='/MonthlyOEEChs'
          render={(props) => <MonthlyOEEChs {...props} />}
        />
        <Route
          exact
          path='/DailyHistoryChs'
          render={(props) => <DailyHistoryChs {...props} />}
        />
        <Route
          exact
          path='/WeeklyHistoryChs'
          render={(props) => <WeeklyHistoryChs {...props} />}
        />
        <Route
          exact
          path='/MonthlyHistoryChs'
          render={(props) => <MonthlyHistoryChs {...props} />}
        />
        <Route
          exact
          path='/DetailDataChs'
          render={(props) => <DetailDataChs {...props} />}
        />
        <Route
          exact
          path='/OperationalTimeChs'
          render={(props) => <OperationalTimeChs {...props} />}
        />
        <Route
          exact
          path='/ParetoDowntimeChs'
          render={(props) => <ParetoDowntimeChs {...props} />}
        />

        <Route
          exact
          path='/RealtimeDailyStr'
          render={(props) => <RealtimeDailyStr {...props} />}
        />
        <Route
          exact
          path='/MonthlyOEEStr'
          render={(props) => <MonthlyOEEStr {...props} />}
        />
        <Route
          exact
          path='/DailyHistoryStr'
          render={(props) => <DailyHistoryStr {...props} />}
        />
        <Route
          exact
          path='/WeeklyHistoryStr'
          render={(props) => <WeeklyHistoryStr {...props} />}
        />
        <Route
          exact
          path='/MonthlyHistoryStr'
          render={(props) => <MonthlyHistoryStr {...props} />}
        />
        <Route
          exact
          path='/DetailDataStr'
          render={(props) => <DetailDataStr {...props} />}
        />
        <Route
          exact
          path='/OperationalTimeStr'
          render={(props) => <OperationalTimeStr {...props} />}
        />
        <Route
          exact
          path='/ParetoDowntimeStr'
          render={(props) => <ParetoDowntimeStr {...props} />}
        />

        <Route
          exact
          path='/RealtimeDailyRtd'
          render={(props) => <RealtimeDailyRtd {...props} />}
        />
        <Route
          exact
          path='/MonthlyOEERtd'
          render={(props) => <MonthlyOEERtd {...props} />}
        />
        <Route
          exact
          path='/DailyHistoryRtd'
          render={(props) => <DailyHistoryRtd {...props} />}
        />
        <Route
          exact
          path='/WeeklyHistoryRtd'
          render={(props) => <WeeklyHistoryRtd {...props} />}
        />
        <Route
          exact
          path='/MonthlyHistoryRtd'
          render={(props) => <MonthlyHistoryRtd {...props} />}
        />
        <Route
          exact
          path='/DetailDataRtd'
          render={(props) => <DetailDataRtd {...props} />}
        />
        <Route
          exact
          path='/OperationalTimeRtd'
          render={(props) => <OperationalTimeRtd {...props} />}
        />
        <Route
          exact
          path='/ParetoDowntimeRtd'
          render={(props) => <ParetoDowntimeRtd {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
