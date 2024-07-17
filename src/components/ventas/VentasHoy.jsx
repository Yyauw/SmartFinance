import { Link } from "react-router-dom";

export default function VentasHoy({ ventas, productos }) {
  if (ventas.error || !productos) {
    return (
      <div className="border shadow rounded mt-4 row p-4">
        <h2>No hay ventas registradas hoy</h2>{" "}
        <h5 className="mb-2">
          <Link to="/lista_ventas">Ver Historial de ventas</Link>
        </h5>
      </div>
    );
  }
  return (
    <div className="border shadow rounded mt-4 row">
      <div className="">
        <h2>Ventas del día</h2>
        <h5 className="">
          <Link to="/lista_ventas">Ver Historial de ventas</Link>
        </h5>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Transaccion</th>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Monto total</th>
                <th>Credito otorgado</th>
                <th>Abono</th>
                <th>Fecha Cancelacion</th>
                <th>Cancelacion</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta, index) => (
                <tr key={index}>
                  <td>{venta.transaccion}</td>
                  <td>{venta.fecha}</td>
                  <td>{productos[venta?.producto - 1].descripcion}</td>
                  <td>{venta.cantidad}</td>
                  <td>{venta.monto}</td>
                  <td>{venta.credito_otorgado ? "Si" : "No"}</td>
                  <td>{venta.abono_mitad}</td>
                  <td>{venta.fecha_cancelacion}</td>
                  <td>{venta.cancelacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
