/**
 * NO TOQUES ESTE CÓDIGO
 */



async function gettingMachineStatus(){
  let resp=await fetch("localhost:3001/")
  let data=await resp.json()
  console.log(data)
}


gettingMachineStatus()

exports.gettingMachineStatus=gettingMachineStatus