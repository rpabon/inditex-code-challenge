import React from 'react';
import { Interweave } from 'interweave';
import { UrlMatcher } from 'interweave-autolink';
import { PodcastEpisode } from 'podcast-types';
import { Card } from '@/Card';
import styles from './PodcastEpisodeDetails.module.css';

interface Props {
  episode?: PodcastEpisode;
}

const urlMatcher = new UrlMatcher('url');

const PodcastEpisodeDetails: React.FC<Props> = ({ episode }) => {
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

export default PodcastEpisodeDetails;
