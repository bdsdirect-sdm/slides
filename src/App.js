
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slides from "./Slides";
import Button from "./Button";
import Map from "./Map";
import CartPage from "./CartPage";
import Checkout from "./Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Slides />} />
        <Route path="/button" element={<Button />} />
        <Route path="*" element={<Slides />} />
        <Route path="/map" element={<Map />} />
        <Route path="/cart/:id" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
