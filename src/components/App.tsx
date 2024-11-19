import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PodcastList } from '@/pages/PodcastList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PodcastList />} />
      </Routes>
    </Router>
  );
};

export default App;
