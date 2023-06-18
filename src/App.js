import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HabitListing from "./components/HabitListing";
import HabitDetails from "./pages/HabitDetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HabitListing />} />
        <Route path="/habits/:habitName" element={<HabitDetails />} />
      </Routes>
    </div>
  );
}

export default App;
