import { useCallback } from 'react';
import { useLoading } from '@/hooks/useLoading';

export const ALL_ORIGINS_URL = 'https://api.allorigins.win/get';

export const useFetchAllOrigins = () => {
  const { setLoading } = useLoading();

  const handleError = useCallback((error: unknown) => {
    const errorInstance =
      error instanceof Error ? error : new Error(String(error));
    console.error(errorInstance);
    return null;
  }, []);

  const fetchUrl = useCallback(
    async <T>(url: string): Promise<T | null> => {
      setLoading(true);

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
          return handleError(parseError);
        }
      } catch (error) {
        return handleError(error);
      } finally {
        setLoading(false);
      }
    },
    [handleError],
  );

  return fetchUrl;
};
