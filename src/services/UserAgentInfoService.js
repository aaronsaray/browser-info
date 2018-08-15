/**
 * This service is responsible for parsing out useful values from a user agent string.
 *
 * It returns an object - see method for declaration
 */

const parser = require("ua-parser-js");

class UserAgentInfoService {
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
    return Promise.all([this.getPublicIp(), this.getPrivateIp()]).then(
      ([publicIp, privateIp]) => {
        return {
          public: publicIp,
          private: privateIp
        };
      }
    );
  }

  /**
   * Get the public ip address using ipify
   */
  getPublicIp() {
    return fetch("https://api.ipify.org")
      .then(resp => resp.text())
      .catch(() => {
        // this is OK - sometimes we can't get it - cuz of adblockers
        return null;
      });
  }

  /**
   * Get internal IP, only supported with Chrome, Firefox right now
   *
   * Modified, crappily, from https://stackoverflow.com/a/48571757
   */
  getPrivateIp() {
    return new Promise(resolve => {
      const peerConnectionClass =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;

      if (!peerConnectionClass) {
        resolve();
      }

      const peerConnection = new peerConnectionClass({
        iceServers: []
      });

      peerConnection.createDataChannel("");
      peerConnection.createOffer(
        peerConnection.setLocalDescription.bind(peerConnection),
        () => {}
      );

      peerConnection.onicecandidate = event => {
        if (event && event.candidate && event.candidate.candidate) {
          let s = event.candidate.candidate.split(" ");
          peerConnection.onicecandidate = () => {};
          resolve(s[4]);
        }
      };

      // in cases where onicecandidate doesn't resolve at all or fast enough...
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}

export default UserAgentInfoService;
