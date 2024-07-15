import ExportarExcelButton from "../calculadora/ExportarExcelButton";

export default function TablaDepreciacion({ depreciacion }) {
  console.log(depreciacion);

  if (depreciacion.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <section className="border shadow my-3 rounded p-1 " id="tablaDepreciacion">
      <div className="ps-2">
        <h1>Depreciacion Acumulada</h1>
        <p>Depreciacion acumulada año 3</p>
        <ExportarExcelButton
          nombreTabla="tablaDepreciacion"
          nombreArchivo="tabal_depreciacion"
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Costo Inicial</th>
              <th>Depreciacion anual</th>
              <th>Depreciacion acumulada</th>
              <th>Valor neto</th>
            </tr>
          </thead>
          <tbody>
            {depreciacion.activos_fijos.map((fila, index) => (
              <tr key={index}>
                <td>{fila.nombre}</td>
                <td>{fila.costo_inicial}$</td>
                <td>{fila.depreciacion_anual}$</td>
                <td>{fila.depreciacion_acumulada}$</td>
                <td>{fila.valor_neto}$</td>
              </tr>
            ))}

            <tr className="table-success">
              <td>Totales</td>
              <td>
                {depreciacion?.activos_fijos.reduce(
                  (prev, current) => prev + current.costo_inicial,
                  0
                )}
                $
              </td>
              <td>{depreciacion?.totales.total_depreciacion_acumulada}$</td>
              <td>{depreciacion?.totales.total_valor_neto}$</td>
              <td>
                {depreciacion?.activos_fijos.reduce(
                  (prev, current) => prev + current.valor_neto,
                  0
                )}
                $
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
