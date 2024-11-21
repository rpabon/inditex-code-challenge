import { useContext } from 'react';
import { LoadingContext } from '@/store/LoadingContext';
import { LoadingContextType } from '@/store/LoadingContext/LoadingContext.types';

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);

  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }

  return context;
};
