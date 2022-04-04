import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_of_YouTube_%282005-2011%29.svg' alt=''
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          onChange={event => setInputSearch(event.target.value)}
          value={inputSearch}
          placeholder='Search'
          type='text'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar src='https://avatars.githubusercontent.com/u/85469830?s=96&v=4' alt='' />
      </div>
    </div>
  );
};
