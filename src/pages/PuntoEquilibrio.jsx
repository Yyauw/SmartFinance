import { useEffect, useState } from "react";
import TablaEquilibrio from "../components/equilibrio/TablaEquilibrio";

export default function PuntoEquilibrio() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/api/punto_equilibrio/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      setDatos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <TablaEquilibrio equilibrio={datos} />
    </div>
  );
}
