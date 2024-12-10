import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastEpisode } from 'podcast-types';
import podcastEpisodesResults from '../mocks/podcast-episodes.mock.json';
import PodcastEpisodeList from '.';

describe('PodcastEpisodeList', () => {
  const episodes = podcastEpisodesResults.results as PodcastEpisode[];
  const resultCount = podcastEpisodesResults.resultCount as number;
  const mockNavigateToEpisode = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display the correct number of episodes in the header', () => {
    render(
      <PodcastEpisodeList
        episodes={episodes}
        navigateToEpisode={mockNavigateToEpisode}
      />,
    );

    const episodeHeader = screen.getByText(/Episodes:/);
    expect(episodeHeader).toHaveTextContent(`Episodes: ${resultCount}`);
  });

  it('should display episode titles as clickable links', () => {
    render(
      <PodcastEpisodeList
        episodes={episodes}
        navigateToEpisode={mockNavigateToEpisode}
      />,
    );

    episodes.forEach((episode) => {
      const episodeLink = screen.getByText(episode.trackName);
      fireEvent.click(episodeLink);
      expect(mockNavigateToEpisode).toHaveBeenCalledWith(episode.trackId);
    });
  });
});
