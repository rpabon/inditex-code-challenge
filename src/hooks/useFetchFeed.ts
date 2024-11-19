import { useState, useEffect } from 'react';
import podcastFeedMock from '@/mocks/podcast-feed.mock.json';
import { PodcastFeed } from '@/types/PodcastFeed';

export const useFetchFeed = () => {
  const [podcastFeed, setPodcastFeed] = useState<PodcastFeed | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate potential error (uncomment to test error handling)
        // if (Math.random() < 0.3) throw new Error('Random error occurred');

        setPodcastFeed(podcastFeedMock as PodcastFeed);
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : 'An unknown error occurred';
        setError(new Error(errorMessage));
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return { podcastFeed, loading, error };
};
