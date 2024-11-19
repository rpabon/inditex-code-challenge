import { PodcastFeed } from '@/types/PodcastFeed';

const PODCAST_FEED_KEY = 'podcastFeed';
const PODCAST_FEED_TIMESTAMP_KEY = 'podcastFeedTimestamp';

export const setFeedToStorage = (feed: PodcastFeed) => {
  localStorage.setItem(PODCAST_FEED_KEY, JSON.stringify(feed));
  localStorage.setItem(
    PODCAST_FEED_TIMESTAMP_KEY,
    new Date().getTime().toString(),
  );
};

export const getFeedFromStorage = (): PodcastFeed | null => {
  const storedFeed = localStorage.getItem(PODCAST_FEED_KEY);
  const storedTimestamp = localStorage.getItem(PODCAST_FEED_TIMESTAMP_KEY);

  if (storedFeed && storedTimestamp) {
    const currentTime = new Date().getTime();
    const storedTime = parseInt(storedTimestamp);

    // Check if the stored feed is less than 24 hours old
    if (currentTime - storedTime < 24 * 60 * 60 * 1000) {
      return JSON.parse(storedFeed);
    } else {
      // If older than 24 hours, remove from localStorage
      localStorage.removeItem(PODCAST_FEED_KEY);
      localStorage.removeItem(PODCAST_FEED_TIMESTAMP_KEY);
    }
  }

  return null;
};
