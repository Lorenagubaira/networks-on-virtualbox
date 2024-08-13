# `01` Importing a Virtual Machine

## 01 Download the OVA file

 > [Download here](https://storage.googleapis.com/breathecode/virtualbox/deb.ova).

## 02 Open the OVA file

The OVA file contains the virtual hard disk with the operating system ready to run and a set of recommended configurations for running the machine. Double-clicking on it will bring up the wizard in VirtualBox to confirm the import of the machine.

If for some reason VirtualBox does not run when you open the OVA file, you can import it manually from the `File>Import virtualized service...` menu on the VirtualBox window. There you will see a dialog box where you can tell VirtualBox which OVA file you want to import.

### Import OVA File

![Importación de archivo ova en VirtualBox](../../.learn/assets/vbox-import-select-ova.png)

### Confirm settings

![Confirmación de configuración de maquina virtual importada](../../.learn/assets/vbox-import-confirm.png)

## 03 Run your new machine

Once the import process is finished, you are ready to boot your new Debian machine. The machine comes already configured with passwords, but as a good student of cybersecurity, you know that you should change them to a more secure one.

> **Login info **<br>
**user**: debian<br>
**Password**: 123456<br>
**RootPassword**: 123456
