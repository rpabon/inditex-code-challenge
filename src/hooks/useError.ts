import { useContext } from 'react';
import { ErrorContext } from '@/store/ErrorContext';
import { ErrorContextType } from '@/store/ErrorContext/ErrorContext.types';

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);

  if (context === undefined) {
    throw new Error('useError must be used within an ErrorProvider');
  }

  return context;
};
