# Importando una maquina virtual

## 01 Download the OVA file

 > [Download here](https://drive.google.com/file/d/1MiV1F_W9TWsP0saKF_IMTahSs4bwrFe7/view?usp=drive_link).

## 02 Open the OVA file

The OVA file contains the virtual hard disk with the operating system ready to run and a set of recommended configurations for running the machine. Double-clicking on it will bring up the wizard in VirtualBox to confirm the import of the machine.

If for some reason VirtualBox does not run when you open the OVA file, you can import it manually from the `File>Import virtualized service...` menu on the VirtualBox window. There you will see a dialog box where you can tell VirtualBox which OVA file you want to import.

### Import OVA File

![Importación de archivo ova en VirtualBox](../../.learn/assets/vbox-import-select-ova.png)

### Confirm settings

![Confirmación de configuración de maquina virtual importada](../../.learn/assets/vbox-import-confirm.png)

## 03 Ejecuta tu nueva máquina virtual

Una vez termine el proceso de importación, estas listo para arrancar tu nueva máquina Debian. La máquina ya viene configurada con claves de acceso, pero como buen estudiante de ciberseguridad, sabes que deberías cambiarlas por alguna más segura.

> **Informacion de acceso la máquina Debian**<br>
**Usuario**: deb<br>
**Clave**: 123456<br>
**ClaveRoot**: 123456
