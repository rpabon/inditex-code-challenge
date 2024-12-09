import React, { lazy, Suspense } from 'react';
import { LoaderSpinner } from '@/components/LoaderSpinner';
import { usePodcastEpisodeList } from './usePodcastEpisodeList';
import { usePodcastEpisode } from './usePodcastEpisode';

const RemotePodcastEpisodeList = lazy(
  () => import('podcastEpisodeListApp/PodcastEpisodeList'),
);
export const PodcastEpisodeList: React.FC = () => {
  const { podcastId, episodes } = usePodcastEpisodeList();
  const navigateToEpisode = usePodcastEpisode(podcastId);

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <RemotePodcastEpisodeList
        episodes={episodes}
        navigateToEpisode={navigateToEpisode}
      />
    </Suspense>
  );
};
