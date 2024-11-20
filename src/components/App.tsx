import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PodcastList } from '@/pages/PodcastList';
import { PodcastDetail } from '@/components/PodcastDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
