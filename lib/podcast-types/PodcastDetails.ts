import { PodcastEpisode } from './PodcastEpisode';

export interface PodcastDetails {
  resultCount: number;
  results: PodcastEpisode[];
}
