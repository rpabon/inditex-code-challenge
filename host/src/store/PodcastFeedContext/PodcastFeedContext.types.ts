import { PodcastFeed } from 'podcast-types';

export interface PodcastFeedContextType {
  podcastFeed: PodcastFeed | null;
  fetchPodcastFeed: () => Promise<void>;
}
