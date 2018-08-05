/**
 * This service is responsible for parsing out useful values from a user agent string.
 *
 * It returns an object - see method for declaration
 */

class UserAgentParser {
  constructor(userAgent) {
    this.userAgent = userAgent;
  }

  /**
   * Get browser name and version keys
   */
  get browser() {
    const result = {
      name: "Google Chrome",
      version: "65.4.2"
    };

    return result;
  }

  /**
   * Get operating system name and version keys
   */
  get operatingSystem() {
    const result = {
      name: "MacOS",
      version: "10.1.2"
    };

    return result;
  }

  /**
   * Get public and private ip
   */
  get ip() {
    const result = {
      public: "65.x.x.x",
      private: "10.0.0.x"
    };

    return result;
  }
}

export default UserAgentParser;
