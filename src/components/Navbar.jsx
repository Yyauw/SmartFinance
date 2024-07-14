import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import HamburgerIcon from "../../public/icons/hamburger.png";
import titleIcon from "../../public/icons/titleIcon.png";
import Navbarbtn from "./navigation/Navbarbtn";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  ];

  return (
    <>
      <nav className="d-flex shadow justify-content-between px-5 py-2 border-bottom mb-4">
        <h1>navbarcito</h1>
        <div className="p-1" onClick={handleShow}>
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
