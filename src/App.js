import React from "react";
import { Container } from "semantic-ui-react";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Results from "./components/Results/Results";
import styles from "./App.css";
import ChromeImage from "./images/chrome.svg";
import AppleImage from "./images/apple.svg";

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

  componentDidMount = () => {
    const browser = "Google Chrome";
    const browserDetailed = "65.4.4";
    const browserImage = ChromeImage;
    const operatingSystem = "MacOS";
    const operatingSystemDetailed = "10.6.4";
    const operatingSystemImage = AppleImage;
    const ipPublic = "65.128.0.4";
    const ipPrivate = "127.0.0.1";

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
      </Container>
    );
  }
}

export default App;
