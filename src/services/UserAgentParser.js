/**
 * This service is responsible for parsing out useful values from a user agent string.
 *
 * It returns an object - see method for declaration
 */

const parser = require("ua-parser-js");

class UserAgentParser {
  constructor(userAgent) {
    this.userAgent = userAgent;

    // wonder if it makes sense to run this on creation
    this.parsedUserAgent = parser(userAgent);
  }

  /**
   * Get browser name and version keys
   */
  getBrowser() {
    return new Promise(resolve => {
      resolve({
        name: this.parsedUserAgent.browser.name,
        version: this.parsedUserAgent.browser.version
      });
    });
  }

  /**
   * Get operating system name and version keys
   */
  getOperatingSystem() {
    return new Promise(resolve => {
      resolve({
        name: this.parsedUserAgent.os.name,
        version: this.parsedUserAgent.os.version
      });
    });
  }

  /**
   * Get public and private ip
   */
  getIp() {
    return new Promise(resolve => {
      fetch("https://api.ipify.org")
        .then(resp => resp.text())
        .then(response => {
          resolve({
            public: response,
            private: "x.x.x.x"
          });
        })
        .catch(() => {
          resolve({
            public: "Unable to retrieve",
            private: "x.x.x.x"
          });
        });
    });
  }
}

export default UserAgentParser;
