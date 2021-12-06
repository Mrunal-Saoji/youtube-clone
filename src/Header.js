import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {

  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt='logo'
        />
        </Link>
      </div>

      <div className="header__input">

      <input type="text" value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search" />
      <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton"/>
      </Link>
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
