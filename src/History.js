import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Barchart from "./components/BarChart";
import Barchart2 from "./components/BarChartAll";
import Pyramidchart from "./components/Pyramid";
import Pyramidchart2 from "./components/Pyramidall";
import Container from "@material-ui/core/Container";

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

const History = () => {
  const classes = useStyles();
  return (
    <Container>
      <main className={classes.content}>
        <Container className={classes.toolbar} />
        <Container>
          <Pyramidchart2 />
        </Container>
        <br />
        <br />
        <Container>
          <Barchart2 />
        </Container>
      </main>
    </Container>
  );
};

export default History;
