import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Header from './Header';
import LightSensorDisplay from './LightSensorDisplay';
import LightIntensitySlider from './LightIntensitySlider';
import PowerButton from './PowerButton';
import '../styles/App.css';

const Layout = ({ lightLevel, intensity, setIntensity, systemOn, toggleSystem }) => {
    return (
        <Container className="container">
            <Header />
            <Box my={4}>
                <div className="light-sensor">
                    <div className="light-sensor-display">
                        <LightSensorDisplay lightLevel={lightLevel} />
                    </div>
                </div>
                <div className="slider">
                    <div className="intensity-slider">
                        <LightIntensitySlider intensity={intensity} setIntensity={setIntensity} />
                    </div>
                </div>
                <div className="power-button-container">
                    <PowerButton systemOn={systemOn} toggleSystem={toggleSystem} />
                </div>
            </Box>
        </Container>
    );
};

export default Layout;
