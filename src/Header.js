import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt='logo'
        />
      </div>

      <div className="header__input">

      <input type="text" placeholder="Search" />
      <SearchIcon className="header__inputButton"/>
      </div>

      <div className="header__right">

      <VideoCallSharpIcon className="header__icon"/>
      <AppsSharpIcon className="header__icon" />
      <NotificationsSharpIcon className="header__icon"/>
      <Avatar src="https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/search-thumbnail/rogue_searchthumb_mobile_163986.jpg" />
      </div>
          
    </div>
  );
}

export default Header;
