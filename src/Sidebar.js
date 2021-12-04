import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow  Icon={HomeSharpIcon} title="Home"/>
            <SidebarRow Icon={WhatshotSharpIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription"/>
            <hr />

            <SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow  Icon={HistoryIcon} title="History"/>
            <SidebarRow  Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow  Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow  Icon={ThumbUpIcon} title="Liked Videos"/>
            <SidebarRow  Icon={ExpandMoreSharpIcon} title="Show more"/>
            <hr />
        </div>
    )
}

export default Sidebar
