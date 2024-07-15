import React from 'react';
import { Box, Typography } from '@mui/material';

const LightSensorDisplay = ({ lightLevel }) => {
    return (
        <Box>
            <Typography variant="h4">Nivel de Luz: {lightLevel} lux</Typography>
        </Box>
    );
};

export default LightSensorDisplay;
