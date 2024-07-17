import { useState, useEffect } from "react";
import VentasForm from "../components/ventas/VentasForm";
import VentasHoy from "../components/ventas/VentasHoy";

export default function Ventas() {
  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);

  const fetchVentas = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/ventas_an/fecha/?fecha=${new Date()
          .toISOString()
          .slice(0, 10)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
      setVentas(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/productos/list/"
        );
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchVentas();
    fetchProductos();
  }, []);

  const registrarVenta = (nuevaVenta) => {
    console.log(nuevaVenta);
    console.log(productos);
    const montoTotal =
      nuevaVenta.cantidad * productos[nuevaVenta.producto - 1].previo_venta;

    const fechaCredito = new Date(
      new Date().getTime() + 10 * 24 * 60 * 60 * 1000
    );
    const venta = {
      fecha: nuevaVenta.fecha,
      transaccion: 20000 + Math.floor(Math.random() * 1000000),
      producto: nuevaVenta.producto,
      cantidad: nuevaVenta.cantidad,
      precio: productos[nuevaVenta.producto - 1].previo_venta,
      monto: montoTotal,
      credito_otorgado: nuevaVenta.credito,
      abono_mitad: nuevaVenta.credito
        ? (montoTotal / 2).toFixed(2)
        : montoTotal,
      fecha_cancelacion: nuevaVenta.credito
        ? fechaCredito.toISOString().slice(0, 10)
        : new Date().toISOString().slice(0, 10),
      cancelacion: nuevaVenta.credito ? (montoTotal / 2).toFixed(2) : 0,
    };

    fetch("http://127.0.0.1:8000/api/ventas_an/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(venta),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetchVentas();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Ventas</h1>
      <VentasForm productos={productos} registrarVenta={registrarVenta} />
      <VentasHoy ventas={ventas} productos={productos} />
    </div>
  );
}
