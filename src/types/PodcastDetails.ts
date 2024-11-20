import { PodcastEpisode } from '@/types/PodcastEpisode';

export interface PodcastDetails {
  resultCount: number;
  results: PodcastEpisode[];
}
