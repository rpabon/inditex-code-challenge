import { createContext } from 'react';
import { LoadingContextType } from './LoadingContext.types';

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined,
);
