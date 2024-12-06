import React from 'react';
import { Interweave } from 'interweave';
import { UrlMatcher } from 'interweave-autolink';
import { Card } from '@/components/Card/Card';
import { usePodcastEpisodeDetailsLogic } from './usePodcastEpisodeDetailsLogic';
import styles from './PodcastEpisodeDetails.module.css';

const urlMatcher = new UrlMatcher('url');

export const PodcastEpisodeDetails: React.FC = () => {
  const episode = usePodcastEpisodeDetailsLogic();

  if (!episode) return <div>Episode not found</div>;

  return (
    <Card className={styles.episodeDetails}>
      <h2 className={styles.title}>{episode.trackName}</h2>
      <div className={styles.description}>
        <Interweave
          content={episode.description}
          matchers={[urlMatcher]}
          newWindow
        />
      </div>
      <audio
        role="audio"
        className={styles.audio}
        src={episode.previewUrl}
        controls
      >
        Your browser does not support the audio element.
      </audio>
    </Card>
  );
};
