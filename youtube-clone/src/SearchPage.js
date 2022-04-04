import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import { ChannelRow } from './ChannelRow';
import { VideoRow } from './VideoRow';

export const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://yt3.ggpht.com/ytc/AKedOLQGsEL4EGO6wbp-NQYAMmoD1utrgAs6M9dTAVdI=s88-c-k-c0x00ffffff-no-rj'
        channel='Cyberspatial'
        verified
        subs='156K'
        noOfVideos={382}
        description='THis is an amazing information'
      />
      <hr />
      <VideoRow />
    </div>
  );
};
