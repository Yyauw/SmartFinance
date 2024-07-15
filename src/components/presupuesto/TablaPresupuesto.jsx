import React from 'react';

const TablaPresupuesto = ({ datos }) => {
  const { entradas, desembolsos, efectivoInicial, saldoMinimo } = datos;

  const calcularPresupuesto = () => {
    let efectivoFinalMesAnterior = efectivoInicial;
    const presupuesto = [];

    for (let i = 0; i < 12; i++) {
      const entrada = entradas[i];
      const desembolso = desembolsos[i];
      const flujoNeto = entrada - desembolso;
      const efectivoFinal = flujoNeto + efectivoFinalMesAnterior;
      const financiamientoRequerido = efectivoFinal < saldoMinimo ? saldoMinimo - efectivoFinal : 0;
      const saldoExcedente = efectivoFinal > saldoMinimo ? efectivoFinal - saldoMinimo : 0;

      presupuesto.push({
        mes: i + 1,
        entrada,
        desembolso,
        flujoNeto,
        efectivoFinal,
        financiamientoRequerido,
        saldoExcedente,
      });

      efectivoFinalMesAnterior = efectivoFinal;
    }

    return presupuesto;
  };

  const presupuesto = calcularPresupuesto();

  return (
    <section className="border shadow my-3 rounded p-1" id="tablaPresupuesto">
      <div className="ps-2">
        <h1 className="mb-2 mt-1">Presupuesto de Caja</h1>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Descripción</th>
            {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((mes, index) => (
              <th key={index}>{mes}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total de entradas de efectivo<sup>a</sup></td>
            {presupuesto.map(({ entrada }, index) => (
              <td key={index}>${entrada.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Menos: Total de desembolsos de efectivo<sup>b</sup></td>
            {presupuesto.map(({ desembolso }, index) => (
              <td key={index}>${desembolso.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            <td colSpan={12} style={{ textAlign: 'center', borderTop: '2px solid black' }}>
            </td>
          </tr>
          <tr>
            <td style={{ paddingLeft: '20px' }}>Flujo de efectivo neto</td>
            {presupuesto.map(({ flujoNeto }, index) => (
              <td key={index}>${flujoNeto.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Más: Efectivo inicial</td>
            {presupuesto.map((_, index) => (
              <td key={index}>${index === 0 ? efectivoInicial.toFixed(2) : presupuesto[index - 1].efectivoFinal.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            <td colSpan={12} style={{ textAlign: 'center', borderTop: '2px solid black' }}>
            </td>
          </tr>
          <tr>
            <td style={{ paddingLeft: '20px' }}>Efectivo final</td>
            {presupuesto.map(({ efectivoFinal }, index) => (
              <td key={index}>${efectivoFinal.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Menos: Saldo de efectivo mínimo</td>
            {presupuesto.map((_, index) => (
              <td key={index}>${saldoMinimo.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            <td colSpan={12} style={{ textAlign: 'center', borderTop: '2px solid black' }}>
            </td>
          </tr>
          <tr>
            <td style={{ paddingLeft: '20px' }}>Financiamiento total requerido (documentos por pagar)<sup>c</sup></td>
            {presupuesto.map(({ financiamientoRequerido }, index) => (
              <td key={index}>${financiamientoRequerido.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td style={{ paddingLeft: '20px' }}>Saldo de efectivo excedente (valores negociables)<sup>d</sup></td>
            {presupuesto.map(({ saldoExcedente }, index) => (
              <td key={index}>${saldoExcedente.toFixed(2)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TablaPresupuesto;
