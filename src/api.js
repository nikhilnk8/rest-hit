import Axios from "axios";

export const HitApi = async (method, headers, body, url) => {
  try {
    const options = {
      method: method ? method : "GET",
      headers: headers ? headers : {},
      data: body ? JSON.parse(body) : {},
      url,
    };
    const response = await Axios(options);
    return response;
  } catch (error) {
    return error.message;
  }
};
