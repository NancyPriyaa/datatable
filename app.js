const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");

const app = express();
const port = 5001; 

app.use(cors());

const db = new sqlite3.Database('file_info.db'); 

app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM files', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(rows);
      }
    });
  });
  

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
