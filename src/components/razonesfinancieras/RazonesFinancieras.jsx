import React, { useEffect, useState } from 'react';
import './RazonesFinancieras.css';

const RazonesFinancieras = () => {
  const [razones, setRazones] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRazonesFinancieras = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/razones_financieras/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRazones(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching razones financieras:', error);
      }
    };

    fetchRazonesFinancieras();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!razones) {
    return <div className="loading">Cargando...</div>;
  }

  const getIndicator = (value, thresholds) => {
    if (value < thresholds.low) {
      return 'Bajo';
    } else if (value < thresholds.high) {
      return 'Adecuado';
    } else {
      return 'Alto';
    }
  };

  const categorias = {
    Liquidez: [
      {
        name: 'Liquidez Corriente',
        value: razones.liquidez_corriente,
        indicator: getIndicator(razones.liquidez_corriente, { low: 1, high: 2 }),
      },
      {
        name: 'Razón Rápida',
        value: razones.razon_rapida,
        indicator: getIndicator(razones.razon_rapida, { low: 1, high: 1.5 }),
      },
    ],
    Actividad: [
      {
        name: 'Rotación de Inventario',
        value: razones.rotacion_inventario,
        indicator: getIndicator(razones.rotacion_inventario, { low: 1, high: 5 }),
      },
      {
        name: 'Periodo Promedio de Cobro',
        value: razones.periodo_promedio_cobro,
        indicator: getIndicator(razones.periodo_promedio_cobro, { low: 0.5, high: 1.5 }),
      },
      {
        name: 'Periodo Promedio de Pago',
        value: razones.periodo_promedio_pago,
        indicator: getIndicator(razones.periodo_promedio_pago, { low: 1, high: 2 }),
      },
      {
        name: 'Rotación de Activos',
        value: razones.rotacion_activos,
        indicator: getIndicator(razones.rotacion_activos, { low: 0.5, high: 2 }),
      },
    ],
    Endeudamiento: [
      {
        name: 'Nivel de Endeudamiento',
        value: razones.nivel_endeudamiento,
        indicator: getIndicator(razones.nivel_endeudamiento, { low: 0.2, high: 0.6 }),
      },
      {
        name: 'Concentración de Endeudamiento a Corto Plazo',
        value: razones.concentracion_endeudamiento_corto_plazo,
        indicator: getIndicator(razones.concentracion_endeudamiento_corto_plazo, { low: 0.1, high: 0.4 }),
      },
      {
        name: 'Cobertura de Intereses',
        value: razones.cobertura_de_interes,
        indicator: getIndicator(razones.cobertura_de_interes, { low: 1.5, high: 3 }),
      },
    ],
    Rentabilidad: [
      {
        name: 'Margen de Utilidad Bruta',
        value: razones.margen_utilidad_bruta,
        indicator: getIndicator(razones.margen_utilidad_bruta, { low: 0.2, high: 0.5 }),
      },
      {
        name: 'Margen de Utilidad Operativa',
        value: razones.margen_utilidad_operativa,
        indicator: getIndicator(razones.margen_utilidad_operativa, { low: 0.1, high: 0.3 }),
      },
      {
        name: 'Margen de Utilidad Neta',
        value: razones.margen_utilidad_neta,
        indicator: getIndicator(razones.margen_utilidad_neta, { low: 0.05, high: 0.2 }),
      },
    ],
  };

  return (
    <section className="razones-financieras-page">
      <div className="container">
        <h1 className="title">Razones Financieras</h1>
        {Object.keys(categorias).map((categoria, index) => (
          <div key={index} className="categoria-card">
            <h2 className="categoria-title">{categoria}</h2>
            <div className="razones-list">
              {categorias[categoria].map((razon, i) => (
                <div key={i} className="razon-item">
                  <span className="razon-name">{razon.name}</span>
                  <span className={`razon-value ${razon.indicator.toLowerCase()}`}>{razon.value.toFixed(2)}</span>
                  <span className={`razon-indicator ${razon.indicator.toLowerCase()}`}>{razon.indicator}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RazonesFinancieras;
