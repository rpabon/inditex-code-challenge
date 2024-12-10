import { PodcastDetails } from 'podcast-types';

export interface PodcastDetailsContextType {
  podcastDetails: PodcastDetails | null;
  fetchPodcastDetails: (podcastId: string) => Promise<void>;
}
