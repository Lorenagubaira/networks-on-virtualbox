test('Output should not be undefined',async () => {
  let fs=require("fs")
  require('dotenv').config();
  let data;
  if (fs.existsSync('vminfo.json')) {
    data = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
  } else {
    throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
  }
  expect(data).not.toBe(undefined);
})