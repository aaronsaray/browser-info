import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";
import FirefoxImage from "../../images/firefox.svg";
import InternetExplorerImage from "../../images/internetexplorer.svg";
import SafariImage from "../../images/safari.svg";
import AndroidImage from "../../images/android.svg";
import DefaultImage from "../../images/internet.svg";
import ChromeImage from "../../images/chrome.svg";

const deriveBrowserIcon = browser => {
  const browserComparison =
    browser &&
    browser
      .toLowerCase()
      .split(" ")
      .join("");

  let image;

  switch (browserComparison) {
    case "firefox":
      image = FirefoxImage;
      break;
    case "androidbrowser":
      image = AndroidImage;
      break;
    case "chrome":
      image = ChromeImage;
      break;
    case "iemobile":
    case "ie":
      image = InternetExplorerImage;
      break;
    case "mobilesafari":
    case "safari":
      image = SafariImage;
      break;
    default:
      image = DefaultImage;
  }

  return image;
};

const BrowserResultCard = ({ result, resultDetailed, description }) => {
  return (
    <ResultCard
      icon={deriveBrowserIcon(result)}
      result={result}
      resultDetailed={resultDetailed}
      description={description}
    />
  );
};

BrowserResultCard.propTypes = {
  result: PropTypes.string,
  resultDetailed: PropTypes.string,
  description: PropTypes.string
};

export default BrowserResultCard;
