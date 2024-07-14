import ExportarExcelButton from "./ExportarExcelButton";

export default function TablaAmortizacion({ amortizacion }) {
  return (
    <section className="border shadow my-3 rounded p-1" id="tablaAmortizacion">
      <div className="ps-2">
        <h1 className="mb-2 mt-1">Tabla de amortización</h1>
        <ExportarExcelButton />
      </div>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Pago</th>
            <th>Fecha</th>
            <th>Cuota</th>
            <th>Intereses</th>
            <th>Capital</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {amortizacion.map((fila, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{fila.fecha}</td>
              <td>{fila.cuota.toFixed(2)}</td>
              <td>{fila.intereses.toFixed(2)}</td>
              <td>{fila.capital.toFixed(2)}</td>
              <td>{fila.saldo.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
