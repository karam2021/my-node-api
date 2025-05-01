const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const data = []; // In-memory data store

app.get('/', (req, res) => {
  res.send('Custom API is working!');
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.post('/data', (req, res) => {
  const item = req.body;
  data.push(item);
  res.status(201).json({ message: 'Item added', item });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
