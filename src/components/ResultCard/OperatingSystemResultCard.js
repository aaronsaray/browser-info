import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";
import AndroidImage from "../../images/android.svg";
import DefaultImage from "../../images/internet.svg";
import ChromeImage from "../../images/chrome.svg";
import AppleImage from "../../images/apple.svg";
import WindowsImage from "../../images/windows.svg";

const deriveOperatingSystemIcon = operatingSystem => {
  const osComparison =
    operatingSystem &&
    operatingSystem
      .toLowerCase()
      .split(" ")
      .join("");

  let image;

  switch (osComparison) {
    case "macos":
    case "ios":
      image = AppleImage;
      break;
    case "android":
      image = AndroidImage;
      break;
    case "windows":
      image = WindowsImage;
      break;
    case "chromiumos":
      image = ChromeImage;
      break;
    default:
      image = DefaultImage;
  }

  return image;
};

const OperatingSystemResultCard = ({ result, resultDetailed, description }) => {
  return (
    <ResultCard
      icon={deriveOperatingSystemIcon(result)}
      result={result}
      resultDetailed={resultDetailed}
      description={description}
    />
  );
};

OperatingSystemResultCard.propTypes = {
  result: PropTypes.string,
  resultDetailed: PropTypes.string,
  description: PropTypes.string
};

export default OperatingSystemResultCard;
