
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slides from "./Slides";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Slides />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
