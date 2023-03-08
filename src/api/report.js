import axios from "axios";
import { reportsUrl } from "./baseUrl.js";

const getReport = async () => {
  const { data } = await axios.get(reportsUrl);
  return data;
};

const deleteReport = async (id) => {
  await axios.delete(`${reportsUrl}/${id}`);
};

export { getReport, deleteReport };
