# Instalación de máquinas virtuales

En ésta práctica aprenderás a crear una maquina virtual con VirtualBox, y luego a instalar un sistema operativo en ella. Estas maquinas serán tu laboratorio a lo largo del curso, en ellas podrás explorar de manera segura sin afectar el propio sistema operativo de tu máquina. Lo peor que puede pasar es que tengas que instalar la maquina virtual de nuevo, pero tu computadora estará a salvo.

## Instalación en Windows

Visita la web oficial de [VirtualBox](https://www.virtualbox.org/wiki/Downloads) para obtener el instalador para windows. La instalación es tan fácil como cualquier otra aplicación de windows. Al ejecutar el instalador te aparecerá un asistente que te guiará durante el proceso.

### 1. Crea una nueva máquina Virtual

Al abrir VirtualBox podrás ver el icono de "Añadir" marcado con una cruz verde

![Inicio de instalador](../../.learn/assets/createvm0.png)

### 2. Instala todas las características

![Inicio de instalador](../../.learn/assets/vbinstall2.png)

3. Avanza con el boton "Yes" o "Next" hasta finalizar

![Inicio de instalador](../../.learn/assets/vbinstall3.png)


## Instalación en GNU/Linux

En el caso de sistemas GNU/Linux hemos preparado 2 scripts que te van a ayudar con la instalacion 
https://www.virtualbox.org/wiki/Linux_Downloads#Debian-basedLinuxdistributions

### Distribuciones basadas en Debian (deb)

Para instalar VirtualBox solo tienes que ejecutar el siguiente comando

```bash
wget https://raw.githubusercontent.com/4GeeksAcademy/cybersecurity-scripts/main/installing-virtualbox-linux-debian/install-virtualbox.sh -O - | sudo sh
```

### Distribuciones basadas en RedHat (rpm)

First you need to install the key for rpm running this script:

```bash
wget https://raw.githubusercontent.com/4GeeksAcademy/cybersecurity-scripts/main/installing-virtualbox-linux-debian/install-virtualbox.sh -O - | sudo sh
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