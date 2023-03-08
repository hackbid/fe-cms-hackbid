import axios from "axios";
import { usersUrl } from "./baseUrl.js";

export const getUser = async () => {
  return axios.get(usersUrl).then((res) => res.data);
};
