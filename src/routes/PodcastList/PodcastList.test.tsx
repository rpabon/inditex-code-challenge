import { render, screen, fireEvent } from '@testing-library/react';
import mockPodcastFeed from '@/mocks/podcast-feed.mock';
import { usePodcastListLogic } from './usePodcastListLogic';
import { PodcastList } from '.';

jest.disableAutomock();
jest.mock('./usePodcastListLogic');

jest.mock('@/hooks/usePodcastDetails', () => ({
  usePodcastDetails: () => ({ fetchPodcastDetails: jest.fn() }),
}));

jest.mock('@/components/PodcastFilter', () => ({
  PodcastFilter: () => <div data-testid="podcast-filter" />,
}));
const mockNavigateToPodcast = jest.fn();
jest.mock('@/components/PodcastCard/usePodcastCard', () => ({
  usePodcastCard: () => mockNavigateToPodcast,
}));

describe('PodcastList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the correct number of podcast cards based on filtered podcasts', () => {
    // Get the first two podcasts from the mock feed as the filtered podcasts
    const mockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 2);
    (usePodcastListLogic as jest.Mock).mockReturnValue({
      podcastFeed: mockPodcastFeed,
      filteredPodcasts: mockFilteredPodcasts,
      onFilterChange: jest.fn(),
    });

    render(<PodcastList />);

    const podcastCards = screen.getAllByTestId('podcast-card');
    expect(podcastCards).toHaveLength(2);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should update the filter count when the filtered podcasts change', () => {
    const mockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 2);
    (usePodcastListLogic as jest.Mock).mockReturnValue({
      podcastFeed: mockPodcastFeed,
      filteredPodcasts: mockFilteredPodcasts,
      onFilterChange: jest.fn(),
    });

    render(<PodcastList />);

    expect(screen.getByText('2')).toBeInTheDocument();

    const updatedMockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 3);
    (usePodcastListLogic as jest.Mock).mockReturnValue({
      podcastFeed: mockPodcastFeed,
      filteredPodcasts: updatedMockFilteredPodcasts,
      onFilterChange: jest.fn(),
    });

    render(<PodcastList />);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should navigate to the corresponding podcast episode on podcast card click', () => {
    const mockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 2) || [];
    (usePodcastListLogic as jest.Mock).mockReturnValue({
      podcastFeed: { feed: { entry: mockFilteredPodcasts } },
      filteredPodcasts: mockFilteredPodcasts,
      onFilterChange: jest.fn(),
    });

    render(<PodcastList />);

    // Find the first podcast card by its title
    const firstPodcastTitle = mockFilteredPodcasts[0]['im:name'].label;
    const firstPodcastCard = screen.getByText(firstPodcastTitle);
    fireEvent.click(firstPodcastCard);

    const expectedPodcastId = mockFilteredPodcasts[0].id.attributes['im:id'];
    expect(mockNavigateToPodcast).toHaveBeenCalledWith(expectedPodcastId);
  });
});
