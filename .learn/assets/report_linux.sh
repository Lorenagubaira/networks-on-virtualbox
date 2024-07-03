#!/bin/bash

# Check if VBoxManage command exists
if ! command -v VBoxManage &> /dev/null; then
    echo "VBoxManage command not found. Please install VirtualBox or ensure VBoxManage is in your PATH." >> linux_report.txt
    exit 1
fi

# Process each line of VBoxManage list vms output
while read -r line; do
  # Extract the name of the virtual machine from the line
  vm_name=$(echo $line | awk '{print $1}')
  vm_name=${vm_name//\"/}

  # Execute the command for the virtual machine and append the output to linux_report.txt
  VBoxManage showvminfo "$vm_name" --machinereadable >> linux_report.txt
  echo "---------" >> linux_report.txt

  # echo "Información de la máquina virtual $vm_name:"

done < <(VBoxManage list vms)
