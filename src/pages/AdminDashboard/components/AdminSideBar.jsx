import { classNames, teams, navigation } from "../../../data/data.js";

import CompanyLogo from "../../../components/CompanyLogo.jsx";
import DropDownUser from "../../../components/DropDownUser.jsx";
import AdminSearch from "../../../components/AdminSearch.jsx";
import SideBarNavigation from "../../../components/SideBarNavigation.jsx";

const AdminSideBar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-[#f3f3f3] lg:pt-5 lg:pb-4">
      <CompanyLogo />
      <div className="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
        <DropDownUser />
        <SideBarNavigation />
      </div>
    </div>
  );
};

export default AdminSideBar;
