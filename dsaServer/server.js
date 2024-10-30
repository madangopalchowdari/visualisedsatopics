const express = require('express');
const cors = require('cors');
const queueHandler = require('./handlers/queueHandler');
const arrayHandler = require('./handlers/arrayHandler');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route Handlers
app.use('/api/queue', queueHandler);
app.use('/api/array', arrayHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
