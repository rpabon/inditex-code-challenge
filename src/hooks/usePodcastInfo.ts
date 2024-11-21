import { useEffect } from 'react';
import { PodcastEntry } from '@/types/PodcastEntry';
import { usePodcastFeed } from './usePodcastFeed';

export const usePodcastInfo = (podcastId?: string) => {
  const { podcastFeed, error, fetchPodcastFeed } = usePodcastFeed();

  useEffect(() => {
    fetchPodcastFeed();
  }, []);

  const entries = podcastFeed?.feed?.entry || [];
  const podcastInfo: PodcastEntry | undefined = entries.find(
    (entry) => entry.id.attributes['im:id'] === podcastId,
  );

  return {
    podcastInfo,
    error,
  };
};
