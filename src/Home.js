import React from "react";
import Sidebar from "./Sidebar";
import RecommandedVideos from "./RecommandedVideos";

function Home() {
  return (
    <div className="app">
      <div className="app_page">
        <Sidebar />
        <RecommandedVideos />
      </div>
    </div>
  );
}

export default Home;
