import ExportarExcelButton from "../calculadora/ExportarExcelButton";
import { Link } from "react-router-dom";

export default function TablaVentas({ ventas }) {
  if (ventas.length === 0) {
    return <h1 className="mt-4 text-center">Cargando...</h1>;
  }

  return (
    <div className="border shadow rounded mt-4 row p-1" id="tablaVentas">
      <div className="">
        <h5 className="mb-2">
          <Link to="/ventas">&larr;Regresar</Link>
        </h5>
        <h2>Historial de ventas</h2>

        <ExportarExcelButton
          nombreTabla="tablaVentas"
          nombreArchivo="tabla_ventas"
        />
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
                <td>{venta.producto}</td>
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
  );
}
