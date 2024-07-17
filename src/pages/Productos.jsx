import { useState, useEffect } from 'react';
import ProductosList from '../components/productos/ProductosList';
import ProductoForm from '../components/productos/ProductoForm';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/productos/list/');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleAddProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Productos</h1>
      <div className="row">
        <div className="col-md-3">
          <ProductoForm onAddProducto={handleAddProducto} />
        </div>
        <div className="col-md-9" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <ProductosList productos={productos} />
        </div>
      </div>
    </div>
  );
};

export default Productos;