import ExportarExcelButton from "../calculadora/ExportarExcelButton";

export default function TablaDepreciacion({ depreciacion }) {
  console.log(depreciacion);

  if (depreciacion.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <>
      <h1>Depreciacion</h1>
      {depreciacion.activos_fijos.map((fila, index) => (
        <section
          className="border shadow my-3 rounded p-1 "
          id="tablaDepreciacion"
          key={index}
        >
          <div className="ps-2">
            <h3>{fila.nombre}</h3>
            <ExportarExcelButton
              nombreTabla="tablaDepreciacion"
              nombreArchivo="tabal_depreciacion"
            />
          </div>
          <div className="table-responsive">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Año</th>
                  <th>Depreciacón Anual</th>
                  <th>Depreciación Acumulada</th>
                  <th>Valor en Libros</th>
                </tr>
              </thead>
              <tbody>
                {fila.depreciacion.map((fila2, index) => (
                  <tr key={index}>
                    <td>{fila2.año}</td>
                    <td>{fila2.depreciacion_anual}$</td>
                    <td>{fila2.depreciacion_acumulada}$</td>
                    <td>{fila2.valor_en_libros}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="border shadow my-3 rounded p-1 ">
        <div className="ps-2">
          <h3>Resumen Final</h3>
          <ExportarExcelButton
            nombreTabla="tablaDepreciacion"
            nombreArchivo="tabal_depreciacion"
          />
        </div>
        <div className="table-responsive">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Total Depreciación Acumulada</th>
                <th>Total Valor en Libros</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {depreciacion.resumen_final.total_depreciacion_acumulada}$
                </td>
                <td>{depreciacion.resumen_final.total_valor_en_libros}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
