import React, { lazy, Suspense } from 'react';
import { LoaderSpinner } from '@/components/LoaderSpinner';
import { useNavigateToPodcast } from '@/hooks/useNavigateToPodcast';
import { usePodcastListLogic } from './usePodcastListLogic';

const RemotePodcastList = lazy(() => import('podcastListApp/PodcastList'));

export const PodcastList: React.FC = () => {
  const { podcastList } = usePodcastListLogic();
  const navigateToPodcast = useNavigateToPodcast();

  return (
    <Suspense fallback={<LoaderSpinner />}>
      <RemotePodcastList
        podcastList={podcastList}
        onPodcastClick={navigateToPodcast}
      />
    </Suspense>
  );
};
