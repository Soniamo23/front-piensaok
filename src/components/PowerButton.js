import React from 'react';
import { Box, Button } from '@mui/material';

const PowerButton = ({ systemOn, toggleSystem }) => {
    return (
        <Box>
            <Button variant="contained" color={systemOn ? "primary" : "secondary"} onClick={toggleSystem}>
                {systemOn ? "Apagar Sistema" : "Encender Sistema"}
            </Button>
        </Box>
    );
};

export default PowerButton;
