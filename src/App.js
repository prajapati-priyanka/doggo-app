import "./App.css";
import { BreedListing, BreedDetails } from "./pages";
import { Login, Register } from "./components";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<BreedListing />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/breeddetails/:breed/:subBreed"
          element={<BreedDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
