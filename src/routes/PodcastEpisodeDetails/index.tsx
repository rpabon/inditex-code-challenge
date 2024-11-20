import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';
import styles from './PodcastEpisodeDetails.module.css';

export const PodcastEpisodeDetails: React.FC = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const { podcastDetails, loading, error, fetchPodcastDetails } =
    usePodcastDetails();

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetails(podcastId);
    }
  }, [podcastId, fetchPodcastDetails]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
