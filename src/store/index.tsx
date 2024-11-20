import React from 'react';
import { PodcastFeedProvider } from '@/store/PodcastFeedContext/PodcastFeedProvider';
import { PodcastDetailsProvider } from '@/store/PodcastDetailsContext/PodcastDetailsProvider';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PodcastFeedProvider>
      <PodcastDetailsProvider>{children}</PodcastDetailsProvider>
    </PodcastFeedProvider>
  );
};
