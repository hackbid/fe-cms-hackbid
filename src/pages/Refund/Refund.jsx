import PageHeader from "../../components/PageHeader.jsx";
import TableRefunds from "./components/TableRefunds.jsx";

export default function Withdraw() {
  const title = "Withdraw";
  const description =
    "this is the withdraw page, please be careful and read it carefully before approving the refund";
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader title={title} description={description} />
      <TableRefunds />
    </div>
  );
}
