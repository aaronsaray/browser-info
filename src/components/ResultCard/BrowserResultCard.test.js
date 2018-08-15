import React from "react";
import BrowserResultCard from "./BrowserResultCard";
import { shallow } from "enzyme";

describe("Browser Result Card", () => {
  it("renders", () => {
    shallow(<BrowserResultCard />);
  });
});
