import React from "react";
import "./MainDashboard.css";

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      {/* Top Summary Section */}
      <div className="summary-section">
        <div className="summary-header">
          <h1 className="title">Welcome, Bolu👋</h1>

          <select className="currency-dropdown">
            <option>Dollar Balance</option>
            {/* Add more options if needed */}
          </select>
          <h1 className="balance">
            $2,000.00<span className="fraction">,00</span>
          </h1>
          <p className="last-transaction">
            Last transaction: You have added{" "}
            <span className="highlight">+205.99</span> from Bamboo • 2 mins ago
            <span className="green-change">+3.22%</span>
          </p>
          <div className="summary-buttons">
            <button className="btn apply">+ Apply for Credit</button>
            <button className="btn withdraw">- Withdraw</button>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="transactions-section">
        <div className="transactions-header">
          <h2>Transactions</h2>
          <div className="search-filter">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="filter-btn">🔍 Filters</button>
          </div>
        </div>
        <div className="tabs">
          <span className="tab active">Credits</span>
          <span className="tab">Withdrawals</span>
        </div>
        {/* Transaction Table Placeholder */}
        <div className="transaction-groups">
          {/* Repeat for each group (Today, This Week, etc.) */}
          <div className="transaction-group">
            <h4>Today</h4>
            {/* Render credit cards/components here */}
            <div className="transaction-card">...credit info card...</div>
            <div className="transaction-card">...credit info card...</div>
          </div>

          <div className="transaction-group">
            <h4>This Week</h4>
            <div className="transaction-card">...credit info card...</div>
          </div>

          <div className="transaction-group">
            <h4>Recents</h4>
            <div className="transaction-card">...credit info card...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
