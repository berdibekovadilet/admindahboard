import React from "react";
import {
  Dashboard,
  PersonOutlineOutlined,
  Store,
  CreditCard,
  LocalShipping,
  InsertChart,
  NotificationsNone,
  SettingsSystemDaydream,
  PsychologyOutlined,
  SettingsApplications,
  AccountCircleOutlined,
  ExitToApp,
} from "@mui/icons-material";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Store className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCard className="icon" />
            <span>Oreders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplications className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
