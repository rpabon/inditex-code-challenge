import { PodcastFeed } from '@/types/PodcastFeed';

export interface PodcastFeedContextType {
  podcastFeed: PodcastFeed | null;
  loading: boolean;
  error: Error | null;
}
