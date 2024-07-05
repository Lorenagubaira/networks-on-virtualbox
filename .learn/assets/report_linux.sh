#!/bin/bash

# Ruta absoluta de VBoxManage (ejemplo en Windows)
VBoxManage_path="C:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe"

# Verificamos si VBoxManage está instalado y disponible
if ! [ -x "$VBoxManage_path" ]; then
    echo "VBoxManage no está instalado o no se encontró en la ubicación especificada."
    exit 1
fi

# Archivo de reporte
report_file="linux_report.txt"

echo "Virtual Machine Information" > "$report_file"
echo "=========================" >> "$report_file"
echo "" >> "$report_file"

# Ejecutamos VBoxManage list vms para obtener la lista de máquinas virtuales
echo "Ejecutando VBoxManage list vms..." >> "$report_file"
"$VBoxManage_path" list vms >> "$report_file"
echo "" >> "$report_file"

# Iteramos sobre cada línea de la salida de VBoxManage list vms
while IFS= read -r line; do
    # Extraemos el nombre de la máquina virtual de la línea
    vm_name=$(echo "$line" | awk '{print $1}')
    vm_name=${vm_name//\"/}

    # Ejecutamos VBoxManage showvminfo para obtener información detallada de la máquina virtual
    echo "VM Name: $vm_name" >> "$report_file"
    echo "---------" >> "$report_file"
    "$VBoxManage_path" showvminfo "$vm_name" --machinereadable >> "$report_file"
    echo "" >> "$report_file"

done < <("$VBoxManage_path" list vms)

echo "Reporte generado exitosamente: $report_file"

