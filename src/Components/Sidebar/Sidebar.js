import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebarData, setSidebarData] = useState(SidebarData);

  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      {sidebarData.map((data) => {
        return (
          <div className="sidebarContent" key={data.id}>
            <div className="icon">
              <data.icon size="1rem" />
            </div>
            <a href={data.path}>{data.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
