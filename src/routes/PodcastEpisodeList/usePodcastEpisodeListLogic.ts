import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';

export const usePodcastEpisodeListLogic = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const { podcastDetails, error, fetchPodcastDetails } =
    usePodcastDetails();

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetails(podcastId);
    }
  }, [podcastId, fetchPodcastDetails]);

  const episodes = podcastDetails?.results.slice(1) || [];

  return {
    podcastId,
    episodes,
    error,
    podcastDetails,
  };
};
