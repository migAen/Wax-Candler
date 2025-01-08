import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import FraganceCombinations from './Components/FraganceCombinations/FraganceCombinations';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <FraganceCombinations />
    </div>
  );
}

export default App;