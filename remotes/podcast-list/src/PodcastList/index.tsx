import React, { useEffect, useState } from 'react';
import { PodcastEntry } from 'podcast-types';
import { PodcastCard } from '@/PodcastCard';
import { PodcastFilter } from '@/PodcastFilter';
import styles from './PodcastList.module.css';

interface Props {
  podcastList: PodcastEntry[];
  onPodcastClick: (id: string) => void;
}

const PodcastList: React.FC<Props> = ({ podcastList, onPodcastClick }) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastEntry[]>([]);

  useEffect(() => {
    if (podcastList) {
      setFilteredPodcasts(podcastList);
    }
  }, [podcastList]);

  const onFilterChange = (filteredPodcasts: PodcastEntry[]) => {
    setFilteredPodcasts(filteredPodcasts);
  };

  return (
    <>
      <div className={styles.filterWrapper}>
        <PodcastFilter
          podcasts={podcastList}
          onFilterChange={onFilterChange}
          filteredPodcastCount={filteredPodcasts.length}
        />
      </div>

      <div className={styles.podcastGrid}>
        {filteredPodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id.attributes['im:id']}
            podcast={podcast}
            navigateToPodcast={onPodcastClick}
          />
        ))}
      </div>
    </>
  );
};

export default PodcastList;
