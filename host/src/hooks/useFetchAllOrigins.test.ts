import { renderHook } from '@testing-library/react';
import { useLoading } from '@/hooks/useLoading';
import {
  ALL_ORIGINS_URL,
  useFetchAllOrigins,
} from '@/hooks/useFetchAllOrigins';

jest.mock('@/hooks/useLoading');

describe('useFetchAllOrigins', () => {
  let consoleErrorSpy: jest.SpyInstance;
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should handle CORS issues by using the All Origins service correctly', async () => {
    const mockUrl = 'https://example.com/api';
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        contents: JSON.stringify({ data: 'test' }),
      }),
    };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);
    (useLoading as jest.Mock).mockReturnValue({ setLoading: jest.fn() });

    const { result } = renderHook(() => useFetchAllOrigins());
    const fetchUrl = result.current;

    const data = await fetchUrl(mockUrl);

    expect(global.fetch).toHaveBeenCalledWith(
      `${ALL_ORIGINS_URL}?url=${encodeURIComponent(mockUrl)}`,
    );
    expect(data).toEqual({ data: 'test' });
  });

  it('should handle network errors and return null', async () => {
    const mockUrl = 'https://example.com/api';
    const networkError = new Error('Network error');
    (global.fetch as jest.Mock).mockRejectedValue(networkError);

    const { result } = renderHook(() => useFetchAllOrigins());
    const fetchUrl = result.current;

    const data = await fetchUrl(mockUrl);

    expect(global.fetch).toHaveBeenCalledWith(
      `${ALL_ORIGINS_URL}?url=${encodeURIComponent(mockUrl)}`,
    );
    expect(data).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Network error' }),
    );
  });

  it('should set loading state to true at the beginning of the fetch operation', async () => {
    const mockSetLoading = jest.fn();
    (useLoading as jest.Mock).mockReturnValue({ setLoading: mockSetLoading });

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        contents: JSON.stringify({ data: 'test' }),
      }),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useFetchAllOrigins());
    const fetchUrl = result.current;

    await fetchUrl('https://example.com/api');

    expect(mockSetLoading).toHaveBeenCalledWith(true);
    expect(mockSetLoading).toHaveBeenCalledTimes(2);
    expect(mockSetLoading.mock.calls[0][0]).toBe(true);
  });
});
