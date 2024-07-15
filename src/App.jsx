import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Navbar from "./components/Navbar";
import PuntoEquilibrio from "./pages/PuntoEquilibrio";
import Depreciacion from "./pages/Depreciacion";
import Presupuesto from "./pages/Presupuesto";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/depreciacion" element={<Depreciacion />} />
            <Route path="/equilibrio" element={<PuntoEquilibrio />} />
            <Route path="/presupuesto" element={<Presupuesto />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
