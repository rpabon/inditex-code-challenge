import React from 'react';
import { Link } from 'react-router-dom';
import { PodcastImage } from '@/components/PodcastImage';
import { PodcastEntry } from '@/types/PodcastEntry';
import styles from './PodcastCard.module.css';

interface PodcastCardProps {
  podcast: PodcastEntry;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const title = podcast['im:name'].label;
  const author = podcast['im:artist'].label;

  return (
    <Link
      to={`/podcast/${podcast.id.attributes['im:id']}`}
      className={styles.card}
    >
      <PodcastImage image={podcast['im:image'][1]} alt={title} />
      <div className={styles.content}>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>
        <p className={styles.author} title={author}>
          {author}
        </p>
      </div>
    </Link>
  );
};
