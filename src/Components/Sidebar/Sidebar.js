import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { Link } from "react-router-dom";

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
            <Link to={data.path}>{data.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
