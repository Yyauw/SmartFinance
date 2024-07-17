import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculadora from "./pages/Calculadora";
import Productos from "./pages/Productos";
import Navbar from "./components/Navbar";
import PuntoEquilibrio from "./pages/PuntoEquilibrio";
import Depreciacion from "./pages/Depreciacion";
import Presupuesto from "./pages/Presupuesto";
import RazonesFinancieras from "./pages/RazonesFinancieras";

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
            <Route path="/razonesfinancieras" element={<RazonesFinancieras />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
