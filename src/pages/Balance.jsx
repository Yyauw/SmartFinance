import TablaBalance from "../components/balance/TablaBalance";
import BalanceForm from "../components/balance/BalanceForm";
import BalanceProforma from "../components/balance/BalanceProforma";
import { useEffect, useState } from "react";

export default function Balance() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/balance/list/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setDatos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Balance General</h1>
      <BalanceForm />
      <div className="row">
        <TablaBalance balance={datos} />
        <BalanceProforma />
      </div>
    </div>
  );
}
