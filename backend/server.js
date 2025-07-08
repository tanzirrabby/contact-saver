const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let contacts = [];

app.get('/contacts', (req, res) => {
  res.json(contacts);
});

app.post('/contacts', (req, res) => {
  const { name, phone } = req.body;
  if (name && phone) {
    contacts.push({ name, phone });
    res.status(201).json({ message: 'Contact saved!' });
  } else {
    res.status(400).json({ error: 'Name and phone required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
