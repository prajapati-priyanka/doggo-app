
import './App.css';
import { DogListing,DogDetails } from './pages';
// import { Register } from './components';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<DogListing />} />
      <Route path="/dogdetails" element={<DogDetails />} />
      </Routes>
    {/* <Register /> */}
{/* <DogListing /> */}
    </div>
  );
}

export default App;
