import React from 'react';
import { LoadingProvider } from '@/store/LoadingContext/LoadingContextProvider';
import { PodcastFeedProvider } from '@/store/PodcastFeedContext/PodcastFeedProvider';
import { PodcastDetailsProvider } from '@/store/PodcastDetailsContext/PodcastDetailsProvider';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LoadingProvider>
      <PodcastFeedProvider>
        <PodcastDetailsProvider>{children}</PodcastDetailsProvider>
      </PodcastFeedProvider>
    </LoadingProvider>
  );
};
