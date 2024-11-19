import React from 'react';
import { PodcastFeedProvider } from './PodcastFeedContext/PodcastFeedProvider';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <PodcastFeedProvider>{children}</PodcastFeedProvider>;
};
