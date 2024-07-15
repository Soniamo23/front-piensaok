import axios from 'axios';

const API_URL = 'http://your-api-url.com'; // Reemplaza esto con la URL de tu API

export const getLightLevel = async () => {
    try {
        const response = await axios.get(`${API_URL}/light-level`);
        return response.data;
    } catch (error) {
        console.error("Error fetching light level:", error);
        throw error;
    }
};

export const setLightIntensity = async (intensity) => {
    try {
        const response = await axios.post(`${API_URL}/set-intensity`, { intensity });
        return response.data;
    } catch (error) {
        console.error("Error setting light intensity:", error);
        throw error;
    }
};

export const toggleSystem = async (status) => {
    try {
        const response = await axios.post(`${API_URL}/toggle-system`, { status });
        return response.data;
    } catch (error) {
        console.error("Error toggling system:", error);
        throw error;
    }
};
