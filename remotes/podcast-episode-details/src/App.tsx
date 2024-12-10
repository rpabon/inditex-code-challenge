import React from 'react';
import podcastDetails from './mocks/podcast-details.mock';
import PodcastEpisodeDetails from './PodcastEpisodeDetails';

const App: React.FC = () => {
  const episode = podcastDetails.results[0];

  return <PodcastEpisodeDetails episode={episode} />;
};

export default App;
