import React from 'react';
import { useParams } from 'react-router-dom';
import { PodcastDetailSidebar } from '../PodcastDetailSidebar';
import { PodcastEpisodeList } from '../PodcastEpisodeList';

export const PodcastDetails: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  return (
    <div>
      <h1>Podcast Details</h1>
      <PodcastDetailSidebar podcastId={podcastId} />
      <PodcastEpisodeList podcastId={podcastId} />
    </div>
  );
};
