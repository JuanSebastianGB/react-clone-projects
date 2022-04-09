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
        image="https://yt3.ggpht.com/ytc/AKedOLQ-PgidQ0cYjiqG8YpXg_9DVvFrZnVduSC9vcx8pg=s88-c-k-c0x00ffffff-no-rj"
        channel='TechWorld with Nana'
        verified
        subs='486K'
        noOfVideos={382}
        description="Helping people to learn DevOps topics easily 💙

        I create new videos every second week, topics include mainly DevOps tutorials. Subscribe and activate bell notification so you don't miss new videos :)

        I'm a Docker Captain, AWS Container Hero & CNCF Ambassador 🤓  💪

      ►  https://www.techworld-with-nana.com/

      Tutorials so far
      - Docker
      - Kubernetes
      - Jenkins
      - Python
      - Ansible
      - Prometheus Monitoring
      - Terraform
      - YAML
      - & more!

      Have fun watching my videos! 🙂"
      />
      <hr />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
      <VideoRow
        views='1.5k'
        description='How I learn new technologies as a DevOps Engineer (without being overwhelmed)'
        timestamp='1 min ago'
        channel='TechWorld with Nana'
        title='How I learn new technologies'
        image='https://img.youtube.com/vi/Cthla7KqU04/0.jpg'
        subs={`486k`}
      />
    </div>
  );
};
