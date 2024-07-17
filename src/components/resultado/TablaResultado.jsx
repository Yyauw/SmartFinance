import ExportarExcelButton from "../calculadora/ExportarExcelButton";

export default function TablaResultado({ resultado }) {
  console.log(resultado);

  if (resultado.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <div className="col-md-6">
      <section className="border shadow my-3 rounded p-1" id="estadoResultado">
        <div className="ps-2">
          <h1>Estado de Resultado</h1>

          <ExportarExcelButton
            nombreTabla="estadoResultado"
            nombreArchivo="estado_resultado"
          />
        </div>
        <div className="table-responsive">
          <table className="table ">
            <thead></thead>
            <tbody>
              {/* Ingresos */}
              <tr>
                <td className="fw-bold">Ingresos</td>
                <td></td>
              </tr>
              {resultado.ingresos.map((fila, index) => (
                <tr key={index}>
                  <td>{fila.nombre}</td>
                  <td>{fila.valor}</td>
                </tr>
              ))}
              <tr className="table-primary">
                <td>Total Ingresos</td>
                <td>
                  $
                  {resultado?.ingresos.reduce(
                    (prev, current) => prev + current.valor,
                    0
                  )}
                </td>
              </tr>

              {/* Costos */}
              <tr>
                <td className="fw-bold">Costos</td>
                <td></td>
              </tr>

              <tr>
                <td>{resultado.costos[1].nombre}</td>
                <td>{resultado.costos[1].valor}</td>
              </tr>

              <tr className="table-primary">
                <td>Utilidad Bruta</td>
                <td>${resultado?.utilidad_bruta}</td>
              </tr>
              <tr>
                <td>{resultado.costos[0].nombre}</td>
                <td>{resultado.costos[0].valor}</td>
              </tr>
              <tr className="table-primary">
                <td>Utilidad Operativa</td>
                <td>${resultado?.utilidad_operativa}</td>
              </tr>
              <tr>
                <td>Gastos por intereses</td>
                <td>{resultado.intereses}</td>
              </tr>
              <tr className="table-primary">
                <td>Utilidad neta antes de impuestos</td>
                <td>${resultado?.utilidad_n_adi}</td>
              </tr>
              <tr>
                <td>Impuestos</td>
                <td>{resultado.impuesto.toFixed(2)}</td>
              </tr>
              <tr className="table-primary">
                <td>Utilidad neta despues de impuestos</td>
                <td>${resultado?.utilidad_n_ddi.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
