import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./LoadingIndicator.css";

const LoadingIndicator = () => (
  <Grid container className="loading-indicator" spacing={16}>
    <Grid item xs={12}>
      <p>Here is a loading indicator.</p>
      <LinearProgress />
    </Grid>
  </Grid>
);

export default LoadingIndicator;
