import ExportarExcelButton from "../calculadora/ExportarExcelButton";

export default function TablaBalance({ balance }) {
  console.log(balance);
  if (balance.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <div className="col-md-6">
      <section className="border shadow my-3 rounded p-1" id="balanceGeneral">
        <div className="ps-2">
          <h1>Balance General</h1>

          <ExportarExcelButton
            nombreTabla="balanceGeneral"
            nombreArchivo="balance_general"
          />
        </div>
        <div className="table-responsive">
          <table className="table table-striped ">
            <thead></thead>
            <tbody>
              {/* Activos */}
              <tr>
                <td className="fw-bold">Activos</td>
                <td></td>
              </tr>
              {balance.activos.activos_corrientes.map((fila, index) => {
                if (index === balance.activos.activos_corrientes.length - 1) {
                  return (
                    <tr key={index}>
                      <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {fila.nombre}
                      </td>
                      <td className="text-end">{fila.valor.toFixed(2)}</td>
                    </tr>
                  );
                }

                return (
                  <tr key={index}>
                    <td>{fila.nombre}</td>
                    <td>{fila.valor.toFixed(2)}</td>
                  </tr>
                );
              })}
              {balance.activos.activos_fijos.map((fila, index) => {
                if (index === balance.activos.activos_corrientes.length - 1) {
                  return (
                    <tr key={index}>
                      <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {fila.nombre}
                      </td>
                      <td className="text-end">{fila.valor.toFixed(2)}</td>
                    </tr>
                  );
                }

                return (
                  <tr key={index}>
                    <td>{fila.nombre}</td>
                    <td>{fila.valor.toFixed(2)}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Menos: Depreciacion Acumulada</td>
                <td>{balance?.activos.depreciacion.toFixed(2)}</td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;Activos fijos netos</td>
                <td className="text-end">
                  {balance?.activos.activos_netos.toFixed(2)}
                </td>
              </tr>
              <tr className="table-primary">
                <td>&nbsp;&nbsp;&nbsp;&nbsp;Total Activos</td>
                <td className="text-end">
                  ${balance?.activos.total_activos.toFixed(2)}
                </td>
              </tr>
              {/* Pasivos */}
              <tr>
                <td className="fw-bold">Pasivos</td>
                <td></td>
              </tr>
              {balance.pasivos.pasivos_corrientes.map((fila, index) => {
                if (index === balance.pasivos.pasivos_corrientes.length - 1) {
                  return (
                    <tr key={index}>
                      <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {fila.nombre}
                      </td>
                      <td className="text-end">{fila.valor.toFixed(2)}</td>
                    </tr>
                  );
                }

                return (
                  <tr key={index}>
                    <td>{fila.nombre}</td>
                    <td>{fila.valor.toFixed(2)}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Deuda a largo plazo</td>
                <td>{balance?.pasivos.pasivos_largo_plazo.toFixed(2)}</td>
              </tr>
              <tr className="table-primary">
                <td>&nbsp;&nbsp;&nbsp;&nbsp;Total pasivos</td>
                <td className="text-end">
                  ${balance?.pasivos.total_pasivos.toFixed(2)}
                </td>
              </tr>
              <tr className="table-primary">
                <td className="fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;Patrimonio</td>
                <td className="text-end">${balance?.patrimonio.toFixed(2)}</td>
              </tr>
              <tr className="table-primary">
                <td className="fw-bold">
                  &nbsp;&nbsp;&nbsp;&nbsp;Total Pasivos y Patrimonios
                </td>
                <td className="text-end">
                  $
                  {(
                    balance?.patrimonio + balance?.pasivos.total_pasivos
                  ).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
