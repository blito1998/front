import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/main/App";
import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap-carousel/dist/bootstrap.min.css";
import "../node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
