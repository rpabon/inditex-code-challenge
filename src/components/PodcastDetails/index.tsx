import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PodcastDetailSidebar } from '../PodcastDetailSidebar';
import { PodcastEpisodeList } from '../PodcastEpisodeList';

export const PodcastDetail: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  return (
    <div>
      <h1>Podcast Details</h1>
      <PodcastDetailSidebar podcastId={podcastId} />
      <PodcastEpisodeList podcastId={podcastId} />
    </div>
  );
};
