import React from "react";
import { Search, Person, Notifications, Chat } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="Logo">AllSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search style={{ fontSize: "20px", marginLeft: "5px" }} />
          <input
            type="text"
            placeholder="Search for friends"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Home</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="profilePicture" />
      </div>
      
    </div>
  );
}
