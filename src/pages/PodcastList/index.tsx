import React, { useEffect, useState } from 'react';
import { useFetchFeed } from '@/hooks/useFetchFeed';
import { PodcastCard } from '@/components/PodcastCard';
import { PodcastFilter } from '@/components/PodcastFilter';
import styles from './PodcastList.module.css';

export const PodcastList: React.FC = () => {
  const { podcastFeed, loading, error } = useFetchFeed();
  const podcastList = podcastFeed?.feed.entry || [];
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcastList);

  useEffect(() => {
    setFilteredPodcasts(podcastList);
  }, [podcastFeed]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!podcastFeed) return <div>No podcast data available</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{podcastFeed.feed.title.label}</h1>

      <div className={styles.podcastFilterContainer}>
        <PodcastFilter
          podcasts={podcastList}
          onFilterChange={setFilteredPodcasts}
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
