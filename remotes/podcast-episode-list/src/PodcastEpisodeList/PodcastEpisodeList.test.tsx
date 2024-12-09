// import { render, screen, fireEvent } from '@testing-library/react';
// import podcastDetailsMock from '@/mocks/podcast-details.mock';
// import { usePodcastEpisodeList } from './usePodcastEpisodeList';
// import { usePodcastEpisode } from './usePodcastEpisode';
// import { PodcastEpisodeList } from '.';

// jest.mock('./usePodcastEpisodeList');
// jest.mock('./usePodcastEpisode');

// describe('PodcastEpisodeList', () => {
//   it('should display the correct number of episodes in the header', () => {
//     (usePodcastEpisodeList as jest.Mock).mockReturnValue({
//       podcastId: '934552872',
//       episodes: podcastDetailsMock.results,
//     });
//     (usePodcastEpisode as jest.Mock).mockReturnValue(jest.fn());

//     render(<PodcastEpisodeList />);

//     const episodeHeader = screen.getByText(/Episodes:/);
//     expect(episodeHeader).toHaveTextContent(
//       `Episodes: ${podcastDetailsMock.resultCount}`,
//     );
//   });

//   it('should display episode titles as clickable links', () => {
//     const episodes = podcastDetailsMock.results;
//     (usePodcastEpisodeList as jest.Mock).mockReturnValue({
//       podcastId: 'mockPodcastId',
//       episodes,
//     });

//     const mockNavigateToEpisode = jest.fn();
//     (usePodcastEpisode as jest.Mock).mockReturnValue(mockNavigateToEpisode);

//     render(<PodcastEpisodeList />);

//     episodes.forEach((episode) => {
//       const episodeLink = screen.getByText(episode.trackName);
//       fireEvent.click(episodeLink);
//       expect(mockNavigateToEpisode).toHaveBeenCalledWith(episode.trackId);
//     });
//   });
// });
