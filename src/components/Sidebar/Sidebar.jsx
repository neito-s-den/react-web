import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import menuItems from "../../assets/menu-items.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad, faBars } from "@fortawesome/free-solid-svg-icons";

const icons = {
  faHome,
  faGamepad,
};

function Sidebar({ setCurrentView, isOpen, switchMenuState }) {
  const handleMenuClick = () => {
    switchMenuState();
  };

  return (
    <aside className={`menu ${isOpen ? 'unfolded' : 'folded'}`}>
      <div
        className={`menuElement`}
        onClick={() => {
          handleMenuClick();
        }}
      >
        <FontAwesomeIcon className="icon" icon={faBars} />
        {isOpen && <div className="icon-name">Menu</div>}
      </div>
      {menuItems.map((item, index) => (
        <div
          className="menuElement"
          key={index}
          onClick={() => setCurrentView(item.view)}
        >
          <FontAwesomeIcon className="icon" icon={icons[item.icon]} />
          {isOpen && <div className="icon-name">{item.name}</div>}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
