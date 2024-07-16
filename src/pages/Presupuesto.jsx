import { useState, useEffect } from 'react';
import PresupuestoForm from '../components/presupuesto/PresupuestoForm';
import TablaPresupuesto from '../components/presupuesto/TablaPresupuesto';

const Presupuesto = () => {
  const [datos, setDatos] = useState(null);
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/presupuesto/list/');
        const data = await response.json();
        setBackendData({
          entradas: data.entradas,
          desembolsos: data.desembolsos,
          flujoNeto: data.flujo_neto,
          efectivoInicial: 0 // 0 por defecto
        });
      } catch (error) {
        console.error('Error fetching backend data:', error);
      }
    };

    fetchBackendData();
  }, []);

  const handleFormSubmit = (formData) => {
    if (backendData) {
      const integratedData = {
        ...backendData,
        saldoMinimo: formData.saldoMinimo
      };
      setDatos(integratedData);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Presupuesto de Caja</h1>
      <PresupuestoForm onSubmit={handleFormSubmit} />
      {datos && <TablaPresupuesto datos={datos} />}
    </div>
  );
};

export default Presupuesto;
