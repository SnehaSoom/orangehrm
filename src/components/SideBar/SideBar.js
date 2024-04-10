import React from "react";
// import SearchIcon from "./SearchIcon.svg";
// import AdminIcon from "./AdminIcon.svg";
// import PimIcon from "./PimIcon.svg";
import "./SideBar.css";

const menuItems = [
//   { text: "Search", icon: <SearchIcon /> },
//   { text: "Admin", icon: <AdminIcon /> },
//   { text: "PIM", icon: <PimIcon /> },
  //   { text: "Leave", icon: <LeaveIcon /> },
  //   { text: "Time", icon: <TimeIcon /> },
  //   { text: "My Info", icon: <MyInfoIcon /> },
  //   { text: "Dashboard", icon: <DashboardIcon /> },
  //   { text: "Directory", icon: <DirectoryIcon /> },
  //   { text: "Maintenance", icon: <MaintenanceIcon /> },
  //   { text: "Buzz", icon: <BuzzIcon /> },
];

const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarLogo">
          LOGO
          {/* <img src="logo.png" alt="Logo" /> */}
        </div>
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li className="menu-item" key={index}>
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
