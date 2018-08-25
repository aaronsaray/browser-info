import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("App", () => {
  it("renders", () => {
    shallow(<App />);
  });

  it("shows loading indicator at first", () => {
    const wrapper = mount(<App />);
    expect(wrapper.text()).toContain("Analyzing Browser");
    wrapper.unmount();
  });
});
