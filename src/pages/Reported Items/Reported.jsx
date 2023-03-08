import PageHeader from "../../components/PageHeader.jsx";
import confirmationNotification from "../../util/confirmationNotification.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import HackbidLoading from "../../components/HackbidLoading.jsx";
import ReportedTable from "./components/ReportedTable.jsx";
import { triggerNotification } from "../../util/successNotification.js";
import { deleteReport, getReport } from "../../api/report.js";

export default function Reported() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(["report"], getReport);
  const title = "Reported Items";
  const description =
    "This is the reported items page, please read carefully before proceeding to the next step.";

  const useDeleteMutation = useMutation(
    async (id) => {
      await deleteReport(id);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["report"]);
        await queryClient.invalidateQueries(["items"]);
        triggerNotification("Post Deleted", "info");
      },
    }
  );
  const handleDeletePost = async (id) => {
    const deletePostAction = await confirmationNotification(
      "Are you sure you want to delete this post?",
      "Delete Post"
    );
    if (deletePostAction.isConfirmed) {
      useDeleteMutation.mutate(id);
    } else if (deletePostAction.isDismissed) {
      triggerNotification("Delete is dismissed, please come back soon", "info");
    }
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader title={title} description={description} />
      {isLoading ? (
        <HackbidLoading />
      ) : (
        <ReportedTable data={data} handleDeletePost={handleDeletePost} />
      )}
    </div>
  );
}
