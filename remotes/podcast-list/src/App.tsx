import React from 'react';
import PodcastList from './PodcastList';
import podcastFeed from './mocks/podcast-feed.mock';

const App: React.FC = () => {
  return (
    <PodcastList
      podcastList={podcastFeed.feed?.entry || []}
      onPodcastClick={(podcastId: string) => {
        console.log({ podcastId });
      }}
    />
  );
};

export default App;
