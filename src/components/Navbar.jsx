import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import HamburgerIcon from "../../public/icons/hamburger.png";
import titleIcon from "../../public/icons/titleIcon.png";
import Navbarbtn from "./navigation/Navbarbtn";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //aqui agregas la ruta y el icono de cada boton de navegacion
  const navRoutes = [
    {
      path: "/",
      name: "Inicio",
      icon: "../../public/icons/home.png",
    },
    {
      path: "/calculadora",
      name: "Calculadora Financiera",
      icon: "../../public/icons/finance.png",
    },
    {
      path: "/depreciacion",
      name: "Depreciacion Acumulada",
      icon: "../../public/icons/depreciacion.png",
    },
    {
      path: "/equilibrio",
      name: "Punto de Equilibrio",
      icon: "../../public/icons/equilibrio.png",
    },
    {
      path: "/presupuesto",
      name: "Presupuesto de Caja",
      icon: "../../public/icons/equilibrio.png",
    },
  ];

  //No es necesario modificar nada de aqui en adelante
  return (
    <>
      <nav className="d-flex shadow justify-content-between p-1 px-md-5 py-2 border-bottom ">
        <h1 className="my-auto">SmartFinance</h1>
        <div className="p-1 hambugerbtn rounded" onClick={handleShow}>
          <img src={HamburgerIcon} className="icon " alt="Hamburger Icon" />
        </div>
      </nav>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          style={{ backgroundColor: "#1a2342" }}
          className="py-4"
        >
          <Offcanvas.Title className="text-light">
            <img src={titleIcon} alt="" className="icon me-2" />
            SmartFinance
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#031633" }}>
          <ul className="navbar-nav">
            {navRoutes.map((route, index) => (
              <Navbarbtn key={index} route={route} handleClose={handleClose} />
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
