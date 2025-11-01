const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚗 RideTrack backend is live — CI/CD pipeline initialized.');
});

app.listen(PORT, () => {
  console.log(`RideTrack server running on port ${PORT}`);
});

