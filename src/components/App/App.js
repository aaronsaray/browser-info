import React from "react";
import { Container } from "semantic-ui-react";
import UserAgentInfoService from "../../services/UserAgentInfoService";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Results from "../Results/Results";
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import styles from "./App.css";

class App extends React.Component {
  state = {
    resultsLoaded: false,
    browser: null,
    browserDetailed: null,
    operatingSystem: null,
    operatingSystemDetailed: null,
    ipPublic: null,
    ipPrivate: null
  };

  /**
   * Need to parse out the user agent to get the state information
   */
  componentDidMount = () => {
    const userInfoService = new UserAgentInfoService(navigator.userAgent);

    Promise.all([
      userInfoService.getBrowser(),
      userInfoService.getOperatingSystem(),
      userInfoService.getIp(),
      (() => {
        return new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
      })()
    ]).then(([browserResult, operatingSystemResult, ipResult]) => {
      const { name: browser, version: browserDetailed } = browserResult;

      const {
        name: operatingSystem,
        version: operatingSystemDetailed
      } = operatingSystemResult;

      const { public: ipPublic, private: ipPrivate } = ipResult;

      this.setState({
        resultsLoaded: true,
        browser,
        browserDetailed,
        operatingSystem,
        operatingSystemDetailed,
        ipPublic,
        ipPrivate
      });
    });
  };

  render() {
    return (
      <Container className={styles.container}>
        {this.state.resultsLoaded ? (
          <Results
            browser={this.state.browser}
            browserDetailed={this.state.browserDetailed}
            operatingSystem={this.state.operatingSystem}
            operatingSystemDetailed={this.state.operatingSystemDetailed}
            ipPublic={this.state.ipPublic}
            ipPrivate={this.state.ipPrivate}
          />
        ) : (
          <LoadingIndicator />
        )}
        <WorkInProgress />
      </Container>
    );
  }
}

export default App;
