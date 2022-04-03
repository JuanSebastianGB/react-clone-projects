import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

export const Header = () => {
  return (
    <div className='header'>
      <MenuIcon />
      <img
        className='header__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_of_YouTube_%282005-2011%29.svg' alt=''
      />
      <input type='text' />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar src='https://avatars.githubusercontent.com/u/85469830?s=96&v=4' alt='' />
    </div>
  );
};
