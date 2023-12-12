import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
      </Routes>
    </div>
  );
}

export default App;
