import ExportarExcelButton from "../calculadora/ExportarExcelButton";

export default function TablaEquilibrio({ equilibrio }) {
  console.log(equilibrio);

  if (!Array.isArray(equilibrio) || equilibrio.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <section className="border shadow my-3 rounded p-1" id="tablaEquilibrio">
      <div className="ps-2">
        <h1>Punto de Equilibrio</h1>
        <p>Punto de equilibrio mensual en base a un costo fijo de 4700$</p>
        <ExportarExcelButton
          nombreTabla="tablaEquilibrio"
          nombreArchivo="Punto_de_Equilibrio"
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Margen de Contribucion</th>
              <th>Precio de Venta</th>
              <th>Cantidad Vendida</th>
              <th>Porcentaje Mezcla Venta</th>
              <th>Razon de Venta</th>
              <th>Equilibrio Ingresos</th>
            </tr>
          </thead>
          <tbody>
            {equilibrio.map((fila, index) => (
              <tr key={index}>
                <td>{fila.id_producto}</td>
                <td>{fila.description}</td>
                <td>${fila.margen_contribucion}</td>
                <td>${fila.precio_venta}</td>
                <td>{fila.cantidad_vendida.toFixed(0)}</td>
                <td>{(fila.porcentaje_mezcla_venta * 100).toFixed(2)}%</td>
                <td>{fila.equilibrio_cantidad.toFixed(0)}</td>
                <td>${fila.equilibrio_ingresos.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
