import React from 'react';
import styles from './PodcastEpisodeDetails.module.css';
import { usePodcastEpisodeDetailsLogic } from './usePodcastEpisodeDetailsLogic';

export const PodcastEpisodeDetails: React.FC = () => {
  const { loading, error, episode } = usePodcastEpisodeDetailsLogic();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
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
