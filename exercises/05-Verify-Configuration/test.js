describe("Checking NAT network interfaces", () => {
  var data
  var winInterface
  var debianInterface
  
  beforeAll(() => {
    let fs = require("fs")
    require('dotenv').config();
    if (fs.existsSync('vminfo.json')) {
      data = JSON.parse(fs.readFileSync('vminfo.json', 'utf8'));
    } else {
      throw new Error('vminfo.json not found. Please run the BAT file on your local machine.');
    }
    let winMachine = data.find(vm => /^Windows 10*/.test(vm.ostype))
    winInterface=Object.values(winMachine.nics).find(nic=>nic.nic=="natnetwork")
    let debianMachine = data.find(vm => /^Debian*/.test(vm.ostype))
    debianInterface=Object.values(debianMachine.nics).find(nic=>nic.nic=="natnetwork")
  });

  test('The Windows machine must have an NatNetwork interface', async () => {
    expect(winInterface).toBeDefined();
  })
  test('The Windows machine\'s NatNetwork interface connection must be on', async () => {
    expect(winInterface.cableconnected).toBe("on");
  })
  test('The Debian machine must have an NatNetwork interface', async () => {
    expect(debianInterface).toBeDefined();
  })
  test('The Debian machine\'s NatNetwork interface connection must be on', async () => {
    expect(debianInterface.cableconnected).toBe("on");
  })
  test("Both interfaces must be on the same Nat Network", async ()=>{
    expect(debianInterface["nat-network"]).toBe(winInterface["nat-network"])
  })

})