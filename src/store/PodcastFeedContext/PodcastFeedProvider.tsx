import React, { useState, useEffect } from 'react';
import { PodcastFeed } from '@/types/PodcastFeed';
import { useFetchAllOrigins } from '@/hooks/useFetchAllOrigins';
import { getFeedFromStorage, setFeedToStorage } from './utils';
import { PodcastFeedContext } from '.';

const ITUNES_TOP_PODCASTS_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const PodcastFeedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [podcastFeed, setPodcastFeed] = useState<PodcastFeed | null>(null);
  const { fetchUrl, loading, error } = useFetchAllOrigins();

  const fetchAndSetFeed = async () => {
    try {
      const feed = await fetchUrl<PodcastFeed>(ITUNES_TOP_PODCASTS_URL);
      if (feed) {
        setPodcastFeed(feed);
        setFeedToStorage(feed);
      }
    } catch (e) {
      console.error('Error fetching podcast feed:', e);
    }
  };

  useEffect(() => {
    const storedFeed = getFeedFromStorage();
    if (storedFeed) {
      setPodcastFeed(storedFeed);
    } else {
      fetchAndSetFeed();
    }
  }, [fetchUrl]);

  return (
    <PodcastFeedContext.Provider value={{ podcastFeed, loading, error }}>
      {children}
    </PodcastFeedContext.Provider>
  );
};
