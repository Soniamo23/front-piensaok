import React from 'react';
import '../styles/App.css';

const PowerButton = ({ isSystemOn, handlePowerToggle }) => {
  return (
    <div className="power-button-container">
      <button 
        onClick={handlePowerToggle}
        className="power-button">
        {isSystemOn ? 'SISTEMA ENCENDIDO' : 'ENCENDER SISTEMA'}
      </button>
    </div>
  );
};

export default PowerButton;
