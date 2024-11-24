import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/Card/Card';
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
    <Link to={`/podcast/${podcastId}`}>
      <Card className={styles.sidebarCard}>
        <PodcastImage className={styles.image} image={image} alt={title} />

        <div className={styles.infoWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>by {author}</p>
        </div>

        <h3 className={styles.descriptionTitle}>Description:</h3>
        <p className={styles.description}>{description}</p>
      </Card>
    </Link>
  );
};
