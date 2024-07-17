import ExportarExcelButton from "../calculadora/ExportarExcelButton";
import { useEffect, useState } from "react";

export default function BalanceProforma({ balance, viejo }) {
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (balance.ventas) setShowTable(true);
  }, [balance]);

  return (
    <div className="col-md-6">
      <section
        className="border shadow my-3 rounded p-1"
        id="tablaBalanceProforma"
      >
        <div className="ps-2">
          <h1>Proforma</h1>
          {showTable && (
            <ExportarExcelButton
              nombreTabla="tablaBalanceProforma"
              nombreArchivo="Balance_Proforma"
            />
          )}
        </div>
        {showTable ? (
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
                {viejo.activos.activos_fijos.map((fila, index) => {
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
                  <td>{(16000).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Activos netos</td>
                  <td className="text-end">
                    {(viejo?.activos.activos_netos.toFixed(2) - 4000).toFixed(
                      2
                    )}
                  </td>
                </tr>
                <tr className="table-primary">
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Total Activos</td>
                  <td className="text-end">
                    $
                    {(
                      viejo?.activos.activos_netos.toFixed(2) -
                      4000 +
                      balance.activos.activos_corrientes[
                        balance.activos.activos_corrientes.length - 1
                      ].valor
                    ).toFixed(2)}
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
                  <td>{(30859.43).toFixed(2)}</td>
                </tr>
                <tr className="table-primary">
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Total pasivos</td>
                  <td className="text-end">
                    ${30859.43 + balance.pasivos.pasivos_corrientes[0].valor}
                  </td>
                </tr>
                <tr className="table-primary">
                  <td className="fw-bold">
                    &nbsp;&nbsp;&nbsp;&nbsp;Patrimonio
                  </td>
                  <td className="text-end">${22945.01}</td>
                </tr>
                <tr className="table-primary">
                  <td className="fw-bold">
                    &nbsp;&nbsp;&nbsp;&nbsp;Total Pasivos y Patrimonios
                  </td>
                  <td className="text-end">
                    $
                    {(
                      22945.01 +
                      (30859.43 + balance.pasivos.pasivos_corrientes[0].valor)
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td>Financiamiento externo requerido</td>
                  <td>
                    {(
                      viejo?.activos.activos_netos.toFixed(2) -
                      4000 +
                      balance.activos.activos_corrientes[
                        balance.activos.activos_corrientes.length - 1
                      ].valor -
                      (22945.01 +
                        (30859.43 +
                          balance.pasivos.pasivos_corrientes[0].valor))
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr className="table-primary">
                  <td className="fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;Total</td>
                  <td className="text-end">
                    $
                    {(
                      viejo?.activos.activos_netos.toFixed(2) -
                      4000 +
                      balance.activos.activos_corrientes[
                        balance.activos.activos_corrientes.length - 1
                      ].valor
                    ).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="ms-2">
            Ingrese un procentaje de venta esperado para generar el proforma
          </p>
        )}
      </section>
    </div>
  );
}
