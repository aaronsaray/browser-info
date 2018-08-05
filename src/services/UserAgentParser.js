/**
 * This service is responsible for parsing out useful values from a user agent string.
 *
 * It returns an object - see method for declaration
 */

const parser = require("ua-parser-js");

class UserAgentParser {
  constructor(userAgent) {
    this.userAgent = userAgent;
    this.parsedUserAgent = parser(userAgent);
  }

  /**
   * Get browser name and version keys
   */
  get browser() {
    return {
      name: this.parsedUserAgent.browser.name,
      version: this.parsedUserAgent.browser.version
    };
  }

  /**
   * Get operating system name and version keys
   */
  get operatingSystem() {
    return {
      name: this.parsedUserAgent.os.name,
      version: this.parsedUserAgent.os.version
    };
  }

  /**
   * Get public and private ip
   */
  get ip() {
    return {
      public: "x.x.x.x",
      private: "x.x.x.x"
    };
  }
}

export default UserAgentParser;
