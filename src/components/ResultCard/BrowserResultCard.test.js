import React from "react";
import BrowserResultCard from "./BrowserResultCard";
import { shallow } from "enzyme";
import each from "jest-each";
import ResultCard from "./ResultCard";
import FirefoxImage from "../../images/firefox.svg";
import InternetExplorerImage from "../../images/internetexplorer.svg";
import SafariImage from "../../images/safari.svg";
import AndroidImage from "../../images/android.svg";
import DefaultImage from "../../images/internet.svg";
import ChromeImage from "../../images/chrome.svg";

describe("Browser Result Card", () => {
  it("renders", () => {
    const wrapper = shallow(
      <BrowserResultCard description="the description" />
    );
    expect(wrapper.find(ResultCard).length).toBe(1);
  });

  it("proxies forward result, detailed result and description", () => {
    const wrapper = shallow(
      <BrowserResultCard
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

  it("shows default image with empty browser", () => {
    const wrapper = shallow(
      <BrowserResultCard description="the description" />
    );
    expect(wrapper.find(ResultCard).props().icon).toEqual(DefaultImage);
  });

  each([
    [FirefoxImage, "firefox"],
    [FirefoxImage, "Firefox"],
    [FirefoxImage, "Fire Fox"],
    [AndroidImage, "androidbrowser"],
    [AndroidImage, "Android Browser"],
    [ChromeImage, "chrome"],
    [ChromeImage, "Chrome"],
    [InternetExplorerImage, "ie"],
    [InternetExplorerImage, "IE"],
    [InternetExplorerImage, "IE Mobile"],
    [InternetExplorerImage, "iemobile"],
    [SafariImage, "safari"],
    [SafariImage, "Safari"],
    [SafariImage, "Mobile Safari"]
  ]).test("shows %s icon when passed %s", (icon, string) => {
    const wrapper = shallow(
      <BrowserResultCard result={string} description="the description" />
    );
    expect(wrapper.find(ResultCard).props().icon).toEqual(icon);
  });
});
