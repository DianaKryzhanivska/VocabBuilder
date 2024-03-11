import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/VocabBuilder">
    <App />
    <GlobalStyles />
  </BrowserRouter>
);
