import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  RefreshCw,
  Upload,
  ArrowUpRight,
  TrendingDown,
  HelpCircle,
  Phone,
  Bell,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* MAIN MENU */}
      <div className="sidebar-section">
        <h4 className="sidebar-heading">MAIN MENU</h4>
        <ul>
          <li>
            <NavLink
              to="/MainDashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LayoutDashboard className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/repayments"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CreditCard className="icon" />
              <span>Repayments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <RefreshCw className="icon" />
              <span>Transactions</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* QUICK ACTIONS */}
      <div className="sidebar-section">
        <h4 className="sidebar-heading">QUICK ACTIONS</h4>
        <ul>
          <li>
            <NavLink
              to="/update-card"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <CreditCard className="icon" />
              <span>Update Card</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/withdraw-credit"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Upload className="icon" />
              <span>Withdraw Credit</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/repay-credit"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TrendingDown className="icon" />
              <span>Repay Credit</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div className="sidebar-section">
        <h4 className="sidebar-heading">SUPPORT</h4>
        <ul>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <HelpCircle className="icon" />
              <span>Help Centre</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Phone className="icon" />
              <span>Contact Support</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Bell className="icon" />
              <span>Notification Centre</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
