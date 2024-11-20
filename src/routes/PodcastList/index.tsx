import React from 'react';
import { PodcastCard } from '@/components/PodcastCard';
import { PodcastFilter } from '@/components/PodcastFilter';
import { usePodcastListLogic } from './usePodcastListLogic';
import styles from './PodcastList.module.css';

export const PodcastList: React.FC = () => {
  const { podcastFeed, loading, error, filteredPodcasts, handleFilterChange } =
    usePodcastListLogic();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const title = podcastFeed?.feed?.title.label;
  const podcastList = podcastFeed?.feed?.entry || [];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.podcastFilterContainer}>
        <PodcastFilter
          podcasts={podcastList}
          onFilterChange={handleFilterChange}
        />
        <span className={styles.podcastFilterCount}>
          {filteredPodcasts.length}
        </span>
      </div>

      <div className={styles.podcastGrid}>
        {filteredPodcasts.map((podcast) => (
          <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};
