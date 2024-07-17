import { useState } from "react";

export default function PresupuestoForm({ onSubmit }) {
  const [datos, setDatos] = useState({
    saldoMinimo: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      saldoMinimo: parseFloat(datos.saldoMinimo),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border shadow rounded p-3">
      <section className="row">
        <div className="mb-3 col-12">
          <label htmlFor="saldoMinimo" className="form-label">Saldo de efectivo mínimo</label>
          <input
            type="number"
            min="0"
            className="form-control"
            name="saldoMinimo"
            value={datos.saldoMinimo}
            onChange={handleInputChange}
            placeholder="Ingrese saldo mínimo"
            required
          />
        </div>
      </section>
      <div className="row p-2">
        <div className="col-10"></div>
        <button className="btn btn-primary col-2">Calcular</button>
      </div>
    </form>
  );
}
