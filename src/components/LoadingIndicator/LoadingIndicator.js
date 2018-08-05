import React from "react";
import { Loader } from "semantic-ui-react";
import styles from "./LoadingIndicator.css";

const LoadingIndicator = () => (
  <div className={styles.container}>
    <Loader active inline="centered" size="massive">
      Analyzing Browser
    </Loader>
  </div>
);

export default LoadingIndicator;
