import React from 'react';
import { PodcastEpisode } from 'podcast-types';
import PodcastEpisodeList from './PodcastEpisodeList';
import podcastEpisodesResults from './mocks/podcast-episodes.mock.json';

const App: React.FC = () => {
  const episodes = podcastEpisodesResults.results as PodcastEpisode[];

  return (
    <PodcastEpisodeList
      episodes={episodes}
      navigateToEpisode={(episodeId: number) => {
        console.log({ episodeId });
      }}
    />
  );
};

export default App;
