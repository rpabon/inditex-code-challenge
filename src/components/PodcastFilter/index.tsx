import React, { ChangeEvent } from 'react';
import { PodcastEntry } from '@/types/PodcastEntry';
import { usePodcastFilterLogic } from './usePodcastFilterLogic';
import styles from './PodcastFilter.module.css';

interface PodcastFilterProps {
  podcasts: PodcastEntry[];
  onFilterChange: (filteredPodcasts: PodcastEntry[]) => void;
}

export const PodcastFilter: React.FC<PodcastFilterProps> = ({
  podcasts,
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
        placeholder="Filter podcasts..."
        value={filterText}
        onChange={onInputChange}
        className={styles.filterInput}
      />
    </div>
  );
};
