import axios from "axios";
import {
  userAprovedWithdrawalsUrl,
  userRejectWithdrawalsUrl,
  userWithdrawalsUrl,
} from "./baseUrl.js";

const getWithdrawals = async () => {
  const { data } = await axios.get(userWithdrawalsUrl);
  return data;
};

const approveWithdrawal = async (id) => {
  await axios.patch(`${userAprovedWithdrawalsUrl}/${id}`);
};

const rejectWithdrawal = async (id) => {
  await axios.patch(`${userRejectWithdrawalsUrl}/${id}`);
};

export { getWithdrawals, approveWithdrawal, rejectWithdrawal };
