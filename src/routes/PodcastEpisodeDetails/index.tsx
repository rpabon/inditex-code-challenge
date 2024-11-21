import React from 'react';
import { LoaderSpinner } from '@/components/LoaderSpinner/LoaderSpinner';
import { usePodcastEpisodeDetailsLogic } from './usePodcastEpisodeDetailsLogic';
import styles from './PodcastEpisodeDetails.module.css';

export const PodcastEpisodeDetails: React.FC = () => {
  const { loading, error, episode } = usePodcastEpisodeDetailsLogic();

  if (loading) {
    return (
      <div className={styles.loading}>
        <LoaderSpinner />
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;
  if (!episode) return <div>Episode not found</div>;

  return (
    <div className={styles.episodeDetails}>
      <h2>{episode.trackName}</h2>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
      <audio controls src={episode.previewUrl} className={styles.audio}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
