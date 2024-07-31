import React from 'react';
import '../styles/App.css';
const LightSensorDisplay = () => {
  // Aquí deberías manejar el estado y lógica para el nivel de luz.
  const lightLevel = 0; // Reemplaza esto con el valor real

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Nivel de Luz: {lightLevel} lux</h2>
    </div>
  );
};

export default LightSensorDisplay;
