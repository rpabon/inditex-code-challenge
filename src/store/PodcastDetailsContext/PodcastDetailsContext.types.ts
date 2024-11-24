import { PodcastDetails } from '@/types/PodcastDetails';

export interface PodcastDetailsContextType {
  podcastDetails: PodcastDetails | null;
  fetchPodcastDetails: (podcastId: string) => Promise<void>;
}
