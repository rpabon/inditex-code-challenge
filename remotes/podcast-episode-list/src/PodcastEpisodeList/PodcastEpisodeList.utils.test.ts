import { formatDuration } from './PodcastEpisodeList.utils';

describe('Podcast episode list utils', () => {
  it('should correctly format the duration', () => {
    expect(formatDuration(0)).toBe('00:00');
    expect(formatDuration(1000)).toBe('00:01');
    expect(formatDuration(60000)).toBe('01:00');
    expect(formatDuration(3600000)).toBe('1:00:00');
    expect(formatDuration(3661000)).toBe('1:01:01');
    expect(formatDuration(86399000)).toBe('23:59:59');

    // Edge case
    expect(formatDuration(-1000)).toBe('00:00');
  });
});
