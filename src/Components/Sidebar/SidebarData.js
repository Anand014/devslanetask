import React from "react";
import { Home, Anchor, LogOut, Key } from "react-feather";

export const SidebarData = [
  {
    name: "Users",
    id: 1,
    icon: Home,
    path: "/",
  },
  {
    name: "Profile",
    id: 2,
    icon: Anchor,
    path: "/",
  },
  {
    name: "Change Password",
    id: 3,
    icon: Key,
    path: "/",
  },
  {
    name: "Sign Out",
    id: 4,
    icon: LogOut,
    path: "/",
  },
];
