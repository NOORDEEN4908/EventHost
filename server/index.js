const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_FILE = './registrations.json';

app.post('/register', (req, res) => {
  const newEntry = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let registrations = [];
    if (!err && data) {
      registrations = JSON.parse(data);
    }

    registrations.push(newEntry);

    fs.writeFile(DATA_FILE, JSON.stringify(registrations, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving data' });
      }
      res.status(200).json({ message: 'Registered successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
