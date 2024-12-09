const express = require("express");
const path = require("path");
const cors = require("cors");

const hostApp = express();
const HOST_PORT = 3000;
const hostDistPath = path.join(__dirname, "..", "host", "dist");
hostApp.use(cors());
hostApp.use(express.static(hostDistPath));
hostApp.get("*", (req, res) => {
  res.sendFile(path.join(hostDistPath, "index.html"));
});
hostApp.listen(HOST_PORT, () => {
  console.log(`Host app is running on http://localhost:${HOST_PORT}`);
});

const remoteApp = express();
const REMOTE_PORT = 3001;
const remoteDistPath = path.join(
  __dirname,
  "..",
  "remotes",
  "podcast-episode-details",
  "dist"
);
remoteApp.use(cors());
remoteApp.use(express.static(remoteDistPath));
remoteApp.get("*", (req, res) => {
  res.sendFile(path.join(remoteDistPath, "index.html"));
});
remoteApp.listen(REMOTE_PORT, () => {
  console.log(`Remote app is running on http://localhost:${REMOTE_PORT}`);
});
