import React from "react";
import { Loader } from "semantic-ui-react";

const LoadingIndicator = () => (
  <Loader active inline="centered" size="massive">
    Analyzing Browser
  </Loader>
);

export default LoadingIndicator;
