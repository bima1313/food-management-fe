import { Home } from "lucide-react";
import { MdRestaurant, MdManageAccounts, MdLogout } from "react-icons/md";

export const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Restaurants",
    url: "/dashboard/restaurants",
    icon: MdRestaurant,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: MdManageAccounts,
  },
  {
    title: "Logout",
    url: "/",
    icon: MdLogout,
  },
];
