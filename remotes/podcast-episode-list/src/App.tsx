import React from 'react';
import PodcastEpisodeList from './PodcastEpisodeList';

const App: React.FC = () => {
  return (
    <PodcastEpisodeList
      episodes={[]}
      navigateToEpisode={()=> null}
    />
  );
};

export default App;
