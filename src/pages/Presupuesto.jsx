import { useState, useEffect } from 'react';
import PresupuestoForm from '../components/presupuesto/PresupuestoForm';
import TablaPresupuesto from '../components/presupuesto/TablaPresupuesto';

const Presupuesto = () => {
  const [datos, setDatos] = useState(null);
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchBackendData = async () => {
      const data = {
        entradas: [210, 320, 340, 260, 280, 300, 320, 350, 370, 400, 420, 450],
        desembolsos: [213, 418, 305, 240, 250, 310, 330, 340, 360, 380, 390, 410],
        efectivoInicial: 50
      };
      setBackendData(data);
    };

    fetchBackendData();
  }, []);

  const handleFormSubmit = (formData) => {
    const integratedData = {
      ...backendData,
      saldoMinimo: formData.saldoMinimo
    };
    setDatos(integratedData);
  };

  return (
    <div className="container">
      <h2>Presupuesto de Caja</h2>
      <PresupuestoForm onSubmit={handleFormSubmit} />
      {datos && <TablaPresupuesto datos={datos} />}
    </div>
  );
};

export default Presupuesto;
