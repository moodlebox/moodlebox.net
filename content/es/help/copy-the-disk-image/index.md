---
title: Copiar la imagen de disco a una tarjeta SD
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2025-06-28
description: Para copiar la imagen de disco de MoodleBox a una tarjeta SD, simplemente descarga la utilidad Raspberry Pi Imager y sigue estas instrucciones.
slug: copiar-la-imagen-disco-en-una-tarjeta-sd
categories_weight: 4
categories:
  - Primeros pasos
---
Para copiar el sistema MoodleBox en tu tarjeta microSD, le recomendamos utilizar la utilidad [Raspberry Pi Imager][imager]. Esta aplicación está publicada por la Fundación Raspberry Pi.

### Cómo proceder

1. Descargue la última versión de la utilidad [Raspberry Pi Imager][imager] e instálala en tu ordenador.
1. Inicie la aplicación _Raspberry Pi Imager_.
   {{< figure src="rpi-imager-es.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Haga clic en __Elegir Dispositivo__ en _Dispositivo Raspberry Pi_ y seleccione su modelo de Raspberry Pi.
1. Haga clic en __Elegir SO__ en _Sistema operativo_, esplázate hacia abajo y selecciona el __Other specific purpose OS__.
1. Desplácese hacia abajo, seleccione __MoodleBox__ y elija la última versión de imagen de disco de MoodleBox.
1. Haga clic en  __Elegir almacenamiento__ y selecciona tu tarjeta microSD.
1. Haga clic en __Soguiente__, luego en __Editar ajustes__ en el siguiente cuadro de diálogo y responda _No_ a la pregunta _¿Desea rellenar previamente la contraseña wifi desde el llavero del sistema?_.
1. En la pestaña _General_ de la siguiente ventana, especifique la configuración que desea para su MoodleBox:
   - Marque la casilla __Establecer nombre de anfitrión__ y indique el __nombre de host__, por ejemplo _moodlebox_
   - Marque la casilla __Establecer nombre de usuario y contraseña__ y indique el __nombre de usuario__ y la __contraseña__, por ejemplo _moodlebox_ y _MoodleBox4$_.
   - __No marque__ las demás casillas (_Configurar LAN inalámbrica_ y _Establecer ajustes regionales_).
   {{< figure src="rpi-imager-os-custom-es.png" alt="Configuración de Raspberry Pi Imager" class="centered-image" width="700" >}}
1. En la pestaña _Servicios_, marque la casilla __Activar SSH__ y la opción __Usar autenticación por contraseña__.
1. Haga clic en __Guardar__ y responda __Sí__ a la pregunta __¿Desea aplicar los ajustes de personalización del SO?__
1. Responda __Sí__ cuando se le pregunte si desea continuar, borrando todos los datos de su tarjeta SD.

La aplicación __Raspberry Pi Imager__ descargará y flasheará la última versión de la imagen de disco de MoodleBox en tu tarjeta microSD. Esto puede tardar varios minutos dependiendo de la velocidad de tu conexión a Internet y de la tarjeta SD.

 [imager]: https://www.raspberrypi.com/software/
