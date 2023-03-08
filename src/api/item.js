import axios from "axios";
import { getItemsUrl } from "./baseUrl.js";

export const getItems = async () => {
  const { data } = await axios.get(getItemsUrl);
  return data;
};
