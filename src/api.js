import Axios from "axios";

export const hitApi = async () => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return response.data;
};
