import React from "react";
import { Container } from "semantic-ui-react";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Results from "../Results/Results";
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import styles from "./App.css";

// consider making these all into a universal import?
import ChromeImage from "../../images/chrome.svg";
import AppleImage from "../../images/apple.svg";

import UserAgentInfoService from "../../services/UserAgentInfoService";

class App extends React.Component {
  state = {
    resultsLoaded: false,
    browser: null,
    browserDetailed: null,
    browserImage: null,
    operatingSystem: null,
    operatingSystemDetailed: null,
    operatingSystemImage: null,
    ipPublic: null,
    ipPrivate: null
  };

  /**
   * Need to parse out the user agent to get the state information
   */
  componentDidMount = () => {
    const parser = new UserAgentInfoService(navigator.userAgent);

    Promise.all([
      parser.getBrowser(),
      parser.getOperatingSystem(),
      parser.getIp()
    ]).then(([browserResult, operatingSystemResult, ipResult]) => {
      const { name: browser, version: browserDetailed } = browserResult;
      const browserImage = ChromeImage;

      const {
        name: operatingSystem,
        version: operatingSystemDetailed
      } = operatingSystemResult;
      const operatingSystemImage = AppleImage;

      const { public: ipPublic, private: ipPrivate } = ipResult;

      this.setState({
        resultsLoaded: true,
        browser,
        browserDetailed,
        browserImage,
        operatingSystem,
        operatingSystemDetailed,
        operatingSystemImage,
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
            browserImage={this.state.browserImage}
            operatingSystem={this.state.operatingSystem}
            operatingSystemDetailed={this.state.operatingSystemDetailed}
            operatingSystemImage={this.state.operatingSystemImage}
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
