import React, { ChangeEvent, useState, useCallback } from 'react';
import { PodcastEntry } from '@/types/PodcastEntry';
import styles from './PodcastFilter.module.css';

interface PodcastFilterProps {
  podcasts: PodcastEntry[];
  onFilterChange: (filteredPodcasts: PodcastEntry[]) => void;
}

export const PodcastFilter: React.FC<PodcastFilterProps> = ({
  podcasts,
  onFilterChange,
}) => {
  const [filterText, setFilterText] = useState('');

  const matchStrings = (str1: string, str2: string): boolean =>
    str1.toLowerCase().includes(str2.toLowerCase());

  const handleFilterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value.toLowerCase();
      setFilterText(text);

      const filtered = podcasts.filter(
        (podcast) =>
          matchStrings(podcast['im:name'].label, text) ||
          matchStrings(podcast['im:artist'].label, text),
      );

      onFilterChange(filtered);
    },
    [podcasts, onFilterChange],
  );

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Filter podcasts..."
        value={filterText}
        onChange={handleFilterChange}
        className={styles.filterInput}
      />
    </div>
  );
};
