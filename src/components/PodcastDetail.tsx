import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';

export const PodcastDetail: React.FC = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcastDetails, loading, error, fetchPodcastDetails } =
    usePodcastDetails();

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetails(podcastId);
    }
  }, [podcastId, fetchPodcastDetails]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!podcastDetails) return <div>No podcast details available</div>;

  return (
    <div>
      <h1>Podcast Details</h1>
      <ul>
        {Object.entries(podcastDetails).map(([key, value]) => {
          // Skip rendering if the value is an object or array
          if (typeof value === 'object') return null;

          return (
            <li key={key}>
              <strong>{key}:</strong> {String(value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
