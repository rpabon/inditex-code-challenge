import React, { ChangeEvent } from 'react';
import { PodcastEntry } from '@/types/PodcastEntry';
import { usePodcastFilterLogic } from './usePodcastFilterLogic';
import styles from './PodcastFilter.module.css';

interface PodcastFilterProps {
  podcasts: PodcastEntry[];
  filteredPodcastCount: number;
  onFilterChange: (filteredPodcasts: PodcastEntry[]) => void;
}

export const PodcastFilter: React.FC<PodcastFilterProps> = ({
  podcasts,
  filteredPodcastCount = 0,
  onFilterChange,
}) => {
  const { filterText, handleFilterChange } = usePodcastFilterLogic(
    podcasts,
    onFilterChange,
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilterChange(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Filter podcasts by title or author..."
        value={filterText}
        onChange={onInputChange}
        className={styles.filterInput}
      />
      <span className={styles.filterCount} data-testid="podcast-filter__count">
        {filteredPodcastCount}
      </span>
    </div>
  );
};
