import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { getLightLevel, setLightIntensity, toggleSystem } from './services/api';
import './styles/global.css';

function App() {
    const [lightLevel, setLightLevel] = useState(0);
    const [intensity, setIntensity] = useState(50);
    const [systemOn, setSystemOn] = useState(false);

    useEffect(() => {
        const fetchLightLevel = async () => {
            try {
                const data = await getLightLevel();
                setLightLevel(data.level);
            } catch (error) {
                console.error("Failed to fetch light level:", error);
            }
        };

        fetchLightLevel();
    }, []);

    const handleSetIntensity = async (newIntensity) => {
        try {
            await setLightIntensity(newIntensity);
            setIntensity(newIntensity);
        } catch (error) {
            console.error("Failed to set light intensity:", error);
        }
    };

    const handleToggleSystem = async () => {
        try {
            await toggleSystem(!systemOn);
            setSystemOn(!systemOn);
        } catch (error) {
            console.error("Failed to toggle system:", error);
        }
    };

    return (
        <div className="App">
            <Layout
                lightLevel={lightLevel}
                intensity={intensity}
                setIntensity={handleSetIntensity}
                systemOn={systemOn}
                toggleSystem={handleToggleSystem}
            />
        </div>
    );
}

export default App;
