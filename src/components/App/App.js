import React from "react";
import { Container } from "semantic-ui-react";
import UserAgentInfoService from "../../services/UserAgentInfoService";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Results from "../Results/Results";
import WorkInProgress from "../WorkInProgress/WorkInProgress";
import styles from "./App.css";
import { deriveBrowserImage, deriveOperatingSystemImage } from "./IconChooser";

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
      const browserImage = deriveBrowserImage(browser);

      const {
        name: operatingSystem,
        version: operatingSystemDetailed
      } = operatingSystemResult;
      const operatingSystemImage = deriveOperatingSystemImage(operatingSystem);

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
