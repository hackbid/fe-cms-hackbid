import { classNames } from "../data/data.js";
import { useState } from "react";
import {
  Bars4Icon,
  UserIcon,
  ArchiveBoxIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid/index.js";
import { ShoppingCartIcon } from "@heroicons/react/20/solid/index.js";
import { useNavigate } from "react-router-dom";

const SideBarNavigation = () => {
  const navigate = useNavigate();
  const [navigation, setNavigation] = useState([
    { name: "Dashboard", href: "#", icon: Bars4Icon, current: false, id: 1 },
    { name: "User", href: "#", icon: UserIcon, current: false, id: 2 },
    { name: "Item", href: "#", icon: ArchiveBoxIcon, current: false, id: 3 },
    {
      name: "Withdraw",
      href: "#",
      icon: ShoppingCartIcon,
      current: false,
      id: 4,
    },
    {
      name: "Reported",
      href: "#",
      icon: ExclamationTriangleIcon,
      current: false,
      id: 5,
    },
  ]);

  const handleClick = (item) => {
    const updatedNavigation = navigation.map((navItem) =>
      navItem.id === item.id
        ? { ...navItem, current: !navItem.current }
        : { ...navItem, current: false }
    );
    setNavigation(updatedNavigation);
    if (item.name !== "Dashboard") {
      navigate(item.name);
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="mt-6 px-3">
      <div className="space-y-1">
        {navigation.map((item) => (
          <a
            key={item.id}
            onClick={() => handleClick(item)}
            className={classNames(
              item.current
                ? "bg-gray-200 text-gray-900"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
              "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "mr-3 h-6 w-6 flex-shrink-0"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default SideBarNavigation;
