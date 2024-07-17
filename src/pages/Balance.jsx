import TablaBalance from "../components/balance/TablaBalance";
import BalanceForm from "../components/balance/BalanceForm";
import BalanceProforma from "../components/balance/BalanceProforma";
import { act, useEffect, useState } from "react";

export default function Balance() {
  const [datos, setDatos] = useState([]);
  const [proforma, setProforma] = useState([]);

  const calcularProforma = (pronostico) => {
    const totalActivo = datos.activos.total_activos;
    const p_activos =
      datos.activos.total_activos +
      datos.activos.total_activos * (pronostico / 100);

    const activosCorrientes = datos.activos.activos_corrientes.map((activo) => {
      return {
        ...activo,
        valor: p_activos * (activo.valor / totalActivo),
      };
    });

    const activosFijos = datos.activos.activos_fijos.map((activo) => {
      return {
        ...activo,
        valor: p_activos * (activo.valor / totalActivo),
      };
    });

    const activosNetos =
      activosFijos[activosFijos.length - 1].valor -
      p_activos * (datos.activos.depreciacion / totalActivo);

    const pasivosCorrientes = datos.pasivos.pasivos_corrientes.map((pasivo) => {
      return {
        ...pasivo,
        valor: p_activos * (pasivo.valor / totalActivo),
      };
    });

    setProforma({
      ...datos,
      activos: {
        ...datos.activos,
        activos_corrientes: activosCorrientes,
        activos_fijos: activosFijos,
        depreciacion: p_activos * (datos.activos.depreciacion / totalActivo),
        activos_netos: activosNetos,
        total_activos:
          activosCorrientes[activosCorrientes.length - 1].valor + activosNetos,
      },
      pasivos: {
        ...datos.pasivos,
        pasivos_corrientes: pasivosCorrientes,
        pasivos_largo_plazo:
          p_activos * (datos.pasivos.pasivos_largo_plazo / totalActivo),
        total_pasivos:
          pasivosCorrientes[pasivosCorrientes.length - 1].valor +
          p_activos * (datos.pasivos.pasivos_largo_plazo / totalActivo),
      },
      patrimonio: p_activos * (datos.patrimonio / totalActivo),
      ventas: "si",
    });

    console.log(activosCorrientes);
  };

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
      <BalanceForm calcularProforma={calcularProforma} />
      <div className="row">
        <TablaBalance balance={datos} />
        <BalanceProforma balance={proforma} />
      </div>
    </div>
  );
}
