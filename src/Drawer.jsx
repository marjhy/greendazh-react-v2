import React from 'react';
import clsx from 'clsx';
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
} from '@material-ui/core';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TableChartIcon from '@material-ui/icons/TableChart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DeckIcon from '@material-ui/icons/Deck';
import HistoryIcon from '@material-ui/icons/History';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SecurityIcon from '@material-ui/icons/Security';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import RestorePageOutlinedIcon from '@material-ui/icons/RestorePageOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Icon from '@material-ui/core/Icon';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import TimelineIcon from '@material-ui/icons/Timeline';
import SpeedIcon from '@material-ui/icons/Speed';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import AppsIcon from '@material-ui/icons/Apps';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#3CB371',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },
}));

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openLink, setOpenLink] = React.useState(false);
  const [openLink1, setOpenLink1] = React.useState(false);
  const [openLink2, setOpenLink2] = React.useState(false);
  const [openLink3, setOpenLink3] = React.useState(false);
  const [openLink4, setOpenLink4] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenLink(!openLink);
  };

  const handleClick1 = () => {
    setOpenLink1(!openLink1);
  };

  const handleClick2 = () => {
    setOpenLink2(!openLink2);
  };

  const handleClick3 = () => {
    setOpenLink3(!openLink3);
  };

  const handleClick4 = () => {
    setOpenLink4(!openLink4);
  };
  const company = [
    {
      text: 'Safety Flash',
      icon: <Icon className='fas fa-shield-alt' />,
      onClick: () => history.push('/'),
    },
  ];

  const itemsListSafety = [
    {
      text: 'Safety Pyramids',
      icon: <ChangeHistoryIcon />,
      onClick: () => history.push('/mybar'),
    },
    {
      text: 'Safety History',
      icon: <Icon className='fas fa-book-medical' />,
      onClick: () => history.push('/history'),
    },
    {
      text: 'Safety Table',

      icon: <TableChartIcon />,
      onClick: () => history.push('/mychart'),
    },
  ];

  const itemsListProduction = [
    {
      text: 'Production History',
      icon: <RestorePageOutlinedIcon />,
      onClick: () => history.push('/history'),
    },
    {
      text: 'Production Chart',
      icon: <EqualizerIcon />,
      onClick: () => history.push('/mybar'),
    },
    {
      text: 'Production Table',

      icon: <TableChartOutlinedIcon />,
      onClick: () => history.push('/OEEProduction'),
    },
  ];

  const itemsListProductionDetail = [
    {
      text: 'Manufacturing Unit',
      icon: <Icon className='fas fa-industry' />,
      onClick: () => history.push('/history'),
    },

    {
      text: 'Engineering',
      icon: <Icon className='fas fa-cogs' fontSize='small' />,
      onClick: () => history.push('/mychart'),
    },
    {
      text: 'Quality',
      icon: <Icon className='fas fa-flask' fontSize='small' />,
      onClick: () => history.push('/mychart'),
    },
    {
      text: 'Supply Chain',
      icon: <Icon className='fab fa-docker' fontSize='small' />,
      onClick: () => history.push('/mychart'),
    },
  ];
  return (
    // Main div
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h4' noWrap>
            GreenDazzh [|board|]
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <MUIDrawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        {/* <Typography variant="h5">Greenfields</Typography> */}
        <List>
          {company.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {itemsListSafety.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {itemsListProduction.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        {/* FILLING
         *FILLIIIIIIIIIIING
         *
         */}
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <Icon className='fas fa-cube' />
            </ListItemIcon>
            <ListItemText primary='Filling/Packing Milk' />
            {openLink ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/RealtimeDaily')}
              >
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText primary='Realtime Daily' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyOEE')}
              >
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly OEE Graphs' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DailyHistory')}
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary='Daily History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/WeeklyHistory')}
              >
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary='Weekly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyHistory')}
              >
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/OperationalTime')}
              >
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='Operational Time' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/ParetoDowntime')}
              >
                <ListItemIcon>
                  <MultilineChartIcon />
                </ListItemIcon>
                <ListItemText primary='Pareto Downtime' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DetailData')}
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary='Detail Data' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/LossM')}
              >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary='LossPackaging Monthly' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/LossW')}
              >
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='LossPackaging Weekly' />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        {/* FILLING
         *END OF FILLIIIIIIIIIIING
         *
         */}

        {/* PRCS
         *PROCESSING MILK
         *
         */}
        <List>
          <ListItem button onClick={handleClick4}>
            <ListItemIcon>
              <Icon className='fas fa-hockey-puck' />
            </ListItemIcon>
            <ListItemText primary='Processing Milk' />
            {openLink4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/RealtimeDailyPrcs')}
              >
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText primary='Realtime Daily' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyOEEPrcs')}
              >
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly OEE Graphs' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DailyHistoryPrcs')}
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary='Daily History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/WeeklyHistoryPrcs')}
              >
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary='Weekly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyHistoryPrcs')}
              >
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/OperationalTimePrcs')}
              >
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='Operational Time' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/ParetoDowntimePrcs')}
              >
                <ListItemIcon>
                  <MultilineChartIcon />
                </ListItemIcon>
                <ListItemText primary='Pareto Downtime' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink4} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DetailDataPrcs')}
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary='Detail Data' />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        {/* PRCS
         *END OF PRCS
         *
         */}

        {/* CHS
         *CHHHHHEEEEESEEEEE
         *
         */}
        <List>
          <ListItem button onClick={handleClick1}>
            <ListItemIcon>
              <Icon className='fas fa-cheese' />
            </ListItemIcon>
            <ListItemText primary='Cheese' />
            {openLink1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/RealtimeDailyChs')}
              >
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText primary='Realtime Daily' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyOEEChs')}
              >
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly OEE Graphs' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DailyHistoryChs')}
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary='Daily History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/WeeklyHistoryChs')}
              >
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary='Weekly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyHistoryChs')}
              >
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/OperationalTimeChs')}
              >
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='Operational Time' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/ParetoDowntimeChs')}
              >
                <ListItemIcon>
                  <MultilineChartIcon />
                </ListItemIcon>
                <ListItemText primary='Pareto Downtime' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink1} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DetailDataChs')}
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary='Detail Data' />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        {/* CHS
         *END OF CHS
         *
         */}
        {/* STR
         *STIRREEEEEEEEEEEED YOGURT
         *
         */}
        <List>
          <ListItem button onClick={handleClick2}>
            <ListItemIcon>
              <Icon className='fas fa-cookie' />
            </ListItemIcon>
            <ListItemText primary='Stir Yogurt' />
            {openLink2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/RealtimeDailyStr')}
              >
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText primary='Realtime Daily' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyOEEStr')}
              >
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly OEE Graphs' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DailyHistoryStr')}
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary='Daily History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/WeeklyHistoryStr')}
              >
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary='Weekly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyHistoryStr')}
              >
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/OperationalTimeStr')}
              >
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='Operational Time' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/ParetoDowntimeStr')}
              >
                <ListItemIcon>
                  <MultilineChartIcon />
                </ListItemIcon>
                <ListItemText primary='Pareto Downtime' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DetailDataStr')}
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary='Detail Data' />
              </ListItem>
            </List>
          </Collapse>
          
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/LossMStr')}
              >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary='LossPackaging Monthly' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink2} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/LossWStr')}
              >
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                <ListItemText primary='LossPackaging Weekly' />
              </ListItem>
            </List>
          </Collapse>

        </List>
        {/* STR
         *END OF STR
         *
         */}

        {/* RTD
         *RTTTTTTTTTTTD YOGURT
         *
         */}
        <Divider />
        <List>
          <ListItem button onClick={handleClick3}>
            <ListItemIcon>
              <Icon className='fas fa-wine-bottle' />
            </ListItemIcon>
            <ListItemText primary='RTD Yogurt' />
            {openLink3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/RealtimeDailyRtd')}
              >
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText primary='Realtime Daily' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyOEERtd')}
              >
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly OEE Graphs' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DailyHistoryRtd')}
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary='Daily History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/WeeklyHistoryRtd')}
              >
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary='Weekly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/MonthlyHistoryRtd')}
              >
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary='Monthly History' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/OperationalTimeRtd')}
              >
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary='Operational Time' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/ParetoDowntimeRtd')}
              >
                <ListItemIcon>
                  <MultilineChartIcon />
                </ListItemIcon>
                <ListItemText primary='Pareto Downtime' />
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openLink3} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => history.push('/DetailDataRtd')}
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary='Detail Data' />
              </ListItem>
            </List>
          </Collapse>
          <Divider />
          {itemsListProductionDetail.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        {/* RTD
         *END OF RTD
         *
         */}
      </MUIDrawer>
    </div>
  );
};

export default withRouter(Drawer);
