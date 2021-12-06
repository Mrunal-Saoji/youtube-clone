import React from "react";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from './VideoRow'


function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
      image= "https://bit.ly/3lxDdvV"
      channel="Mrunal Saoji"
      verified
      subs="500K"
      noOfVideos={102}
      description="You will find great content on Technologies"
      />
      <hr />

      <VideoRow 
       title="top ten graphics cards"
       subs="223"
       views="2.3M views"
       timestamp="3 days ago"
       channelImage="https://yt3.ggpht.com/yti/APfAmoHPSoaMlfSkMebt3pmzQ-td-twMHtlZHP2dP39R=s88-c-k-c0x00ffffff-no-rj-mo"
       channel="Mrunal Saoji"
       image="https://bit.ly/3IfW4FI"
       description="Know wihich are the top 10 graphic card are avaiable in India."
      />
      <VideoRow 
       title="top ten graphics cards"
       subs="223"
       views="2.3M views"
       timestamp="3 days ago"
       channelImage="https://yt3.ggpht.com/yti/APfAmoHPSoaMlfSkMebt3pmzQ-td-twMHtlZHP2dP39R=s88-c-k-c0x00ffffff-no-rj-mo"
       channel="Mrunal Saoji"
       image="https://bit.ly/3IfW4FI"
       description="Know wihich are the top 10 graphic card are avaiable in India."
      />
      <VideoRow 
       title="top ten graphics cards"
       subs="223"
       views="2.3M views"
       timestamp="3 days ago"
       channelImage="https://yt3.ggpht.com/yti/APfAmoHPSoaMlfSkMebt3pmzQ-td-twMHtlZHP2dP39R=s88-c-k-c0x00ffffff-no-rj-mo"
       channel="Mrunal Saoji"
       image="https://bit.ly/3IfW4FI"
       description="Know wihich are the top 10 graphic card are avaiable in India."
      />
      <VideoRow 
       title="top ten graphics cards"
       subs="223"
       views="2.3M views"
       timestamp="3 days ago"
       channelImage="https://yt3.ggpht.com/yti/APfAmoHPSoaMlfSkMebt3pmzQ-td-twMHtlZHP2dP39R=s88-c-k-c0x00ffffff-no-rj-mo"
       channel="Mrunal Saoji"
       image="https://bit.ly/3IfW4FI"
       description="Know wihich are the top 10 graphic card are avaiable in India."
      />

    </div>
  );
}

export default SearchPage;
