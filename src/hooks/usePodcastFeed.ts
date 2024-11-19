import { useContext } from 'react';
import { PodcastFeedContext } from '@/store/PodcastFeedContext';

export const usePodcastFeed = () => {
  const context = useContext(PodcastFeedContext);

  if (context === undefined) {
    throw new Error(
      'usePodcastFeedContext must be used within a PodcastFeedProvider',
    );
  }

  return context;
};
