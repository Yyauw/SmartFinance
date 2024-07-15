import TablaAmortizacion from "../components/calculadora/TablaAmortizacion";
import CalculadoraForm from "../components/calculadora/CalculadoraForm";
import { useState } from "react";

const crearTablaAmortizacion = (datos) => {
  const { monto, interes, plazo, frecuencia, fechaInicio } = datos;
  // Cálculo del número total de periodos de pago
  const periodos = plazo * frecuencia;
  // Cálculo de la tasa de interés por periodo
  const tasa = interes / 100 / frecuencia;
  // Cálculo de la cuota fija mensual
  const cuota = monto * (tasa / (1 - Math.pow(1 + tasa, -periodos)));
  const amortizacion = [];
  let saldo = monto;
  let fecha = new Date(fechaInicio);

  // Bucle para calcular cada fila de la tabla de amortización
  for (let i = 0; i < periodos; i++) {
    const intereses = saldo * tasa;
    const capital = cuota - intereses;

    saldo -= capital;
    amortizacion.push({
      fecha: fecha.toLocaleDateString("en-GB"),
      cuota,
      intereses,
      capital,
      saldo,
    });
    fecha.setMonth(fecha.getMonth() + 1 * (12 / frecuencia));
  }
  return amortizacion;
};

export default function Calculadora() {
  const [amortizacion, setAmortizacion] = useState([]);

  const calcularFinanciamiento = (datos) => {
    console.log(datos);
    const tablaAmortizacion = crearTablaAmortizacion(datos);
    setAmortizacion(tablaAmortizacion);
  };

  return (
    <div className="container mt-4">
      <h1>Calculadora Financiera</h1>
      <p>Proyección de financiamiento </p>
      <CalculadoraForm calcularFinanciamiento={calcularFinanciamiento} />
      <TablaAmortizacion amortizacion={amortizacion} />
    </div>
  );
}
