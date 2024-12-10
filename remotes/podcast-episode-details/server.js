const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const app = express();
const PORT = process.env.PODCAST_EPISODE_DETAILS_PORT || 3003;
const distPath = path.join(__dirname, 'dist');

app.use(cors());
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(
    `Podcast Episode Details App is running on http://localhost:${PORT}`,
  );
});
