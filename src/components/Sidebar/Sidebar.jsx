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
  if (!isOpen) {
    return (
      <aside className={`menu folded`}>
        <div
          className="menuElement"
          onClick={() => {
            handleMenuClick();
          }}
        >
          <FontAwesomeIcon className="icon" icon={faBars} />
        </div>
        {menuItems.map((item, index) => (
          <div
            className="menuElement"
            key={index}
            onClick={() => setCurrentView(item.view)}
          >
            <FontAwesomeIcon className="icon" icon={icons[item.icon]} />
          </div>
        ))}
      </aside>
    );
  } else {
    return (
      <aside className={`menu unfolded`}>
        <div
          className="menuElement"
          onClick={() => {
            handleMenuClick();
          }}
        >
          <FontAwesomeIcon className="icon" icon={faBars} />
        </div>
        {menuItems.map((item, index) => (
          <div
            className="menuElement"
            key={index}
            onClick={() => setCurrentView(item.view)}
          >
            <FontAwesomeIcon className="icon" icon={icons[item.icon]} />
            <div className="icon-name">{item.name}</div>
          </div>
        ))}
      </aside>
    );
  }
}

export default Sidebar;
