import React from 'react';
import { Link } from 'react-router-dom';
import { formatDuration } from './PodcastEpisodeList.utils';
import { usePodcastEpisodeListLogic } from './usePodcastEpisodeListLogic';
import styles from './PodcastEpisodeList.module.css';

export const PodcastEpisodeList: React.FC = () => {
  const { podcastId, episodes, podcastDetails } = usePodcastEpisodeListLogic();

  if (!podcastDetails) return <div>No podcast details available</div>;

  return (
    <div className={styles.episodeList}>
      <div className={styles.episodeCard}>
        <h2>Episodes: {episodes.length}</h2>
      </div>

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
                <Link
                  to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                  className={styles.episodeLink}
                >
                  <strong>{episode.trackName}</strong>
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
