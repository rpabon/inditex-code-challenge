import { PodcastDetails } from '@/types/PodcastDetails'; // You'll need to create this type

export interface PodcastDetailsContextType {
  podcastDetails: PodcastDetails | null;
  error: Error | null;
  fetchPodcastDetails: (podcastId: string) => Promise<void>;
}
