import './App.css';
import React, { Fragment } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { RecommendedVideos } from './RecommendedVideos';

function App () {
  return (
    <Fragment className='App'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
        {/* Sidebar */}
        {/* RecommendedVideo */}
      </div>
    </Fragment>
  );
}

export default App;
