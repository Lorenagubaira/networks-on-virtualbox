# `02` Configuración de interfaces 

A continuación debes agregar las interfaces a las máquinas virtuales y asignarles la red NAT que acabas de crear en el paso anterior.

En la ventana de configuración de cada máquina, podrás ver la izquierda la opción de `"Red"`. Ahi encontrarás las interfaces (también llamados `Adaptadores`) que puedes tener en tu máquina y la pestaña de configuración que corresponde a cada una.

En la opción `Conectado a:` debes escoger `Red NAT` para luego especificar a cuál red formará parte esta máquina.

La configuración debe quedar de la siguiente manera:
![Configuración de red NAT](../../.learn/assets/vbox-vm-nat-network.png)

> Recuerda debes hacer lo mismo para ambas máquinas
