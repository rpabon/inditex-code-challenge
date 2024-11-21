import { PodcastFeed } from '@/types/PodcastFeed';

export interface PodcastFeedContextType {
  podcastFeed: PodcastFeed | null;
  fetchPodcastFeed: () => Promise<void>;
}
