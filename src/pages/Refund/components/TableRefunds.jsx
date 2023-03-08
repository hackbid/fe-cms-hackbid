import confirmationNotification from "../../../util/confirmationNotification.js";
import {
  userAprovedWithdrawalsUrl,
  userRejectWithdrawalsUrl,
  userWithdrawalsUrl,
} from "../../../api/baseUrl.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { triggerNotification } from "../../../util/successNotification.js";
import { converToRupiah } from "../../../util/converToRupiah.js";
import HackbidLoading from "../../../components/HackbidLoading.jsx";
import {
  approveWithdrawal,
  getWithdrawals,
  rejectWithdrawal,
} from "../../../api/withdraw.js";

const TableRefunds = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(
    ["withdrawals"],
    getWithdrawals
  );

  const mutation = useMutation(
    async (id) => {
      await approveWithdrawal(id);
    },
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries(["withdrawals"])
          .then((r) => triggerNotification("Refund Approved", "info"));
      },
    }
  );

  const rejectMutation = useMutation(
    async (id) => {
      await rejectWithdrawal(id);
    },
    {
      onSuccess: () => {
        queryClient
          .invalidateQueries(["withdrawals"])
          .then((r) => triggerNotification("Refund Rejected", "info"));
      },
    }
  );

  const handleApproveRefund = async (id) => {
    const refundAction = await confirmationNotification(
      "Are you sure you want to approve this refund?",
      "Approve Refund"
    );
    if (refundAction.isConfirmed) {
      mutation.mutate(id);
    } else if (refundAction.isDismissed) {
      triggerNotification(
        "Approval is dismissed, please come back soon",
        "info"
      );
    }
  };

  const handleRejectRefund = async (id) => {
    const refundAction = await confirmationNotification(
      "Are you sure you want to reject this refund?",
      "Reject Refund"
    );
    if (refundAction.isConfirmed) {
      rejectMutation.mutate(id);
    } else if (refundAction.isDismissed) {
      triggerNotification(
        "Rejection is dismissed, please come back soon",
        "info"
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <HackbidLoading />
      ) : (
        <div className="mt-4 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Initial Balance
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Withdrawal Amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.user}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {converToRupiah(person.initialBalance)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {converToRupiah(person.transaction)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                            {person.status}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 ">
                          <button
                            type="button"
                            className="rounded-md bg-hackbid-secondary py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mr-2"
                            onClick={() => handleApproveRefund(person.id)}
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            className="rounded-md bg-red-700 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-200"
                            onClick={() => handleRejectRefund(person.id)}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TableRefunds;
