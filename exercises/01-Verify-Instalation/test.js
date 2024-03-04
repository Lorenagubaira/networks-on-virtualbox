const fetch = require('node-fetch');
const fs = require('fs');

test('Output should be a valid JSON object', async () => {
  let data;
  if (fs.existsSync('vminfo.json')) {
    data = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
  } else {
    throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
  }
  console.log(data);
  expect(typeof data).toBe('object');
  expect(data).not.toBe(null);
});