import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';

export const usePodcastEpisodeList = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcastDetails, fetchPodcastDetails } = usePodcastDetails();

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetails(podcastId);
    }
  }, [podcastId, fetchPodcastDetails]);

  // Remove first element because it is not an episode
  const episodes = podcastDetails?.results.slice(1) || [];

  return {
    podcastId,
    episodes,
  };
};
