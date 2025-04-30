const express = require('express');
const app = express();

app.use(express.json());

const submittedData = [];

app.post('/submit', (req, res) => {
  const { name, age } = req.body;

  const exists = submittedData.some(item => item.name === name && item.age === age);

  if (exists) {
    return res.status(400).json({ message: 'Duplicate data!' });
  }

  submittedData.push({ name, age });
  res.status(200).json({ message: 'Data stored successfully.' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
