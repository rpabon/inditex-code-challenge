import React, { useState, useCallback } from 'react';
import { useFetchAllOrigins } from '@/hooks/useFetchAllOrigins';
import { PodcastDetails } from '@/types/PodcastDetails';
import { getItemFromStorage, setItemToStorage } from '@/store/store.utils';
import { PodcastDetailsContext } from '.';

const PODCAST_DETAILS_BASE_URL = 'https://itunes.apple.com/lookup';
const STORAGE_KEY_BASE = 'podcastDetails';

export const PodcastDetailsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetails | null>(
    null,
  );
  const fetchUrl = useFetchAllOrigins();

  const fetchPodcastDetails = useCallback(async (podcastId: string) => {
    const storageKey = `${STORAGE_KEY_BASE}_${podcastId}`;
    const cachedDetails = getItemFromStorage<PodcastDetails>(storageKey);

    if (cachedDetails) {
      setPodcastDetails(cachedDetails);
      return;
    }

    try {
      const url = new URL(PODCAST_DETAILS_BASE_URL);
      const params = new URLSearchParams({
        id: podcastId,
        entity: 'podcastEpisode',
        media: 'podcast',
        limit: '20',
      });
      url.search = params.toString();

      const details = await fetchUrl<PodcastDetails>(url.toString());
      if (details) {
        setPodcastDetails(details);
        setItemToStorage(storageKey, details);
      }
    } catch (e) {
      console.error('Error fetching podcast details:', e);
    }
  }, []);

  return (
    <PodcastDetailsContext.Provider
      value={{ podcastDetails, fetchPodcastDetails }}
    >
      {children}
    </PodcastDetailsContext.Provider>
  );
};
