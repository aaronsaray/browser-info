import React from "react";
import { Container } from "semantic-ui-react";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Results from "./components/Results/Results";
import WorkInProgress from "./components/WorkInProgress/WorkInProgress";
import styles from "./App.css";

// consider making these all into a universal import?
import ChromeImage from "./images/chrome.svg";
import AppleImage from "./images/apple.svg";

import UserAgentParser from "./services/UserAgentParser";

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
    const parser = new UserAgentParser(navigator.userAgent);

    const { name: browser, version: browserDetailed } = parser.browser;
    const browserImage = ChromeImage;

    const {
      name: operatingSystem,
      version: operatingSystemDetailed
    } = parser.operatingSystem;
    const operatingSystemImage = AppleImage;

    const { public: ipPublic, private: ipPrivate } = parser.ip;

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
