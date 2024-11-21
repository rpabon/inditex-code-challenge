import { useState, useCallback } from 'react';
import { useLoading } from './useLoading';

const ALL_ORIGINS_URL = 'https://api.allorigins.win/get';

export const useFetchAllOrigins = () => {
  const [error, setError] = useState<Error | null>(null);
  const { setLoading } = useLoading();

  const handleError = useCallback((message: string) => {
    const error = new Error(message);
    setError(error);
    return null;
  }, []);

  const fetchUrl = useCallback(
    async <T>(url: string): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        const allOriginsUrl = new URL(ALL_ORIGINS_URL);
        allOriginsUrl.searchParams.append('url', url);
        const response = await fetch(allOriginsUrl.toString());

        if (!response.ok) {
          return handleError('Network response was not ok');
        }

        const data: { contents: string } = await response.json();

        try {
          const parsedContents = JSON.parse(data.contents) as T;
          return parsedContents;
        } catch (parseError) {
          return handleError('Failed to parse JSON contents');
        }
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : 'An unknown error occurred';
        return handleError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [handleError],
  );

  return {
    fetchUrl,
    error,
  };
};
