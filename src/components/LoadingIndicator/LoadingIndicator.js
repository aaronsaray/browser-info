import React from "react";
import { Loader } from "semantic-ui-react";

const LoadingIndicator = () => (
  <React.Fragment>
    <Loader active inline="centered" size="massive">
      Analyzing Browser
    </Loader>
  </React.Fragment>
);

export default LoadingIndicator;
