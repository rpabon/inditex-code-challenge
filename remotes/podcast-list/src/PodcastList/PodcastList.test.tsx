import { render, screen, fireEvent } from '@testing-library/react';
import mockPodcastFeed from '@/mocks/podcast-feed.mock';
import PodcastList from '.';

jest.disableAutomock();

describe('PodcastList', () => {
  const podcastList = mockPodcastFeed.feed?.entry || [];
  const mockOnPodcastClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the correct number of podcast cards based on filtered podcasts', () => {
    const mockFilteredPodcasts = podcastList.slice(0, 2);

    render(
      <PodcastList
        podcastList={mockFilteredPodcasts}
        onPodcastClick={mockOnPodcastClick}
      />,
    );

    const podcastCards = screen.getAllByTestId('podcast-card');
    expect(podcastCards).toHaveLength(2);

    const filteredPodcastCount = screen.getByTestId('podcast-filter__count');
    expect(filteredPodcastCount).toHaveTextContent('2');
  });

  it('should update the filter count when the filtered podcasts change', () => {
    const { rerender } = render(
      <PodcastList
        podcastList={podcastList.slice(0, 2)}
        onPodcastClick={mockOnPodcastClick}
      />,
    );

    let filteredPodcastCount = screen.getByTestId('podcast-filter__count');
    expect(filteredPodcastCount).toHaveTextContent('2');

    rerender(
      <PodcastList
        podcastList={podcastList.slice(0, 3)}
        onPodcastClick={mockOnPodcastClick}
      />,
    );

    filteredPodcastCount = screen.getByTestId('podcast-filter__count');
    expect(filteredPodcastCount).toHaveTextContent('3');
  });

  it('should navigate to the corresponding podcast episode on podcast card click', () => {
    const mockFilteredPodcasts = podcastList.slice(0, 2);

    render(
      <PodcastList
        podcastList={mockFilteredPodcasts}
        onPodcastClick={mockOnPodcastClick}
      />,
    );

    // Find the first podcast card by its title
    const firstPodcastTitle = mockFilteredPodcasts[0]['im:name'].label;
    const firstPodcastCard = screen.getByText(firstPodcastTitle);
    fireEvent.click(firstPodcastCard);

    const expectedPodcastId = mockFilteredPodcasts[0].id.attributes['im:id'];
    expect(mockOnPodcastClick).toHaveBeenCalledWith(expectedPodcastId);
  });
});
