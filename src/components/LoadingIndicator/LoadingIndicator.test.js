import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import { shallow } from "enzyme";

describe("Loading indicator", () => {
  it("renders", () => {
    shallow(<LoadingIndicator />);
  });
});
