import CardTotal from "./CardTotal.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  categoriesUrl,
  getItemsUrl,
  reportsUrl,
  usersUrl,
  userWithdrawalsUrl,
} from "../../../api/baseUrl.js";
import HackbidLoading from "../../../components/HackbidLoading.jsx";

const OverviewAuctionToday = () => {
  const { data, isLoading, isError } = useQuery(["dashboard"], async () => {
    const { data: userList } = await axios.get(usersUrl);
    const { data: categoryList } = await axios.get(categoriesUrl);
    const { data: reportedList } = await axios.get(reportsUrl);
    const { data: itemlist } = await axios.get(getItemsUrl);
    const { data: withdrawList } = await axios.get(userWithdrawalsUrl);

    const data = [
      {
        id: 1,
        name: "User",
        count: userList.length,
      },
      {
        id: 2,
        name: "Category",
        count: categoryList.length,
      },
      {
        id: 3,
        name: "Reported",
        count: reportedList.length,
      },
      {
        id: 4,
        name: "Item",
        count: itemlist.length,
      },
      {
        id: 5,
        name: "Withdraw",
        count: withdrawList.length,
      },
    ];
    return data;
  });

  if (isError) return <p>Error...</p>;
  return (
    <div className="w-full xl:max-w-6xl">
      {isLoading ? (
        <HackbidLoading />
      ) : (
        <div className="px-4 py-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((card) => (
              <CardTotal key={card.id} item={card.name} count={card.count} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewAuctionToday;
