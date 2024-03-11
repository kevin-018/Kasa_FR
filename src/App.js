import "./Kasa/Assets/Accueil.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Kasa/Home/Accueil";
import Apropos from "./Kasa/Home/Apropos";
import Logements from "./Kasa/Home/Logements";
import Header from "./Kasa/Resources/Header";
import Error from "./Kasa/Resources/Error/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logements" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
