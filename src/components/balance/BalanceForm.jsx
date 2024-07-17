import { useRef } from "react";

export default function BalanceForm({ calcularProforma }) {
  const porcentajeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    calcularProforma(porcentajeRef.current.value);
  };

  return (
    <div className="border shadow rounded p-3">
      <h3>Calcular Pronostico - Proforma</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3 col-md-4">
          <label htmlFor="costoFijo" className="form-label">
            Porcentaje de venta esperado
          </label>
          <div className="input-group">
            <input
              type="number"
              min="0"
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
    </div>
  );
}
