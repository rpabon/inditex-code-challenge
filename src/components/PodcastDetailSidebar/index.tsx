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
  const { podcastInfo, loading, error } = usePodcastInfo(podcastId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!podcastInfo) return <div>No podcast information available</div>;

  const title = podcastInfo['im:name'].label;
  const author = podcastInfo['im:artist'].label;
  const image = podcastInfo['im:image'][2];
  const description = podcastInfo.summary.label;

  return (
    <div className={styles.sidebar}>
      <PodcastImage image={image} alt={title} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>by {author}</p>
      </div>
      <div className={styles.description}>
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
