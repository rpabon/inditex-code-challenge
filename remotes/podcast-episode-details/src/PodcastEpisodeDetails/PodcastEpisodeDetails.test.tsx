// import { render, screen } from '@testing-library/react';
// import { PodcastEpisode } from 'podcast-types';
// import { usePodcastEpisodeDetailsLogic } from './usePodcastEpisodeDetailsLogic';
// import { PodcastEpisodeDetails } from '.';

// jest.mock('./usePodcastEpisodeDetailsLogic');

// const exampleLink = 'http://example.com';
// const previewUrl = 'http://example.com/audio.mp3';
// const mockEpisode: Partial<PodcastEpisode> = {
//   trackName: 'Sample Episode',
//   description: `Check out this link: ${exampleLink}`,
//   previewUrl,
// };

// describe('PodcastEpisodeDetails', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should display "Episode not found" when no episode data is returned', () => {
//     (usePodcastEpisodeDetailsLogic as jest.Mock).mockReturnValue(null);

//     render(<PodcastEpisodeDetails />);

//     const notFoundMessage = screen.getByText('Episode not found');
//     expect(notFoundMessage).toBeInTheDocument();
//   });

//   it('should open links in a new window when URLs are present in the description', () => {
//     (usePodcastEpisodeDetailsLogic as jest.Mock).mockReturnValue(mockEpisode);
//     render(<PodcastEpisodeDetails />);

//     const linkElement = screen.getByText(exampleLink);
//     expect(linkElement).toHaveAttribute('target', '_blank');
//   });

//   it('should render the audio element with the correct source URL', () => {
//     (usePodcastEpisodeDetailsLogic as jest.Mock).mockReturnValue(mockEpisode);
//     render(<PodcastEpisodeDetails />);

//     const audioElement = screen.getByRole('audio');
//     expect(audioElement).toHaveAttribute('src', previewUrl);
//     expect(audioElement).toHaveTextContent(
//       'Your browser does not support the audio element.',
//     );
//   });

//   it('should convert line breaks in the episode description to <br> elements', () => {
//     const specialCharacterDescription = `Enjoy the episode!\nNew line here.`;
//     const mockEpisodeWithSpecialChars: Partial<PodcastEpisode> = {
//       ...mockEpisode,
//       description: specialCharacterDescription,
//     };

//     (usePodcastEpisodeDetailsLogic as jest.Mock).mockReturnValue(
//       mockEpisodeWithSpecialChars,
//     );
//     const { container } = render(<PodcastEpisodeDetails />);

//     const descriptionElement = container.querySelector('.description');
//     expect(descriptionElement).not.toBeNull();
//     expect(descriptionElement?.innerHTML).toContain(
//       `Enjoy the episode!<br>New line here.`,
//     );
//   });
// });
