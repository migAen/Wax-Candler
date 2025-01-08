import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import FraganceCombinations from "./Components/FraganceCombinations/FraganceCombinations";
import CandleCreator from "./Components/CandleCreator/CandleCreator";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CandleCreator" element={<CandleCreator />} />
        <Route path="/fragance" element={<FraganceCombinations />} />
      </Routes>
    </div>
  );
}

export default App;
