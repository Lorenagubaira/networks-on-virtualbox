test('Output should not be undefined', async () => {
  let fs = require("fs")
  require('dotenv').config();
  let vms;
  if (fs.existsSync('vminfo.json')) {
    vms = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
  } else {
    throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
  }
  let winMachine = vms.find(vm => /^Windows 10*/.test(vm.ostype))
  expect(winMachine).toBeDefined();
  expect(winMachine.cpus).toBe("2");
  expect(winMachine.memory).toBe("2048");
})