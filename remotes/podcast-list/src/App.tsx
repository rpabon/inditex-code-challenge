import React from 'react';
import PodcastList from './PodcastList';

const App: React.FC = () => {
  return (
    <PodcastList
      podcastList={[]}
      onPodcastClick={() => {
        console.log('');
      }}
    />
  );
};

export default App;
