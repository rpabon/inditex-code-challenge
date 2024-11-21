import React from 'react';
import { PodcastImage } from '@/components/PodcastImage';
import { PodcastEntry } from '@/types/PodcastEntry';
import { usePodcastCard } from './usePodcastCard';
import styles from './PodcastCard.module.css';

interface PodcastCardProps {
  podcast: PodcastEntry;
}

export const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const navigateToPodcast = usePodcastCard();
  const id = podcast.id.attributes['im:id'];
  const title = podcast['im:name'].label;
  const author = podcast['im:artist'].label;
  const image = podcast['im:image'][1];

  return (
    <div className={styles.card} onClick={() => navigateToPodcast(id)}>
      <PodcastImage image={image} alt={title} />

      <div className={styles.content}>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>

        <p className={styles.author} title={author}>
          {author}
        </p>
      </div>
    </div>
  );
};
