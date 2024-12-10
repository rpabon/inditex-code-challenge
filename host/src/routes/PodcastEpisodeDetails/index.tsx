import React, { lazy, Suspense } from 'react';
import { LoaderSpinner } from '@/components/LoaderSpinner';
import { usePodcastEpisodeDetailsLogic } from './usePodcastEpisodeDetailsLogic';

const RemotePodcastEpisodeDetails = lazy(
  () => import('episodeDetailsApp/PodcastEpisodeDetails'),
);

export const PodcastEpisodeDetails: React.FC = () => {
  const episode = usePodcastEpisodeDetailsLogic();

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <RemotePodcastEpisodeDetails episode={episode} />
    </Suspense>
  );
};
