import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SinglePodcastOverview } from '.';

jest.mock('@/components/PodcastDetailSidebar', () => ({
  PodcastDetailSidebar: ({ podcastId }: { podcastId: string | undefined }) => (
    <div data-testid="podcast-detail-sidebar">Mocked Sidebar: {podcastId}</div>
  ),
}));

describe('SinglePodcastOverview', () => {});
