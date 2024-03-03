import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Kasa/Home/Accueil";
import Apropos from "./Kasa/Services/Apropos";
import Logements from "./Kasa/Logements/Logement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A_propos" element={<Apropos />} />
        <Route path="/Logements" element={<Logements />} />
      </Routes>
    </div>
  );
}

export default App;
