import React from 'react';
import { useParams } from 'react-router-dom';
import { PodcastDetailSidebar } from '../PodcastDetailSidebar';
import { PodcastEpisodeDetails } from '../PodcastEpisodeDetails';

export const PodcastDetailOverview: React.FC = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();

  console.log({ episodeId, podcastId });

  return (
    <div>
      <h1>Podcast Overview</h1>
      <PodcastDetailSidebar podcastId={podcastId} />
      <PodcastEpisodeDetails podcastId={podcastId} episodeId={episodeId} />
    </div>
  );
};
