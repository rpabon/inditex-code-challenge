import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePodcastDetails } from '@/hooks/usePodcastDetails';
import styles from './PodcastEpisodeList.module.css';

interface PodcastEpisodeListProps {
  podcastId?: string;
}

export const PodcastEpisodeList: React.FC<PodcastEpisodeListProps> = ({
  podcastId,
}) => {
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

  const episodes = podcastDetails.results;

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

function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
