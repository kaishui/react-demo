import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import DangerButton from "./DangerButton";

ReactDOM.render(<DangerButton />, document.getElementById('root'));
registerServiceWorker();
