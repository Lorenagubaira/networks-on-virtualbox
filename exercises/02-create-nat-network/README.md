# `01` VirtualBox installation

In this practice you will learn how to create a virtual machine with VirtualBox, and then install an operating system on it. These machines will be your laboratory throughout the course, in them you will be able to explore safely without affecting your machine's own operating system. The worst that can happen is that you will have to install the virtual machine again, but your computer will always be safe.

## Installation on Windows

Visita la web oficial de [VirtualBox](https://www.virtualbox.org/wiki/Downloads) para obtener el instalador para windows. La instalación es tan sencilla como la de cualquier otra aplicación de Windows. Cuando ejecutes el instalador verás un asistente que te guiará a través del proceso.

### 1. Run the installer

![Running of the installer](../../.learn/assets/vbinstall1.png)

### 2. Select all the features

![Select all the features](../../.learn/assets/vbinstall2.png)

### 3. Move on with the buttons "Yes" or "Next" until finish

![Installing VirtualBox](../../.learn/assets/vbinstall3.png)

## Installation on GNU/Linux

In the case of GNU/Linux systems we have prepared 2 scripts that will help you with the installation https://www.virtualbox.org/wiki/Linux_Downloads#Debian-basedLinuxdistributions

### Debian based distributions (deb)

```bash
wget https://raw.githubusercontent.com/4GeeksAcademy/cybersecurity-scripts/main/installing-virtualbox-linux-debian/install-virtualbox.sh -O - | sudo sh
```

### RedHat based distributions(rpm)

First you need to install the key for rpm running this command:

```bash
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | rpm --import -
```
Next you have to install one of this repos according your distribution

- Users of Oracle Linux / RHEL can add ​the Oracle Linux [repo file](https://download.virtualbox.org/virtualbox/rpm/el/virtualbox.repo) to /etc/yum.repos.d/.
- Users of Fedora can add ​the Fedora [repo file](https://download.virtualbox.org/virtualbox/rpm/fedora/virtualbox.repo) to /etc/yum.repos.d/.
- Users of openSUSE can add ​the openSUSE [repo file](https://download.virtualbox.org/virtualbox/rpm/opensuse/virtualbox.repo) to /etc/zypp/repos.d/.

## Instalación en macOS con procesadores Intel

[Descarga aquí](https://download.virtualbox.org/virtualbox/7.0.14/VirtualBox-7.0.14-161095-OSX.dmg) el instalador para tu sistema operativo.

## Todas las opciones de instalacion

Visita la web oficial de las descargas de VirtualBox
https://www.virtualbox.org/wiki/Downloads