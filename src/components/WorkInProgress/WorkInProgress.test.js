import React from "react";
import WorkInProgress from "./WorkInProgress";
import { shallow } from "enzyme";

describe("Work in progress", () => {
  it("renders", () => {
    shallow(<WorkInProgress />);
  });
});
