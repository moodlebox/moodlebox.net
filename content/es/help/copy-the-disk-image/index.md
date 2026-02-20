---
title: Copiar la imagen de disco a una tarjeta SD
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-04-20
lastmod: 2026-02-20
description: Para copiar la imagen de disco de MoodleBox a una tarjeta SD, simplemente descarga la utilidad Raspberry Pi Imager y sigue estas instrucciones.
slug: copiar-la-imagen-disco-en-una-tarjeta-sd
categories_weight: 4
categories:
  - Primeros pasos
---
Para copiar el sistema MoodleBox en tu tarjeta microSD, utiliza la utilidad [Raspberry Pi Imager][imager]. Esta aplicación está publicada por la Fundación Raspberry Pi.

### Cómo proceder

1. Descargue la última versión de la utilidad [Raspberry Pi Imager][imager] e instálala en tu ordenador.
1. Inicie la aplicación _Raspberry Pi Imager_.
   {{< figure src="rpi-imager-es.png" alt="Raspberry Pi Imager" class="centered-image" width="700" >}}
1. Seleccione su modelo de Raspberry Pi, haga clic en __Siguiente__ para acceder a la pestaña __SO__, desplácese hacia abajo y selecciona el __Other specific-purpose OS__.
1. Desplácese hacia abajo, seleccione __MoodleBox__ y elija la última versión de imagen de disco de MoodleBox.
1. Clic en __Siguiente__ para ir a la pestaña __Almacenamiento__ y selecciona tu tarjeta microSD.
1. Clic en __Siguiente__ para ir a la pestaña __Personalización__ y especifique la configuración que desea para su MoodleBox:
   - el nombre de equipo, por ejemplo _moodlebox_,
   - la configuración de la ubicación (ciudad, zona horaria, teclado),
   - un nombre de usuario y una contraseña, por ejemplo _moodlebox_ y _MoodleBox4$_,
   - opcionalmente, el SSID y la contraseña de tu red Wi-Fi local,
   - active SSH y marque el botón de opción __Usar autenticación por contraseña__.
1. Clic en __Siguiente__ para ir a la pestaña __Escritura__, clic en __Escribir__ y cuando se le pregunte si desea continuar, borrando todos los datos de su tarjeta SD, clic en __Lo intiendo, borrar y escribir__.
   {{< figure src="rpi-imager-warning-es.png" alt="Aviso de Raspberry Pi Imager" class="centered-image" width="700" >}}

La aplicación __Raspberry Pi Imager__ descargará y flasheará la última versión de la imagen de disco de MoodleBox en tu tarjeta microSD. Esto puede tardar varios minutos dependiendo de la velocidad de tu conexión a Internet y de la tarjeta SD.

 [imager]: https://www.raspberrypi.com/software/
