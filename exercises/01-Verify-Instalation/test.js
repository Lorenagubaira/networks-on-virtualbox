describe("Checking Windows 10 vm", () => {
  var data
  var winMachine
  
  beforeAll(() => {
    let fs = require("fs")
    require('dotenv').config();
    if (fs.existsSync('vminfo.json')) {
      data = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
    } else {
      throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
    }
    winMachine = data.find(vm => /^Windows 10*/.test(vm.ostype))
  });

  test('The windows machine must be created with Windows 10', async () => {
    expect(winMachine).toBeDefined();
  })
  test('The windows machine must have at least 2 GB of memory', async () => {
    expect(parseInt(winMachine.memory)).toBeGreaterThanOrEqual(2048);
  })
  test('The windows machine must have at least 2 cpus', async () => {
    expect(parseInt(winMachine.cpus)).toBeGreaterThanOrEqual(2);
  })
})