const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    console.log("Receiving your data!");
  const jsonContent = JSON.stringify(req.body);
  fs.writeFileSync('vminfo.json', jsonContent, 'utf8');
  res.send('JSON saved successfully');
});

app.get('/', (req, res) => {
    console.log("Testing VMInfo");
  if (fs.existsSync('vminfo.json')) {
    const jsonData = fs.readFileSync('vminfo.json', 'utf8');
    res.send(jsonData);
  } else {
    res.status(404).send('JSON not found');
  }
});

app.listen(3002, () => {
    console.log('Server running at http://localhost:3002');
  });