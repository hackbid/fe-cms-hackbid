import { useQuery } from "@tanstack/react-query";
import HackbidLoading from "../../components/HackbidLoading.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import ItemList from "./components/itemList.jsx";
import { getItems } from "../../api/item.js";

export default function ItemPage() {
  const { data, isLoading, error } = useQuery(["items"], getItems);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <PageHeader title={"Item"} description={"This is the item page"} />
      {isLoading ? <HackbidLoading /> : <ItemList data={data} />}
    </div>
  );
}
