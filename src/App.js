
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slides from "./Slides";
import Button from "./Button";
import Map from "./Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Slides />} />
        <Route path="/button" element={<Button />} />
        <Route path="*" element={<Slides />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
