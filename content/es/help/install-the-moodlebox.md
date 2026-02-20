---
title: Instalación de MoodleBox
authors:
  - Nicolas Martignoni
  - Steve Miley
  - Eric Efrain Solano-Uscanga
type: kb
date: 2017-09-15
lastmod: 2026-02-20
description: El procedimiento para instalar la MoodleBox para su primera utilización se describe aquí
slug: instalar-la-moodlebox
categories_weight: 1
categories:
  - Primeros pasos
aliases:
  - ../install
---
Proceda de la siguiente manera para utilizar la MoodleBox por primera vez.

### Paso 1: Comprar el hardware

El [hardware que necesitas para tu MoodleBox][1] es esencialmente una Raspberry Pi (3A+, 3B, 3B+, 4B, 400 o 5), una buena fuente de alimentación y una tarjeta microSD de alta calidad. Además, se recomienda una Carcasa para proteger la placa.

&Gt; [Más información aquí][1]

### Paso 2: Copiar la imagen de disco en la tarjeta microSD

Para esta tarea utilice la utilidad [Raspberry Pi Imager][rpi-imager], que __descargará automáticamente__ la imagen de disco de MoodleBox por usted. Por favor, aplique también la configuración recomendada al copiar la imagen.

&Gt; [Más información aquí][3]

### Paso 3: Arranca tu MoodleBox

Inserte su tarjeta microSD en la ranura de la Raspberry Pi y enciéndala. El LED rojo se enciende, y después de unos segundos el LED verde se enciende de forma intermitente. Si conecta la MoodleBox a la red o a un router de Internet a través de un cable Ethernet, los dispositivos móviles conectados a través de WLAN podrán acceder a Internet.

&Gt; [Más información aquí][10]

No es necesario realizar más ajustes. Después de arrancar, la MoodleBox está lista y completamente funcional.

### Próximos pasos

  * [Conexión Wi-Fi][5]
  * [Acceso a Moodle][4]
  * [Cambiar la contraseña principal][11]
  * [Configuración Wi-Fi][6]
  * [Acceso SSH][7] a la MoodleBox
  * [Apoyar el proyecto MoodleBox][8]

Para más información, consulta nuestra [base de conocimientos][9].

 [1]: {{< relref "help/hardware" >}}
 [3]: {{< relref "help/copy-the-disk-image" >}}
 [4]: {{< relref "help/access-to-moodle" >}}
 [5]: {{< relref "help/wi-fi-connection" >}}
 [6]: {{< relref "help/wi-fi-configuration" >}}
 [7]: {{< relref "help/command-line-access" >}}
 [8]: {{< relref "/support-moodlebox" >}}
 [9]: {{< relref "/help" >}}
 [10]: {{< relref "help/startup-shutdown-restart" >}}
 [11]: {{< relref "help/change-password" >}}
 [rpi-imager]: https://www.raspberrypi.com/software/
