import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { PodcastDetailSidebar } from '@/components/PodcastDetailSidebar';
import styles from './PodcastLayout.module.css';

export const SinglePodcastOverview: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  return (
    <div className={styles.layout}>
      <PodcastDetailSidebar podcastId={podcastId} />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
