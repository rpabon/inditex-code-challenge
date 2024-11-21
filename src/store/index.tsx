import React from 'react';
import { LoadingProvider } from '@/store/LoadingContext/LoadingContextProvider';
import { ErrorProvider } from '@/store/ErrorContext/ErrorContextProvider';
import { PodcastFeedProvider } from '@/store/PodcastFeedContext/PodcastFeedProvider';
import { PodcastDetailsProvider } from '@/store/PodcastDetailsContext/PodcastDetailsProvider';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LoadingProvider>
      <ErrorProvider>
        <PodcastFeedProvider>
          <PodcastDetailsProvider>{children}</PodcastDetailsProvider>
        </PodcastFeedProvider>
      </ErrorProvider>
    </LoadingProvider>
  );
};
