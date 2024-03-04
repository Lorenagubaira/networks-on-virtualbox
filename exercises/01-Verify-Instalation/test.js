test('Output should not be undefined',async () => {
  require('dotenv').config();
  //const gettingMachineStatus = require("./app")
  //let output=await gettingMachineStatus()
  let data;
  if (fs.existsSync('vminfo.json')) {
    data = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
  } else {
    throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
  }
  expect(data).not.toBe(undefined);
})