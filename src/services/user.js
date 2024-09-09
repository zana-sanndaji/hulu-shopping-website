import api from "../configs/api";

const getProfile = () => api.get(`users/1`);

export { getProfile };
