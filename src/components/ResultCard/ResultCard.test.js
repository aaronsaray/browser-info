import React from "react";
import ResultCard from "./ResultCard";
import { shallow } from "enzyme";

describe("Result Card", () => {
  it("renders", () => {
    shallow(<ResultCard icon="icon" />);
  });
});
