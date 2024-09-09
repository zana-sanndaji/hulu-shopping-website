import api from "../configs/api";

const sendPassword = async (username, password) => {
  try {
    const response = await api.post("auth/login", { username, password });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendPassword };
