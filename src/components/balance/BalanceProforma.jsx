import ExportarExcelButton from "../calculadora/ExportarExcelButton";

export default function BalanceProforma({}) {
  return (
    <div className="col-md-6">
      <section className="border shadow my-3 rounded p-1" id="tablaEquilibrio">
        <div className="ps-2">
          <h1>Proforma</h1>
          <p>Punto de equilibrio mensual en base a un costo fijo de 4700$</p>
          <ExportarExcelButton
            nombreTabla="tablaEquilibrio"
            nombreArchivo="Punto_de_Equilibrio"
          />
        </div>
      </section>
    </div>
  );
}
