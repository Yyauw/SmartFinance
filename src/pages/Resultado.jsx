import ResultadoForm from "../components/resultado/ResultadoForm";
import TablaResultado from "../components/resultado/TablaResultado";
import TablaProforma from "../components/resultado/TablaProforma";
import { useEffect, useState } from "react";

export default function Resultado() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:8000/api/resultado/list/",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setDatos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <ResultadoForm />
      <div className="row">
        <TablaResultado resultado={datos} />
        <TablaProforma />
      </div>
    </div>
  );
}
