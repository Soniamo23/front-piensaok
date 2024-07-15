import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

const LightIntensitySlider = ({ intensity, setIntensity }) => {
    const handleSliderChange = (event, newValue) => {
        setIntensity(newValue);
    };

    return (
        <Box>
            <Typography variant="h6">Ajustar Intensidad de Luz</Typography>
            <Slider
                value={intensity}
                onChange={handleSliderChange}
                aria-labelledby="intensity-slider"
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};

export default LightIntensitySlider;
