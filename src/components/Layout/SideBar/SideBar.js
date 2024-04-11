import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, AdminIcon, PimIcon,LeftIcon } from "./../../../App/Assests";
import "./SideBar.css";

const menuItems = [
  { text: "Search", icon: <Search color="gray" size={25} />, link: "/search" },
  { text: "Admin", icon: <AdminIcon color="gray" size={25} />, link: "/admin" },
  { text: "PIM", icon: <PimIcon color="gray" size={25} />, link: "/pim" },
  { text: "Leave", icon: <icon /> },
  { text: "Time", icon: <icon /> },
  { text: "My Info", icon: <icon /> },
  { text: "Dashboard", icon: <icon /> },
  { text: "Directory", icon: <icon /> },
  { text: "Maintenance", icon: <icon /> },
  { text: "Buzz", icon: <icon /> },
];

const SideBar = ({
  activeIndex,
  onClick,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarLogo">
          <span>OrangeHRM</span>
        </div>
        <div className="sidebarMenu">
          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li className={activeIndex === index ? "menu-item-active" : "menu-item"} key={index} onClick={() => {
                onClick(index);
                navigate(item.link)
              }}>
                <span className={`icon`}>
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
