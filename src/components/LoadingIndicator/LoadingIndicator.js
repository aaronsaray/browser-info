import React from "react";
import Grid from "@material-ui/core/Grid";
import "./LoadingIndicator.css";

const LoadingIndicator = () => (
  <Grid container className="loading-indicator">
    <Grid item xs={12}>
      <p>Here is a loading indicator.</p>
    </Grid>
  </Grid>
);

export default LoadingIndicator;
