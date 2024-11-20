import React, { useCallback, useState } from 'react';
import { PodcastFeed } from '@/types/PodcastFeed';
import { useFetchAllOrigins } from '@/hooks/useFetchAllOrigins';
import { getItemFromStorage, setItemToStorage } from '@/store/store.utils';
import { PodcastFeedContext } from '.';

const ITUNES_TOP_PODCASTS_BASE_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
const STORAGE_KEY = 'podcastFeed';

export const PodcastFeedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [podcastFeed, setPodcastFeed] = useState<PodcastFeed | null>(null);
  const { fetchUrl, loading, error } = useFetchAllOrigins();

  const fetchPodcastFeed = useCallback(async () => {
    const cachedFeed = getItemFromStorage<PodcastFeed>(STORAGE_KEY);
    if (cachedFeed) {
      setPodcastFeed(cachedFeed);
      return;
    }

    try {
      const feed = await fetchUrl<PodcastFeed>(ITUNES_TOP_PODCASTS_BASE_URL);
      if (feed) {
        setPodcastFeed(feed);
        setItemToStorage(STORAGE_KEY, feed);
      }
    } catch (e) {
      console.error('Error fetching podcast feed:', e);
    }
  }, []);

  return (
    <PodcastFeedContext.Provider
      value={{ podcastFeed, loading, error, fetchPodcastFeed }}
    >
      {children}
    </PodcastFeedContext.Provider>
  );
};
