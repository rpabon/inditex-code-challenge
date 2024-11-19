import { useState, useCallback } from 'react';

const ALL_ORIGINS_URL = 'https://api.allorigins.win/get';

export const useFetchAllOrigins = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUrl = useCallback(async <T>(url: string): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const allOriginsUrl = new URL(ALL_ORIGINS_URL);
      allOriginsUrl.searchParams.append('url', url);
      const response = await fetch(allOriginsUrl.toString());

      if (!response.ok) {
        const error = new Error('Network response was not ok');
        setError(error);
        return null;
      }

      const data: { contents: T } = await response.json();
      return data.contents;
    } catch (e) {
      const error =
        e instanceof Error ? e : new Error('An unknown error occurred');
      setError(error);

      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchUrl,
    loading,
    error,
  };
};
