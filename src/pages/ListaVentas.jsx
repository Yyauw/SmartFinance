import TablaVentas from "../components/ventas/TablaVentas";
import { useState, useEffect } from "react";

export default function ListaVentas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/api/ventas_an/list/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
      setVentas(data);
    };
    fetchData();
  }, []);

  return (
    <section className="container mt-4">
      <TablaVentas ventas={ventas} />
    </section>
  );
}
