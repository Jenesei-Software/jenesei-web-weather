import axios from "axios";

export const ApiOne = "";
export const ApiTwo = "";
export const ApiThree = "";
export const axiosInstanceOne = axios.create({
  baseURL: ApiOne,
});
export const axiosInstanceTwo = axios.create({
  baseURL: ApiTwo,
});
export const axiosInstanceThree = axios.create({
  baseURL: ApiThree,
});
