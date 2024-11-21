import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '@/hooks/useLoading';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';

export const usePodcastCard = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { fetchPodcastDetails } = usePodcastDetails();

  const navigateToPodcast = useCallback(
    async (podcastId: string) => {
      setLoading(true);

      try {
        await fetchPodcastDetails(podcastId);
        navigate(`/podcast/${podcastId}`);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, fetchPodcastDetails, navigate],
  );

  return navigateToPodcast;
};
