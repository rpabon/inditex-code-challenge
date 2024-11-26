import { useState, useEffect } from 'react';
import { usePodcastFeed } from '@/hooks/usePodcastFeed';
import { PodcastEntry } from '@/types/PodcastEntry';

export const usePodcastListLogic = () => {
  const { podcastFeed, fetchPodcastFeed } = usePodcastFeed();
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastEntry[]>([]);

  useEffect(() => {
    fetchPodcastFeed();
  }, [fetchPodcastFeed]);

  useEffect(() => {
    if (podcastFeed?.feed?.entry) {
      setFilteredPodcasts(podcastFeed.feed.entry);
    }
  }, [podcastFeed]);

  const onFilterChange = (filteredPodcasts: PodcastEntry[]) => {
    setFilteredPodcasts(filteredPodcasts);
  };

  return {
    podcastFeed,
    filteredPodcasts,
    onFilterChange,
  };
};
