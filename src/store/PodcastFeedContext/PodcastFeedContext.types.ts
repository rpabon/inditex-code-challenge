import { PodcastFeed } from '@/types/PodcastFeed';

export interface PodcastFeedContextType {
  podcastFeed: PodcastFeed | null;
  error: Error | null;
  fetchPodcastFeed: () => Promise<void>;
}
