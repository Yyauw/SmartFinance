import ExportarExcelButton from "../calculadora/ExportarExcelButton";
import { useState, useEffect } from "react";

export default function TablaProforma({ resultado }) {
  console.log(resultado);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (resultado.ventas) setShowTable(true);
  }, [resultado]);

  return (
    <div className="col-md-6">
      <section
        className="border shadow my-3 rounded p-1"
        id="tablaResultadoPro"
      >
        <div className="ps-2">
          <h1>Proforma</h1>
          {/* <p>Punto de equilibrio mensual en base a un costo fijo de 4700$</p> */}
          {showTable && (
            <ExportarExcelButton
              nombreTabla="tablaResultadoPro"
              nombreArchivo="estado_resultado_proforma"
            />
          )}
        </div>
        {showTable ? (
          <div className="table-responsive">
            <table className="table ">
              <thead></thead>
              <tbody>
                {/* Ingresos */}
                <tr>
                  <td className="fw-bold">Ingresos</td>
                  <td></td>
                </tr>
                <tr>
                  <td>{resultado.ingresos[0].nombre}</td>
                  <td>{resultado.ingresos[0].valor.toFixed(2)}</td>
                </tr>

                <tr className="table-primary">
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Total Ingresos</td>
                  <td className="text-end">
                    $
                    {resultado?.ingresos
                      .reduce((prev, current) => prev + current.valor, 0)
                      .toFixed(2)}
                  </td>
                </tr>

                {/* Costos */}
                <tr>
                  <td className="fw-bold">Costos</td>
                  <td></td>
                </tr>

                <tr>
                  <td>{resultado.costos[1].nombre}</td>
                  <td>{resultado.costos[1].valor.toFixed(2)}</td>
                </tr>

                <tr className="table-primary">
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Utilidad Bruta</td>
                  <td className="text-end">
                    ${resultado.utilidad_bruta.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td>{resultado.costos[0].nombre}</td>
                  <td>{resultado.costos[0].valor.toFixed(2)}</td>
                </tr>
                <tr className="table-primary">
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;Utilidad Operativa</td>
                  <td className="text-end">
                    ${resultado?.utilidad_operativa.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td>
                    Gastos por intereses{" "}
                    {`(${resultado.porcentajeIntereses.toFixed(2)})`}
                  </td>
                  <td>{resultado.intereses.toFixed(2)}</td>
                </tr>
                <tr className="table-primary">
                  <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;Utilidad neta antes de impuestos
                  </td>
                  <td className="text-end">
                    ${resultado?.utilidad_n_adi.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td>Impuestos {`(${resultado.porcentajeImpuesto})`}</td>
                  <td>{resultado.impuesto.toFixed(2)}</td>
                </tr>
                <tr className="table-primary">
                  <td>
                    &nbsp;&nbsp;&nbsp;&nbsp;Utilidad neta despues de impuestos
                  </td>
                  <td className="text-end">
                    $
                    {(resultado?.utilidad_n_adi - resultado.impuesto).toFixed(
                      2
                    )}
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
