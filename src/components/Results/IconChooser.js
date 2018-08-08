/**
 * This is used to determien which icon should be loaded for the app state
 */

import ChromeImage from "../../images/chrome.svg";
import FirefoxImage from "../../images/firefox.svg";
import InternetExplorerImage from "../../images/internetexplorer.svg";
import SafariImage from "../../images/safari.svg";
import AppleImage from "../../images/apple.svg";
import AndroidImage from "../../images/android.svg";
import WindowsImage from "../../images/windows.svg";
import DefaultImage from "../../images/internet.svg";

const deriveBrowserIcon = browser => {
  let image = DefaultImage;
  const browserComparison = browser
    .toLowerCase()
    .split(" ")
    .join("");

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
  }

  return image;
};

const deriveOperatingSystemIcon = operatingSystem => {
  let image = DefaultImage;
  const osComparison = operatingSystem
    .toLowerCase()
    .split(" ")
    .join("");

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
  }

  return image;
};

export { deriveBrowserIcon, deriveOperatingSystemIcon };
