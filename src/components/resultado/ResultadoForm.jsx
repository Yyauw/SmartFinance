import { useRef } from "react";

export default function ResultadoForm({ calcularProforma, modificarTasa }) {
  const porcentajeRef = useRef();
  const tasaRef = useRef();

  const tasaHandler = (e) => {
    e.preventDefault();
    modificarTasa(tasaRef.current.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    calcularProforma(porcentajeRef.current.value);
  };

  return (
    <div className="border shadow rounded p-3">
      <section className="row">
        {" "}
        <form className="col-md-4" onSubmit={tasaHandler}>
          <h3>Tasa impositiva</h3>
          <div className="mb-3 ">
            <label htmlFor="costoFijo" className="form-label">
              Porcentaje tasa impositiva
            </label>
            <div className="input-group">
              <input
                type="number"
                min="0"
                step=".01"
                className="form-control"
                name="tasa"
                ref={tasaRef}
                placeholder="25"
                required
              />
              <span className="input-group-text" id="basic-addon2">
                %
              </span>
            </div>
          </div>
          <button className="btn btn-primary">Aplicar</button>
        </form>
        <div className="col-md-3"></div>
        <form onSubmit={submitHandler} className="col-md-4">
          <h3>Calcular Pronostico - Proforma</h3>
          <div className="mb-3 ">
            <label htmlFor="costoFijo" className="form-label">
              Porcentaje de venta esperado
            </label>
            <div className="input-group">
              <input
                type="number"
                step=".01"
                className="form-control"
                name="pronostico"
                ref={porcentajeRef}
                required
              />
              <span className="input-group-text" id="basic-addon2">
                %
              </span>
            </div>
          </div>
          <button className="btn btn-primary">Generar</button>
        </form>
      </section>
    </div>
  );
}
