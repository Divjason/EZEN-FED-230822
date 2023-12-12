import "./App.css";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import { Routes, Route, Navigate } from "react-router-dom";
import UserPage from "./UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id/:num" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
