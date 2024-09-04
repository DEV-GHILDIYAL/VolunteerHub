import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AdminPage.css";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "manageUsers":
        return <ManageUsers />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <div className="sidebar">
          <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
          <button onClick={() => setActiveTab("manageUsers")}>Manage Users</button>
          <button onClick={() => setActiveTab("settings")}>Settings</button>
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard. Here you can view statistics and more.</p>
      {/* Add dashboard content here */}
    </div>
  );
};

const ManageUsers = () => {
  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      <p>Here you can manage all registered users.</p>
      {/* Add user management content here */}
    </div>
  );
};

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <p>Configure your application settings here.</p>
      {/* Add settings content here */}
    </div>
  );
};

export default AdminPage;
