import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';

export const usePodcastEpisodeDetailsLogic = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const { podcastDetails, error, fetchPodcastDetails } = usePodcastDetails();

  useEffect(() => {
    if (podcastId) {
      fetchPodcastDetails(podcastId);
    }
  }, [podcastId, fetchPodcastDetails]);

  const episode = podcastDetails?.results.find(
    (episode) => episode.trackId.toString() === episodeId,
  );

  return {
    error,
    episode,
  };
};
