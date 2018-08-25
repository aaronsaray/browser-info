import React from "react";
import OperatingSystemResultCard from "./OperatingSystemResultCard";
import { shallow } from "enzyme";
import each from "jest-each";
import AndroidImage from "../../images/android.svg";
import DefaultImage from "../../images/internet.svg";
import ChromeImage from "../../images/chrome.svg";
import AppleImage from "../../images/apple.svg";
import WindowsImage from "../../images/windows.svg";
import ResultCard from "./ResultCard";

describe("Operating System Result Card", () => {
  it("renders", () => {
    const wrapper = shallow(
      <OperatingSystemResultCard description="the description" />
    );
    expect(wrapper.find(ResultCard).length).toBe(1);
  });

  it("proxies forward result, detailed result and description", () => {
    const wrapper = shallow(
      <OperatingSystemResultCard
        result="the result"
        resultDetailed="the detailed result"
        description="the description"
      />
    );
    expect(wrapper.find(ResultCard).props().result).toEqual("the result");
    expect(wrapper.find(ResultCard).props().resultDetailed).toEqual(
      "the detailed result"
    );
    expect(wrapper.find(ResultCard).props().description).toEqual(
      "the description"
    );
  });

  it("shows default image with empty os", () => {
    const wrapper = shallow(
      <OperatingSystemResultCard description="the description" />
    );
    expect(wrapper.find(ResultCard).props().icon).toEqual(DefaultImage);
  });

  each([
    [AppleImage, "macos"],
    [AppleImage, "Mac OS"],
    [AppleImage, "MacOS"],
    [AppleImage, "ios"],
    [AppleImage, "IOS"],
    [AndroidImage, "android"],
    [AndroidImage, "Android"],
    [WindowsImage, "windows"],
    [WindowsImage, "Windows"],
    [ChromeImage, "chromiumos"],
    [ChromeImage, "Chromium OS"]
  ]).test("shows %s icon when passed %s", (icon, string) => {
    const wrapper = shallow(
      <OperatingSystemResultCard
        result={string}
        description="the description"
      />
    );
    expect(wrapper.find(ResultCard).props().icon).toEqual(icon);
  });
});
