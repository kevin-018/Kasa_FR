import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Kasa/Assets/styles/style.css";
import Accueil from "./Kasa/Home/Accueil/Accueil";
import Apropos from "./Kasa/Home/Apropos/Apropos";
import Error from "./Kasa/Home/Error404/Error";
//import Header from "./Kasa/Resources/Header/Header.jsx";
//import Footer from "./Kasa/Resources/Footer";
//import Logements from "./Kasa/Home/Logements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
