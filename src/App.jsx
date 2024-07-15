import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Navbar from "./components/Navbar";
import PuntoEquilibrio from "./pages/PuntoEquilibrio";
import Depreciacion from "./pages/Depreciacion";
import Resultado from "./pages/Resultado";
import Balance from "./pages/Balance";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/resultado" element={<Resultado />} />
            <Route path="/depreciacion" element={<Depreciacion />} />
            <Route path="/equilibrio" element={<PuntoEquilibrio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
