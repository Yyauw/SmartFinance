import { useState } from "react";

export default function CalculadoraForm({ calcularFinanciamiento }) {
  const [datos, setDatos] = useState({
    monto: "",
    interes: "",
    plazo: "",
    frecuencia: 1,
    fechaInicio: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    calcularFinanciamiento(datos);
  };

  return (
    <form onSubmit={submitHandler} className="border shadow rounded p-3">
      <section className="row">
        <div className="mb-3 col-4">
          <label htmlFor="form-label">Monto del prestamo</label>
          <input
            type="number"
            min="0"
            className="form-control"
            name="monto"
            value={datos.monto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="form-label">Tasa de interes anual</label>
          <div className="input-group">
            <input
              type="number"
              min="0"
              step=".01"
              className="form-control"
              name="interes"
              value={datos.interes}
              onChange={handleInputChange}
              required
            />
            <span className="input-group-text" id="basic-addon2">
              %
            </span>
          </div>
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="form-label">Plazo de prestamo</label>
          <div className="input-group">
            <input
              type="number"
              min="0"
              className="form-control"
              name="plazo"
              value={datos.plazo}
              onChange={handleInputChange}
              required
            />
            <span className="input-group-text" id="basic-addon2">
              años
            </span>
          </div>
        </div>
      </section>
      <section className="row">
        <div className="mb-3 col-6">
          <label htmlFor="form-label">Frecuencia de pago</label>
          <select
            name="frecuencia"
            id=""
            className="form-control"
            onChange={handleInputChange}
            required
          >
            <option value="1">Anual</option>
            <option value="4">Trimestral</option>
            <option value="12">Mensual</option>
          </select>
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="form-label">Fecha de inicio</label>
          <input
            type="date"
            className="form-control"
            name="fechaInicio"
            value={datos.fecha}
            onChange={handleInputChange}
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
