import axios from "axios";

export const getIp = async () => {
  return axios
    .get(`https://api.ipify.org?format=json`)
    .then((res) => {
      return res.data.ip;
    })
    .catch((error) => {
      throw error;
    });
};
