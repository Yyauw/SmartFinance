import { Link } from "react-router-dom";

export default function Navbarbtn({ handleClose, route }) {
  return (
    <li>
      <Link
        to={route.path}
        onClick={handleClose}
        className="nav-link text-light navbtn ps-2 mb-1"
      >
        <img src={route.icon} alt={route.name} className="icon p-1" />
        {route.name}
      </Link>
    </li>
  );
}
