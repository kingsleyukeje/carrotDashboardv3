import React from "react";
import "./Header.css";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img
          src="/carrot-logo.png"
          alt="CarrotCredit Logo"
          className="w-8 h-8"
        />
        <div className="logo-text">
          <span className="logotitle">CarrotCredit</span>
          <span className="subtitle">Your Portfolio</span>
        </div>
      </div>

      <div className="profile-section">
        <Bell className="w-5 h-5 text-gray-600" />
        <div className="profile-info">
          <div className="initials">BA</div>
          <span className="profile-name">Boluwatife Aiki-Raji</span>
          <span className="arrow">▾</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
