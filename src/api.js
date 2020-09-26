import Axios from "axios";

export const hitApi = async (url) => {
  try {
    const response = await Axios.get(url);
    return response;
  } catch (error) {
    return error.message;
  }
};
