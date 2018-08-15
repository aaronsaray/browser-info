import React from "react";
import Results from "./Results";
import { shallow } from "enzyme";

describe("Results", () => {
  it("renders", () => {
    shallow(<Results />);
  });
});
