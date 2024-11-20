import React, { useEffect } from 'react';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';
import styles from './PodcastEpisodeDetails.module.css';

interface PodcastEpisodeDetailsProps {
  podcastId?: string;
  episodeId?: string;
}

export const PodcastEpisodeDetails: React.FC<PodcastEpisodeDetailsProps> = ({
  podcastId,
  episodeId,
}: PodcastEpisodeDetailsProps) => {
  const { podcastDetails, loading, error, fetchPodcastDetails } =
    usePodcastDetails();

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetails(podcastId);
    }
  }, [podcastId, fetchPodcastDetails]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log('episode id', episodeId);

  console.log(podcastDetails?.results.map((e) => e.trackId));

  const episode = podcastDetails?.results.find(
    (episode) => episode.trackId.toString() === episodeId,
  );

  if (!episode) return <div>Episode not found</div>;

  return (
    <div className={styles.episodeDetails}>
      <h2>{episode.trackName}</h2>
      <p>{episode.description}</p>
      <audio controls src={episode.previewUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
