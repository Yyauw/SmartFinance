import TablaDepreciacion from "../components/depreciacion/TablaDepreciacion";
import { useState, useEffect } from "react";

export default function Depreciacion() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/activos_dep", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      //console.log(response);
      const data = await response.json();
      console.log(data.totales);
      setDatos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <TablaDepreciacion depreciacion={datos} />
    </div>
  );
}
