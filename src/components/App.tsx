import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PodcastList } from '@/pages/PodcastList';
import { PodcastDetails } from '@/components/PodcastDetails';
import { PodcastDetailOverview } from './PodcastEpisodeOverview';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<PodcastDetailOverview />}
        />
      </Routes>
    </Router>
  );
};

export default App;
