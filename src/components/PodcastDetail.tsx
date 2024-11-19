import React from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetail: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  return (
    <div>
      <h1>Podcast Detail</h1>
      <p>Podcast ID: {podcastId}</p>
    </div>
  );
};

export default PodcastDetail;
