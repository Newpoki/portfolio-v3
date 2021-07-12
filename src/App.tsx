import { Grid, makeStyles } from "@material-ui/core";
import { useMinHeight } from "common";
import { Header } from "layout";
import Background from "./background-dark.png";

const useStyles = makeStyles<{}, { minHeight: number }>(() => ({
  root: {
    minHeight: ({ minHeight }) => minHeight,
  },
}));

const App = () => {
  /* Vars */

  const minHeight = useMinHeight();
  const classes = useStyles({ minHeight });

  /* Render */

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  );
};

export default App;
