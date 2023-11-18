import axios from 'axios';

const baseURL = "http://localhost:3001/api/members";

export const fetchMembers = () => {
    return axios.get(baseURL)
        .then((response) => response.data.data)
        .catch((error) => {
            console.error("An error occurred while fetching data:", error);
            throw error;
        });
};
