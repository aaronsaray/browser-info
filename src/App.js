import React from "react";
import { Container } from "semantic-ui-react";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Results from "./components/Results/Results";
import styles from "./App.css";

class App extends React.Component {
  state = {
    resultsLoaded: true
  };

  componentDidMount = () => {
    console.log("mounted");
  };

  render() {
    return (
      <Container className={styles.container}>
        {this.state.resultsLoaded ? <Results /> : <LoadingIndicator />}
      </Container>
    );
  }
}

export default App;
