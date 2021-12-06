import React from "react";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import './SearchPage.css'
function Search() {
  return (
    <div className="app_page">
      <Sidebar />
      <SearchPage />
      
    </div>
  );
}

export default Search;
