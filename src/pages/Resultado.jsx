import ResultadoForm from "../components/resultado/ResultadoForm";
import TablaResultado from "../components/resultado/TablaResultado";
import TablaProforma from "../components/resultado/TablaProforma";
import { useEffect, useState } from "react";

export default function Resultado() {
  const [datos, setDatos] = useState([]);
  const [proforma, setProforma] = useState([]);

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
      setDatos({ ...data, impuestoPorcentaje: 0.25 });
      setProforma({ ...data, impuestoPorcentaje: 0.25 });
    };
    fetchData();
  }, []);

  const calcularProforma = (pronostico) => {
    const ventas = datos.ingresos[0].valor;
    const porcentajeVentas = pronostico / 100;
    const ingresosP =
      datos.ingresos[0].valor * porcentajeVentas + datos.ingresos[0].valor;
    //a
    const costosBV = datos.costos[1].valor / ventas;
    const gastosOP = datos.costos[0].valor / ventas;
    const gastosImpuesto = datos.impuesto / ventas;

    console.log(costosBV, gastosOP, gastosImpuesto);
    console.log(datos.costos[0].valor * gastosOP.toFixed(2));

    const P_costosBV = ingresosP * costosBV;
    const P_gastosOP = ingresosP * gastosOP;
    const P_gastosImpuesto = ingresosP * gastosImpuesto;
    const P_gastosIntereses = ingresosP * (datos.intereses / ventas);

    const ingresosProforma = [
      {
        nombre: datos.ingresos[0].nombre,
        valor: ingresosP,
      },
    ];

    setProforma({
      ...datos,
      ingresos: ingresosProforma,
      costos: [
        {
          nombre: datos.costos[0].nombre + ` (${gastosOP.toFixed(2)} x ventas)`,
          valor: P_gastosOP,
        },
        {
          nombre: datos.costos[1].nombre + ` (${costosBV.toFixed(2)} x ventas)`,
          valor: P_costosBV,
        },
      ],
      impuesto: P_gastosImpuesto,
      intereses: P_gastosIntereses,
      porcentajeImpuesto: gastosImpuesto.toFixed(2),
      porcentajeIntereses: datos.intereses / ventas,
      utilidad_bruta: ingresosP - P_costosBV,
      utilidad_operativa: ingresosP - P_costosBV - P_gastosOP,
      utilidad_n_adi: ingresosP - P_costosBV - P_gastosOP - datos.intereses,
      utilidad_n_ddi:
        ingresosP -
        P_costosBV -
        P_gastosOP -
        P_gastosIntereses -
        P_gastosImpuesto,
      ventas: ventas,
    });
    console.log();

    // setProforma({
    //   ventas: ventas,
    //   porcentajeVentas: porcentajeVentas,
    //   ingresosP: ingresosP,
    //   costosBV: costosBV,
    //   gastosOP: gastosOP,
    //   gastosIntereses: gastosIntereses,
    //   P_costosBV: P_costosBV,
    //   P_gastosOP: P_gastosOP,
    //   P_gastosIntereses: P_gastosIntereses,
    // });
  };

  const modificarTasa = (tasa) => {
    const tasaNueva = datos.utilidad_n_adi * (tasa / 100);
    setDatos({ ...datos, impuesto: tasaNueva, impuestoPorcentaje: tasa / 100 });
    setProforma({
      ...proforma,
      impuesto: proforma.utilidad_n_adi * (tasa / 100),
      impuestoPorcentaje: tasa / 100,
    });
  };

  return (
    <div className="container mt-4">
      <ResultadoForm
        calcularProforma={calcularProforma}
        modificarTasa={modificarTasa}
      />
      <div className="row">
        <TablaResultado resultado={datos} />
        <TablaProforma resultado={proforma} />
      </div>
    </div>
  );
}
