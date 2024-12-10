import { render, screen } from '@testing-library/react';
import { PodcastEpisode } from 'podcast-types';
import PodcastEpisodeDetails from '.';

const exampleLink = 'http://example.com';
const previewUrl = 'http://example.com/audio.mp3';
const mockEpisode: Partial<PodcastEpisode> = {
  trackName: 'Sample Episode',
  description: `Check out this link: ${exampleLink}`,
  previewUrl,
};

describe('PodcastEpisodeDetails', () => {
  it('should display "Episode not found" when no episode data is provided', () => {
    render(<PodcastEpisodeDetails />);

    const notFoundMessage = screen.getByText('Episode not found');
    expect(notFoundMessage).toBeInTheDocument();
  });

  it('should open links in a new window when URLs are present in the description', () => {
    render(<PodcastEpisodeDetails episode={mockEpisode as PodcastEpisode} />);

    const linkElement = screen.getByText(exampleLink);
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('should render the audio element with the correct source URL', () => {
    render(<PodcastEpisodeDetails episode={mockEpisode as PodcastEpisode} />);

    const audioElement = screen.getByRole('audio');
    expect(audioElement).toHaveAttribute('src', previewUrl);
    expect(audioElement).toHaveTextContent(
      'Your browser does not support the audio element.',
    );
  });

  it('should convert line breaks in the episode description to <br> elements', () => {
    const specialCharacterDescription = `Enjoy the episode!\nNew line here.`;
    const mockEpisodeWithSpecialChars: Partial<PodcastEpisode> = {
      ...mockEpisode,
      description: specialCharacterDescription,
    };

    const { container } = render(
      <PodcastEpisodeDetails
        episode={mockEpisodeWithSpecialChars as PodcastEpisode}
      />,
    );

    const descriptionElement = container.querySelector('.description');
    expect(descriptionElement).not.toBeNull();
    expect(descriptionElement?.innerHTML).toContain(
      `Enjoy the episode!<br>New line here.`,
    );
  });
});
