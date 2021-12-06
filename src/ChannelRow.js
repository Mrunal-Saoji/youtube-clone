import { Avatar } from "@material-ui/core";
import React from "react";
import { CheckCircleOutlined } from "@material-ui/icons";
import './ChannelRow.css';

function ChannelRow({
  channel,
  image,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlined />}
        </h4>
        <p>
            {subs} subscribers • {noOfVideos} videos 
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
