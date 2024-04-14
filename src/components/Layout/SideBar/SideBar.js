import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, AdminIcon, PimIcon, LeftIcon } from "./../../../App/Assests";
import { useLocation } from 'react-router-dom';
import "./SideBar.css";

const menuItems = [
  { text: "Search", icon: <Search color="inherit" size={25} />, link: "/search" },
  { text: "Admin", icon: <AdminIcon color="inherit" size={25} />, link: "/admin" },
  { text: "PIM", icon: <PimIcon color="inherit" size={25} />, link: "/pim" },
  { text: "Leave", icon: <AdminIcon color="inherit" size={25} />, link: "/leave" }, // Example link for "Leave"
  { text: "Time", icon: <AdminIcon color="inherit" size={25} />, link: "/time" }, // Example link for "Time"
  { text: "My Info", icon: <AdminIcon color="inherit" size={25} />, link: "/my-info" }, // Example link for "My Info"
  { text: "Dashboard", icon: <AdminIcon color="inherit" size={25} />, link: "/dashboard" }, // Example link for "Dashboard"
  { text: "Directory", icon: <AdminIcon color="inherit" size={25} />, link: "/directory" }, // Example link for "Directory"
  { text: "Maintenance", icon: <AdminIcon color="inherit" size={25} />, link: "/maintenance" }, // Example link for "Maintenance"
  { text: "Buzz", icon: <AdminIcon color="inherit" size={25} />, link: "/buzz" }, // Example link for "Buzz"
];

const SideBar = ({
  onClick,
  onClose,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeUrl = location.pathname;
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarLogo">
          <span>OrangeHRM</span>
        </div>
        <div className="sidebarMenu">
          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li className={activeUrl === item.link ? "menu-item-active" : "menu-item"} key={index} onClick={() => {
                onClick(index);
                navigate(item.link)
              }}>
                <span className={activeUrl === item.link ? 'selected-icon' : 'icon'}>
                  {item.icon}
                </span>
                <span className="text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="close-button" onClick={() => onClose()}>
          <LeftIcon/>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
