import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

render(<App />, document.querySelector("#root"));
registerServiceWorker();