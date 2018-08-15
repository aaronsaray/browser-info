import React from "react";
import OperatingSystemResultCard from "./OperatingSystemResultCard";
import { shallow } from "enzyme";

describe("Operating System Result Card", () => {
  it("renders", () => {
    shallow(<OperatingSystemResultCard />);
  });
});
