import React from "react";
import { Container } from "semantic-ui-react";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";

class App extends React.Component {
  render() {
    return (
      <Container>
        <LoadingIndicator />
      </Container>
    );
  }
}

export default App;
