import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';
import { formatDuration } from './PodcastEpisodeList.utils';
import styles from './PodcastEpisodeList.module.css';

export const PodcastEpisodeList: React.FC = () => {
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

  // Remove first element as it's not an episode
  const episodes = podcastDetails.results.slice(1);

  return (
    <div className={styles.episodeList}>
      <h2>Episodes: {episodes.length}</h2>
      <table className={styles.episodeTable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.trackId}>
              <td>
                <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
                  {episode.trackName}
                </Link>
              </td>
              <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
              <td>{formatDuration(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
