import React, { useState } from 'react';
import LightIntensitySlider from './LightIntensitySlider';
import LightSensorDisplay from './LightSensorDisplay';
import PowerButton from './PowerButton';
import '../styles/App.css';

const Layout = () => {
  const [isSystemOn, setIsSystemOn] = useState(false);

  const handlePowerToggle = () => {
    setIsSystemOn(prevState => !prevState);
  };

  const handleSystemOff = () => {
    setIsSystemOn(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Sistema de Iluminación Automático</h1>
      </header>
      <LightSensorDisplay />
      <LightIntensitySlider />
      <PowerButton isSystemOn={isSystemOn} handlePowerToggle={handlePowerToggle} />
      <div className="light-sensor light-sensor-display">
        <h3>Intensidad de luz normal</h3>
        <button 
          className="power-button"
          onClick={handleSystemOff}
          disabled={!isSystemOn}>
          APAGAR SISTEMA
        </button>
      </div>
    </div>
  );
};

export default Layout;
