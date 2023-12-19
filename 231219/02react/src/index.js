import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "#fff",
  background: "#000",
};

const lightTheme = {
  textColor: "#000",
  background: "#fff",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
