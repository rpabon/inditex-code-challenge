import { useState, useCallback } from 'react';
import { PodcastEntry } from 'podcast-types';

export const usePodcastFilterLogic = (
  podcasts: PodcastEntry[],
  onFilterChange: (filteredPodcasts: PodcastEntry[]) => void,
) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = useCallback(
    (text: string) => {
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

  return {
    filterText,
    handleFilterChange,
  };
};

function matchStrings(str1: string, str2: string) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}
