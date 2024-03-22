# `04` Valida tu instalación

## 1. CURL

Es una herramienta que permite hacer peticiones a una página web desde la terminal de tu sistema, también puede realizar otras funciones, pero ésta es la que nos ocupa en este caso.

Para windows debes descargar la herramienta de [este enlace](https://curl.se/windows/) y luego instalarla antes de continuar al siguiente paso.

## 2. Habilitar el puerto público

Para que learnpack pueda recibir la información que se enviará desde tu maquina, es necesario habilitar el acceso público del puerto, que por seguridad viene privado por defecto.

Para ello selecciona la pestaña "Puertos" en el panel inferior de codespace, ahi verás los puertos que se están utilizando. Necesitas publicar el puerto `3001` y para ello has click con el botón derecho del mouse en el puerto, ve al menú `Visibilidad del puerto` y selecciona la opción `Público`

![Puerto público](../../.learn/assets/public-ports.png)

## 3. Script de validación

Es un script que hemos desarrollado a la medida de esta práctica. Se encarga de tomar la información de VirtualBox y enviarla para hacer la validación. Primero debes descargar el script y ejecutarlo el te solicitará una URL que puedes encontrar en el archivo `url.txt` que se encuentra en esta práctica.

[Descarga aquí el script de validación para Windows.](https://github.com/4GeeksAcademy/installing-windows-on-virtual-machine/blob/master/.learn/assets/sendData.zip)
Recuerda extraer el archivo antes de ejecutarlo.

![Script Windows](../../.learn/assets/script-win.png)

## 4. Ejecuta la prueba

Una vez ejecutado el script con éxito, podrás ejecutar la prueba para validar tu instalación de Windows en VirtualBox.

![Script Windows](../../.learn/assets/script-test.png)

## 5. ¡Listo!

Si lograste pasar las pruebas, ya has instalado una maquina virtual con windows. Este será tu lugar seguro para hacer experimentos y pruebas durante el curso.

Si tienes algún problema no dudes en recurrir a un mentor o a los demás canales de apoyo que te ofrece 4Geeks.
