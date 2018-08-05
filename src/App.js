import React from "react";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <LoadingIndicator />
      </React.Fragment>
    );
  }
}

export default App;
