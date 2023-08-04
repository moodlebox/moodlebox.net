---
title: Copiar la imagen de disco a una tarjeta SD
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2022-12-29
description: Para copiar la imagen de disco de MoodleBox a una tarjeta SD, simplemente descarga la utilidad Raspberry Pi Imager y sigue estas instrucciones.
slug: copiar-la-imagen-disco-en-una-tarjeta-sd
categories_weight: 4
categories:
  - Primeros pasos
---

Para copiar el sistema MoodleBox en tu tarjeta microSD, le recomendamos utilizar la utilidad [Raspberry Pi Imager][imager]. Esta aplicación está publicada por la Fundación Raspberry Pi.

### Cómo proceder

1. Descargue la última versión de la utilidad [Raspberry Pi Imager][imager] e instálala en tu ordenador.
2. Inicie la aplicación _Raspberry Pi Imager_.
3. Haga clic en __Choose OS__ en Sistema operativo.
4. Desplázate hacia abajo y selecciona el __Otro SO de propósito específico__.
5. Desplácese hacia abajo, seleccione __MoodleBox__ y elija la última versión de imagen de disco de MoodleBox.
6. Haz clic en __Elegir almacenamiento__ y selecciona tu tarjeta microSD.
7. Haga clic en el botón con el icono de engranaje, y especifique la configuración que desea para su MoodleBox (ver captura de pantalla a continuación, otras opciones se pueden dejar sin cambios):
   - Indique el __nombre de host__, por ejemplo _moodlebox_
   - Marque la casilla __Habilitar SSH__ y la opción __Utilizar autenticación por contraseña__.
   - Indique el __nombre de usuario__ y la __contraseña__, por ejemplo _moodlebox_ y _MoodleBox4$_.
   - Haga clic en __Guardar__.
8. Haga clic en __Escribir__, luego responda __Sí__ a la pregunta __¿Está seguro de que desea continuar?__.

{{< figure src="/img/media/rpi-imager-settings.png" alt="Configuración de Raspberry Pi Imager" class="centered-image" width="700" >}}

La aplicación __Raspberry Pi Imager__ descargará y flasheará la última versión de la imagen de disco de MoodleBox en tu tarjeta microSD. Esto puede tardar varios minutos dependiendo de la velocidad de tu conexión a Internet y de la tarjeta SD.

### Procedimiento alternativo para usuarios avanzados

Puedes [descargar la imagen de disco manualmente][manualdownload], y luego usar otra herramienta para flashear la imagen de disco de MoodleBox, por ejemplo Raspberry Pi Imager, BalenaEtcher o `dd`.

 [imager]: https://www.raspberrypi.com/software/
 [manualdownload]: {{< relref "help/download-the-disk-image" >}}
