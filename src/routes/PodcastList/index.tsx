import React from 'react';
import { PodcastCard } from '@/components/PodcastCard';
import { PodcastFilter } from '@/components/PodcastFilter';
import { LoaderSpinner } from '@/components/LoaderSpinner/LoaderSpinner';
import { usePodcastListLogic } from './usePodcastListLogic';
import styles from './PodcastList.module.css';

export const PodcastList: React.FC = () => {
  const { podcastFeed, loading, error, filteredPodcasts, handleFilterChange } =
    usePodcastListLogic();

  if (loading) {
    return (
      <div className={styles.loading}>
        <LoaderSpinner />
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  const title = podcastFeed?.feed?.title.label;
  const podcastList = podcastFeed?.feed?.entry || [];

  return (
    <div className={styles.container}>
      <div className={styles.fixedHeader}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.filterWrapper}>
          <PodcastFilter
            podcasts={podcastList}
            onFilterChange={handleFilterChange}
          />
          <span className={styles.podcastFilterCount}>
            {filteredPodcasts.length}
          </span>
        </div>
      </div>

      <div className={styles.podcastGrid}>
        {filteredPodcasts.map((podcast) => (
          <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};
