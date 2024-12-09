import React from 'react';
import { PodcastEpisode } from 'podcast-types';
import { Card } from '@/Card';
import { formatDuration } from './PodcastEpisodeList.utils';
import styles from './PodcastEpisodeList.module.css';

interface Props {
  episodes: PodcastEpisode[];
  navigateToEpisode: (episodeId: number) => void;
}

const PodcastEpisodeList: React.FC<Props> = ({
  episodes,
  navigateToEpisode,
}) => {
  return (
    <div className={styles.episodeList}>
      <Card className={styles.episodeCard}>Episodes: {episodes.length}</Card>

      <div className={styles.tableWrapper}>
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
                  <div
                    className={styles.episodeLink}
                    onClick={() => navigateToEpisode(episode.trackId)}
                  >
                    {episode.trackName}
                  </div>
                </td>
                <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
                <td>{formatDuration(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PodcastEpisodeList;
