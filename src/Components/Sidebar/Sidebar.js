import React from "react";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarContent">
        {SidebarData.map((data) => {
          return <></>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
