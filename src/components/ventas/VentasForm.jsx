import { useState } from "react";

export default function VentasForm({ productos, registrarVenta }) {
  if (productos.length === 0) {
    return <h1>Cargando...</h1>;
  }
  //console.log(productos);
  const [venta, setVenta] = useState({
    fecha: new Date().toISOString().split("T")[0],
    cantidad: 0,
    producto: 1,
    nombreProducto: "Aji chombo",
    credito: false,
  });

  const onChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(venta);
    if (e.target.name === "producto") {
      const producto = productos.find((p) => p.id === parseInt(e.target.value));
      setVenta({
        ...venta,
        [e.target.name]: e.target.value,
        nombreProducto: producto.descripcion,
      });
      return;
    }
    setVenta({ ...venta, [e.target.name]: e.target.value });
  };

  const checkHandler = (e) => {
    setVenta({ ...venta, [e.target.name]: e.target.checked });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    registrarVenta(venta);
  };

  return (
    <section className="border shadow rounded p-3 row">
      <div className="col-md-6 ">
        <h3>Registrar venta</h3>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              name="fecha"
              onChange={onChangeHandler}
              value={venta.fecha}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="producto" className="form-label">
              Producto
            </label>
            <select
              className="form-select"
              name="producto"
              onChange={onChangeHandler}
              value={venta.producto}
              required
            >
              {productos.map((producto) => (
                <option key={producto.id} value={producto.id}>
                  {producto.descripcion}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="cantidad" className="form-label">
              cantidad
            </label>
            <input
              type="number"
              className="form-control"
              name="cantidad"
              onChange={onChangeHandler}
              value={venta.cantidad}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="credito"
              onChange={checkHandler}
              value={venta.credito}
            />
            <label htmlFor="" className="form-label">
              Venta a credito
            </label>
          </div>

          <button className="btn btn-primary">Registrar Venta</button>
        </form>
      </div>
      <div className="col-md-6">
        <h3>Previsualizacion</h3>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label fw-bold">
            Fecha
          </label>
          <p>{venta.fecha}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label fw-bold">
            Producto
          </label>
          <p>{venta.nombreProducto}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label fw-bold">
            cantidad
          </label>
          <p>{venta.cantidad}</p>
        </div>
        <div className="mb-2">
          <label htmlFor="cantidad" className="form-label fw-bold">
            Precio unitario:{" "}
            <span className="fw-normal">
              {productos[venta.producto - 1].previo_venta}
            </span>
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label fw-bold">
            Total
          </label>
          <p>{venta.cantidad * productos[venta.producto - 1].previo_venta}</p>
        </div>

        <div className="mb-3 ">
          <p htmlFor="costoFijo" className="fw-bold">
            Venta a credito: {venta.credito ? "Si" : "No"}
          </p>
        </div>
      </div>
    </section>
  );
}
