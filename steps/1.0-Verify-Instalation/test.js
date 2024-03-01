const rewire = require('rewire');
  
test('Output should not be undefined',async () => {
  //const gettingMachineStatus = require("./app")
  //let output=await gettingMachineStatus()
  let resp=await fetch("localhost:3001/")
  let data=await resp.json()
  console.log(data)
  expect(data).not.toBe(undefined);
})