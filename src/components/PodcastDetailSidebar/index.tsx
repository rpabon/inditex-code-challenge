import React from 'react';
import { PodcastImage } from '@/components/PodcastImage';
import { usePodcastInfo } from '@/hooks/usePodcastInfo';
import styles from './PodcastDetailSidebar.module.css';

interface PodcastDetailSidebarProps {
  podcastId?: string;
}

export const PodcastDetailSidebar: React.FC<PodcastDetailSidebarProps> = ({
  podcastId,
}) => {
  const podcastInfo = usePodcastInfo(podcastId);

  if (!podcastInfo)
    return <div className={styles.error}>No podcast information available</div>;

  const title = podcastInfo['im:name'].label;
  const author = podcastInfo['im:artist'].label;
  const image = podcastInfo['im:image'][2];
  const description = podcastInfo.summary.label;

  return (
    <div className={styles.sidebarCard}>
      <div className={styles.imageWrapper}>
        <PodcastImage image={image} alt={title} />
      </div>
      <div className={styles.infoWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>by {author}</p>
      </div>
      <div className={styles.descriptionWrapper}>
        <h3 className={styles.descriptionTitle}>Description:</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
