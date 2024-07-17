import React from 'react';
import './ProductosList.css';

const ProductosList = ({ productos }) => {
  return (
    <div className="row mt-4">
      {productos.map((producto) => (
        <div key={producto.id} className="col-md-4 mb-3">
          <div className="card producto-card shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="text-center">
                <h5 className="card-title">{producto.descripcion}</h5>
              </div>
              <div className="card-text text-center mt-3">
                <p className="precio-venta"><strong>${producto.previo_venta}</strong></p>
                <p className="costo-unitario text-muted"><small>Costo: ${producto.costo_unitario}</small></p>
                <p className="codigo-producto text-muted"><small>Código: {producto.codigo}</small></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductosList;