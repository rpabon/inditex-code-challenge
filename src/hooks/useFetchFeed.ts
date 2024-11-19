import { useState, useEffect } from 'react';
import { PodcastFeed } from '@/types/PodcastFeed';
import { useFetchAllOrigins } from '@/hooks/useFetchAllOrigins';

const ITUNES_TOP_PODCASTS_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

export const useFetchFeed = () => {
  const [podcastFeed, setPodcastFeed] = useState<PodcastFeed | null>(null);
  const { fetchUrl, loading, error } = useFetchAllOrigins();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const feed = await fetchUrl<PodcastFeed>(ITUNES_TOP_PODCASTS_URL);
        if (feed) {
          setPodcastFeed(feed);
        }
      } catch (e) {
        console.error('Error fetching podcast feed:', e);
      }
    };

    fetchFeed();
  }, [fetchUrl]);

  return { podcastFeed, loading, error };
};
