import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";

import Store from "./stores/userStore";
import ExampleStore from "./stores/userStore";

const stores = {
  Store,
  ExampleStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
