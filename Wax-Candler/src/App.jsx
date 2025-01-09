import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import FraganceCombinations from "./Components/FraganceCombinations/FraganceCombinations";
import CandleCreator from "./Components/CandleCreator/CandleCreator";
import WaxTypes from "./Components/WaxTypes/WaxTypes";
import Colorants from "./Components/Colorants/Colorants";
import Equipment from "./Components/Equipment/Equipment";
import Fragrance from "./Components/Fragrances/Fragrance";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CandleCreator" element={<CandleCreator />} />
        <Route path="/Wax" element={<WaxTypes />} />
        <Route path="/Fragance" element={<Fragrance />} />
        <Route path="/Color" element={<Colorants />} />        
        <Route path="/Equipment" element={<Equipment />} />        
        <Route path="/PremadeFragances" element={<FraganceCombinations />} />

      </Routes>
    </div>
  );
}

export default App;
