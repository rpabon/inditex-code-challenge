import { useEffect } from 'react';
import { usePodcastFeed } from './usePodcastFeed';
import { PodcastEntry } from '@/types/PodcastEntry';

export const usePodcastInfo = (podcastId?: string) => {
  const { podcastFeed, loading, error, fetchPodcastFeed } = usePodcastFeed();

  useEffect(() => {
    fetchPodcastFeed();
  }, []);

  const entries = podcastFeed?.feed?.entry || [];
  const podcastInfo: PodcastEntry | undefined = entries.find(
    (entry) => entry.id.attributes['im:id'] === podcastId,
  );

  return {
    podcastInfo,
    loading,
    error,
  };
};
