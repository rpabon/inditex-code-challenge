// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import mockPodcastFeed from '@/mocks/podcast-feed.mock';
// import { usePodcastListLogic } from '../../../../host/src/routes/PodcastList/usePodcastListLogic';
// import PodcastList from '.';

// jest.disableAutomock();
// jest.mock('./usePodcastListLogic');

// jest.mock('@/hooks/usePodcastDetails', () => ({
//   usePodcastDetails: () => ({ fetchPodcastDetails: jest.fn() }),
// }));

// jest.mock('@/components/PodcastFilter/usePodcastFilterLogic', () => ({
//   usePodcastFilterLogic: () => ({
//     filterText: '',
//     handleFilterChange: jest.fn(),
//   }),
// }));

// const mockNavigateToPodcast = jest.fn();
// jest.mock('@/components/PodcastCard/usePodcastCard', () => ({
//   usePodcastCard: () => mockNavigateToPodcast,
// }));

// describe('PodcastList', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should render the correct number of podcast cards based on filtered podcasts', () => {
//     // Get the first two podcasts from the mock feed as the filtered podcasts
//     const mockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 2);
//     (usePodcastListLogic as jest.Mock).mockReturnValue({
//       podcastFeed: mockPodcastFeed,
//       filteredPodcasts: mockFilteredPodcasts,
//       onFilterChange: jest.fn(),
//     });

//     render(<PodcastList />);

//     const podcastCards = screen.getAllByTestId('podcast-card');
//     expect(podcastCards).toHaveLength(2);

//     const filteredPodcastCount = screen.getByTestId('podcast-filter__count');
//     expect(filteredPodcastCount).toHaveTextContent('2');
//   });

//   it('should update the filter count when the filtered podcasts change', async () => {
//     const mockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 2);
//     (usePodcastListLogic as jest.Mock).mockReturnValue({
//       podcastFeed: mockPodcastFeed,
//       filteredPodcasts: mockFilteredPodcasts,
//       onFilterChange: jest.fn(),
//     });

//     const { rerender } = render(<PodcastList />);

//     let filteredPodcastCount = screen.getByTestId('podcast-filter__count');
//     expect(filteredPodcastCount).toHaveTextContent('2');

//     const updatedMockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 3);
//     (usePodcastListLogic as jest.Mock).mockReturnValue({
//       podcastFeed: mockPodcastFeed,
//       filteredPodcasts: updatedMockFilteredPodcasts,
//       onFilterChange: jest.fn(),
//     });

//     rerender(<PodcastList />);

//     await waitFor(() => {
//       const filteredPodcastCount = screen.getByTestId('podcast-filter__count');
//       expect(filteredPodcastCount).toHaveTextContent('3');
//     });
//   });

//   it('should navigate to the corresponding podcast episode on podcast card click', () => {
//     const mockFilteredPodcasts = mockPodcastFeed.feed?.entry.slice(0, 2) || [];
//     (usePodcastListLogic as jest.Mock).mockReturnValue({
//       podcastFeed: { feed: { entry: mockFilteredPodcasts } },
//       filteredPodcasts: mockFilteredPodcasts,
//       onFilterChange: jest.fn(),
//     });

//     render(<PodcastList />);

//     // Find the first podcast card by its title
//     const firstPodcastTitle = mockFilteredPodcasts[0]['im:name'].label;
//     const firstPodcastCard = screen.getByText(firstPodcastTitle);
//     fireEvent.click(firstPodcastCard);

//     const expectedPodcastId = mockFilteredPodcasts[0].id.attributes['im:id'];
//     expect(mockNavigateToPodcast).toHaveBeenCalledWith(expectedPodcastId);
//   });
// });
