import React, { useState } from 'react';
import '../styles/App.css';

const LightIntensitySlider = () => {
  const [intensity, setIntensity] = useState(50);

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Ajustar Intensidad de Luz</h3>
      <p>Intensidad actual: {intensity}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default LightIntensitySlider;
