import { useEffect } from 'react';
import { usePodcastFeed } from '@/hooks/usePodcastFeed';

export const usePodcastListLogic = () => {
  const { podcastFeed, fetchPodcastFeed } = usePodcastFeed();

  useEffect(() => {
    fetchPodcastFeed();
  }, [fetchPodcastFeed]);

  return {
    podcastList: podcastFeed?.feed?.entry || [],
  };
};
