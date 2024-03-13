import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Home/Accueil";
import Apropos from "./Home/Apropos";
import Error from "./Home/Error";
import Header from "./blockpage/header/Header";
import Footer from "./blockpage/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
