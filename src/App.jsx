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
import Resultado from "./pages/Resultado";
import Balance from "./pages/Balance";
import Ventas from "./pages/Ventas";
import ListaVentas from "./pages/ListaVentas";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/lista_ventas" element={<ListaVentas />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/resultado" element={<Resultado />} />
            <Route path="/depreciacion" element={<Depreciacion />} />
            <Route path="/equilibrio" element={<PuntoEquilibrio />} />
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route
              path="/razonesfinancieras"
              element={<RazonesFinancieras />}
            />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
