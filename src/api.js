import Axios from "axios";

export const HitApi = async (method, headers, body, url, params) => {
  try {
    const options = {
      method: method ? method : "GET",
      headers: headers ? headers : {},
      data: body ? JSON.parse(body) : {},
      url,
      params: params ? params : {},
    };
    const response = await Axios(options);
    return response;
  } catch (error) {
    return error.message;
  }
};
