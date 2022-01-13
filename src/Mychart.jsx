import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Barchart from "./components/BarChart";
import Tablechart from "./components/TableChart";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Mychart = () => {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Tablechart />
      </main>
    </div>
  );
};

export default Mychart;
