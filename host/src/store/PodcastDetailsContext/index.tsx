import { createContext } from 'react';
import { PodcastDetailsContextType } from './PodcastDetailsContext.types';

export const PodcastDetailsContext = createContext<
  PodcastDetailsContextType | undefined
>(undefined);
