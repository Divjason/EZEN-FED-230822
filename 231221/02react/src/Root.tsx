import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default App;
