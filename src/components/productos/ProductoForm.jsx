import { useState } from "react";

const ProductoForm = ({ onAddProducto }) => {
  const [nuevoProducto, setNuevoProducto] = useState({
    codigo: "",
    descripcion: "",
    costo_unitario: "",
    previo_venta: "",
  });

  const handleInputChange = (event) => {
    setNuevoProducto({
      ...nuevoProducto,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/productos/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoProducto),
      });
      const data = await response.json();
      onAddProducto(data);
      setNuevoProducto({
        codigo: "",
        descripcion: "",
        costo_unitario: "",
        previo_venta: "",
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border shadow rounded p-3 mb-4">
      <h3 className="text-center mb-4">Agregar Producto</h3>
      <div className="mb-3">
        <label htmlFor="codigo" className="form-label">Código</label>
        <input
          type="text"
          className="form-control"
          name="codigo"
          value={nuevoProducto.codigo}
          onChange={handleInputChange}
          placeholder="Ingrese código"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">Descripción</label>
        <input
          type="text"
          className="form-control"
          name="descripcion"
          value={nuevoProducto.descripcion}
          onChange={handleInputChange}
          placeholder="Ingrese descripción"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="costo_unitario" className="form-label">Costo Unitario</label>
        <input
          type="decimal"
          min="0"
          className="form-control"
          name="costo_unitario"
          value={nuevoProducto.costo_unitario}
          onChange={handleInputChange}
          placeholder="Ingrese costo unitario"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="previo_venta" className="form-label">Precio de Venta</label>
        <input
          type="decimal"
          min="0"
          className="form-control"
          name="previo_venta"
          value={nuevoProducto.previo_venta}
          onChange={handleInputChange}
          placeholder="Ingrese precio de venta"
          required
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Agregar Producto</button>
      </div>
    </form>
  );
};

export default ProductoForm;