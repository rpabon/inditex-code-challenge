import { useState, useEffect } from 'react';
import { usePodcastFeed } from '@/hooks/usePodcastFeed';
import { PodcastEntry } from '@/types/PodcastEntry';

export const usePodcastListLogic = () => {
  const { podcastFeed, error, fetchPodcastFeed } = usePodcastFeed();
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastEntry[]>([]);

  useEffect(() => {
    fetchPodcastFeed();
  }, [fetchPodcastFeed]);

  useEffect(() => {
    if (podcastFeed?.feed?.entry) {
      setFilteredPodcasts(podcastFeed.feed.entry);
    }
  }, [podcastFeed]);

  const handleFilterChange = (filteredPodcasts: PodcastEntry[]) => {
    setFilteredPodcasts(filteredPodcasts);
  };

  return {
    podcastFeed,
    error,
    filteredPodcasts,
    handleFilterChange,
  };
};
