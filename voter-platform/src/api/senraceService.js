import axios from 'axios';

const baseURL = "http://localhost:3001/api/senraces";

export const fetchRaces = () => {
    return axios.get(baseURL)
        .then((response) => response.data.data)
        .catch((error) => {
            console.error("An error occurred while fetching data:", error);
            throw error;
        });
};
