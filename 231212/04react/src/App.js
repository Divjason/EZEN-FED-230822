import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import PrivateRoute from "./route/PrivateRoute";
import Login from "./page/Login";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
