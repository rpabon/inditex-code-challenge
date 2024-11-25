import React from 'react';
import { Card } from '@/components/Card/Card';
import { usePodcastEpisodeDetailsLogic } from './usePodcastEpisodeDetailsLogic';
import styles from './PodcastEpisodeDetails.module.css';

export const PodcastEpisodeDetails: React.FC = () => {
  const episode = usePodcastEpisodeDetailsLogic();

  if (!episode) return <div>Episode not found</div>;

  return (
    <Card className={styles.episodeDetails}>
      <h2 className={styles.title}>{episode.trackName}</h2>
      <div className={styles.description}>{episode.description}</div>
      <audio controls src={episode.previewUrl} className={styles.audio}>
        Your browser does not support the audio element.
      </audio>
    </Card>
  );
};
