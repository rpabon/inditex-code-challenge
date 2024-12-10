import { useContext } from 'react';
import { PodcastDetailsContext } from '@/store/PodcastDetailsContext';

export const usePodcastDetails = () => {
  const context = useContext(PodcastDetailsContext);

  if (context === undefined) {
    throw new Error(
      'usePodcastDetails must be used within a PodcastDetailsProvider',
    );
  }

  return context;
};
