import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./component/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import store from "./component/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <Provider store={store}>
      <App />
    </Provider>
  </GlobalStyles>
);
