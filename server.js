const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const formidable = require('express-formidable');

dotenv.config()

app.use(cors())
app.use(formidable());
app.use(express.urlencoded({ extended: true }))
//app.use(express.json())
/**
 * @typedef {object} machineInfo
 * @property {string} name
 * @property {string} Encryption
 * @property {string} groups
 * @property {string} ostype
 * @property {string} UUID
 * @property {string} CfgFile
 * @property {string} SnapFldr
 * @property {string} LogFldr
 * @property {string} hardwareuuid
 * @property {string} memory
 * @property {string} pagefusion
 * @property {string} vram
 * @property {string} cpuexecutioncap
 * @property {string} hpet
 * @property {string} cpu-profile
 * @property {string} chipset
 * @property {string} firmware
 * @property {string} cpus
 * @property {string} pae
 * @property {string} longmode
 * @property {string} triplefaultreset
 * @property {string} apic
 * @property {string} x2apic
 * @property {string} nested-hw-virt
 * @property {string} cpuid-portability-level
 * @property {string} bootmenu
 * @property {string} boot1
 * @property {string} boot2
 * @property {string} boot3
 * @property {string} boot4
 * @property {string} acpi
 * @property {string} ioapic
 * @property {string} biosapic
 * @property {string} biossystemtimeoffset
 * @property {string} BIOS NVRAM File
 * @property {string} rtcuseutc
 * @property {string} hwvirtex
 * @property {string} nestedpaging
 * @property {string} largepages
 * @property {string} vtxvpid
 * @property {string} vtxux
 * @property {string} virtvmsavevmload
 * @property {string} iommu
 * @property {string} paravirtprovider
 * @property {string} effparavirtprovider
 * @property {string} VMState
 * @property {string} VMStateChangeTime
 * @property {string} graphicscontroller
 * @property {string} monitorcount
 * @property {string} accelerate3d
 * @property {string} accelerate2dvideo
 * @property {string} teleporterenabled
 * @property {string} teleporterport
 * @property {string} teleporteraddress
 * @property {string} teleporterpassword
 * @property {string} tracing-enabled
 * @property {string} tracing-allow-vm-access
 * @property {string} tracing-config
 * @property {string} autostart-enabled
 * @property {string} autostart-delay
 * @property {string} defaultfrontend
 * @property {string} vmprocpriority
 * @property {string} storagecontrollername0
 * @property {string} storagecontrollertype0
 * @property {string} storagecontrollerinstance0
 * @property {string} storagecontrollermaxportcount0
 * @property {string} storagecontrollerportcount0
 * @property {string} storagecontrollerbootable0
 * @property {string} storagecontrollername1
 * @property {string} storagecontrollertype1
 * @property {string} storagecontrollerinstance1
 * @property {string} storagecontrollermaxportcount1
 * @property {string} storagecontrollerportcount1
 * @property {string} storagecontrollerbootable1
 * @property {string} SATA-0-0
 * @property {string} SATA-ImageUUID-0-0
 * @property {string} SATA-hot-pluggable-0-0
 * @property {string} SATA-nonrotational-0-0
 * @property {string} SATA-discard-0-0
 * @property {string} SATA-1-0
 * @property {string} SATA-ImageUUID-1-0
 * @property {string} SATA-tempeject-1-0
 * @property {string} SATA-IsEjected-1-0
 * @property {string} SATA-hot-pluggable-1-0
 * @property {string} SATA-nonrotational-1-0
 * @property {string} SATA-discard-1-0
 * @property {string} SATA-2-0
 * @property {string} SATA-ImageUUID-2-0
 * @property {string} SATA-hot-pluggable-2-0
 * @property {string} SATA-nonrotational-2-0
 * @property {string} SATA-discard-2-0
 * @property {string} Floppy-0-0
 * @property {string} Floppy-ImageUUID-0-0
 * @property {string} Floppy-nonrotational-0-0
 * @property {string} Floppy-discard-0-0
 * @property {string} Floppy-0-1
 * @property {string} natnet1
 * @property {string} macaddress1
 * @property {string} cableconnected1
 * @property {string} nic1
 * @property {string} nictype1
 * @property {string} nicspeed1
 * @property {string} mtu
 * @property {string} sockSnd
 * @property {string} sockRcv
 * @property {string} tcpWndSnd
 * @property {string} tcpWndRcv
 * @property {string} nic2
 * @property {string} nic3
 * @property {string} nic4
 * @property {string} nic5
 * @property {string} nic6
 * @property {string} nic7
 * @property {string} nic8
 * @property {string} hidpointing
 * @property {string} hidkeyboard
 * @property {string} uart1
 * @property {string} uart2
 * @property {string} uart3
 * @property {string} uart4
 * @property {string} lpt1
 * @property {string} lpt2
 * @property {string} audio
 * @property {string} audio_out
 * @property {string} audio_in
 * @property {string} clipboard
 * @property {string} draganddrop
 * @property {string} vrde
 * @property {string} usb
 * @property {string} ehci
 * @property {string} xhci
 * @property {string} recording_enabled
 * @property {string} recording_screens
 * @property {string} rec_screen_enabled
 * @property {string} rec_screen_id
 * @property {string} rec_screen_video_enabled
 * @property {string} rec_screen_audio_enabled
 * @property {string} rec_screen_dest
 * @property {string} rec_screen_dest_filename
 * @property {string} rec_screen_opts
 * @property {string} rec_screen_video_res_xy
 * @property {string} rec_screen_video_rate_kbps
 * @property {string} rec_screen_video_fps
 * @property {string} SnapshotName
 * @property {string} SnapshotUUID
 * @property {string} CurrentSnapshotName
 * @property {string} CurrentSnapshotUUID
 * @property {string} CurrentSnapshotNode
 * @property {string} GuestMemoryBalloon
 */
/**
 * This function returns an array of objects with the specified type.
 * @param {String} data 
 * @returns {Array.<machineInfo>} An array of objects with the 'name' property.
 */
 
function parseFileData(data){
return data.split("---------")
  .filter(line=>!!line)  
  .map(vmData=>vmData.trim().split("\n")
    .reduce((output,line)=>{
      let [key,value]=line.split(/[=:]/)
      if (!key || !value) return output
      key=key.replaceAll("\"","").replace(/^\s/,"")
      value=value.replace(/\s$/,"").replace(/^\s*/,"")
      value=value.replaceAll("\\\\","\\").replaceAll("\"","")
      output[key]=value
      return output
    },{})
  ).filter(data=>!!data.name)
  
}


var machinesInfo=[]

app.get("/",(req,res)=>{
  res.status(200).send(machinesInfo)
})
app.post("/",(req,res)=>{
  if (req.files.file) {
    const fs = require('fs');
    fs.readFile(req.files.file.name, 'utf-8', (err, data) => {
      if (err) throw err;
      machinesInfo=parseFileData(data)
    });
    res.status(200).send({message:"ok"})
  } else {
    console.log("Didn't receive the file");
    res.status(400).send({message:"Didn't receive the file"})
  }
})

//app.listen(3001,()=>{console.log("Listening")})
app.listen(process.env.HOST_PORT,()=>{console.log("Listening on "+ process.env.HOST_PORT)})