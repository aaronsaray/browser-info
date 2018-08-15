import UserAgentInfoService from "./UserAgentInfoService";

describe("User Agent Info Service", () => {
  // by default it takes ua string from current browser's window.navigator.userAgent
  // which in this case is gonna be nodejs then
  it("Constructs error free with a blank user agent", () => {
    new UserAgentInfoService();
    new UserAgentInfoService("");
  });
});
