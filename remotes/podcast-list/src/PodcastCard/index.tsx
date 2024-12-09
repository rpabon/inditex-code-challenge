import React from 'react';
import { PodcastEntry } from 'podcast-types';
import { Card } from '@/Card';
import { PodcastImage } from '@/PodcastImage';
import styles from './PodcastCard.module.css';

interface PodcastCardProps {
  podcast: PodcastEntry;
  navigateToPodcast: (id: string) => void;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({
  podcast,
  navigateToPodcast,
}) => {
  const id = podcast.id.attributes['im:id'];
  const title = podcast['im:name'].label;
  const author = podcast['im:artist'].label;
  const image = podcast['im:image'][1];

  return (
    <Card
      className={styles.card}
      data-testid="podcast-card"
      onClick={() => navigateToPodcast(id)}
    >
      <PodcastImage image={image} alt={title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>

        <p className={styles.author} title={author}>
          by {author}
        </p>
      </div>
    </Card>
  );
};
