import CardTotal from "./components/CardTotal.jsx";
import OverviewAuctionToday from "./components/OverviewAuctionToday.jsx";
import HeaderSummary from "./components/HeaderSummary.jsx";
import Banner from "./components/Banner.jsx";

const SummaryDashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <HeaderSummary />
      {/*<Banner />*/}
      <OverviewAuctionToday />
    </div>
  );
};

export default SummaryDashboard;
