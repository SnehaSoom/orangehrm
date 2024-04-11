import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./Assest/SearchIcon.svg";
import AdminIcon from "./Assest/AdminIcon.svg";
import PimIcon from "./Assest/PimIcon.svg";
import "./SideBar.css";

const menuItems = [
  { text: "Search", icon: <SearchIcon />, link: "/search" },
  { text: "Admin", icon: <AdminIcon />, link: "/admin" },
  { text: "PIM", icon: <PimIcon />, link: "/pim" },
    // { text: "Leave", icon: <LeaveIcon /> },
    // { text: "Time", icon: <TimeIcon /> },
    // { text: "My Info", icon: <MyInfoIcon /> },
    // { text: "Dashboard", icon: <DashboardIcon /> },
    // { text: "Directory", icon: <DirectoryIcon /> },
    // { text: "Maintenance", icon: <MaintenanceIcon /> },
    // { text: "Buzz", icon: <BuzzIcon /> },
];

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarLogo">
          LOGO
          {/* <img src="logo.png" alt="Logo" /> */}
        </div>
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li className="menu-item" key={index} onClick={()=> navigate(item.link)}>
              <span className={`icon ${item.icon}`} />
              <span className="text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
