import React from 'react';
import './VideoRow.css'

export const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image
}) => {
  return (
    <div className='videoRow'>
      <img src={image} alt="" />
      <div className="videRow__text">
        <h3>{title}</h3>
        <p>
          {channel} . {subs} subscribers {views} . {timestamp}
        </p>
      </div>
    </div>
  );
};
