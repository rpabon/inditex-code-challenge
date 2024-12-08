import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePodcastEpisode = (podcastId?: string) => {
  const navigate = useNavigate();

  const navigateToEpisode = useCallback(
    async (episodeId: number) => {
      if (!podcastId) return;

      navigate(`/podcast/${podcastId}/episode/${episodeId}`);
    },
    [podcastId, navigate],
  );

  return navigateToEpisode;
};
