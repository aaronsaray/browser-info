import React from "react";
import ResultCard from "./ResultCard";
import { shallow } from "enzyme";
import { Image, Card } from "semantic-ui-react";

describe("Result Card", () => {
  it("renders and passes in icon", () => {
    const wrapper = shallow(
      <ResultCard icon="icon.svg" description="the description" />
    );
    expect(wrapper.find(Image).props().src).toEqual("icon.svg");
  });

  it("decorates unable to detect when result and result detailed are empty", () => {
    const wrapper = shallow(
      <ResultCard icon="icon.svg" description="the description" />
    );
    expect(
      wrapper
        .find(Card.Header)
        .children()
        .text()
    ).toContain("Unable to Detect");
    expect(
      wrapper
        .find(Card.Meta)
        .children()
        .text()
    ).toContain("Unable to Detect");
  });

  it("does not attempt to decorate result/detailed when passed", () => {
    const wrapper = shallow(
      <ResultCard
        icon="icon.svg"
        description="the description"
        result="the result"
        resultDetailed="the detailed result"
      />
    );
    expect(
      wrapper
        .find(Card.Header)
        .children()
        .text()
    ).toContain("the result");
    expect(
      wrapper
        .find(Card.Meta)
        .children()
        .text()
    ).toContain("the detailed result");
  });
});
