import api from "../configs/api";

const getCategory = () => api.get("products/categories");

export { getCategory };
