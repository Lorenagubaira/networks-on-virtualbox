


describe("Checking NAT network interfaces", () => {
  var wdata
  var ldata
  var winInterface
  var debianInterface
  
  beforeAll(() => {
    let fs = require("fs")

    const _linux = 'linux_report.txt';
    if (fs.existsSync(_linux)) {
      ldata = JSON.parse(fs.readFileSync(_linux, 'utf8'));
    } else {
      throw new Error(`${_linux} not found.`);
    }

    const _windows = 'windows_report.txt';
    if (fs.existsSync(_linux)) {
      wdata = JSON.parse(fs.readFileSync(_linux, 'utf8'));
    } else {
      throw new Error(`${_windows} not found. Please run the BAT file on the windows machine and past it on the rood of this LearnPack exercises next to the learn.json file`);
    }

    let winMachine = wdata.find(vm => /^Windows 10*/.test(vm.ostype))
    winInterface=Object.values(winMachine.nics).find(nic=>nic.nic=="natnetwork")
    let debianMachine = ldata.find(vm => /^Debian*/.test(vm.ostype))
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